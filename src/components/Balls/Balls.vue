<template>
  <a-entity id="Balls">
    <template v-for="{ id, isShown } in balls">
      <BallsBall
        v-if="isShown"
        :key="id"
        :id="id"
      />
    </template>
  </a-entity>
</template>

<script>
import uuidv1 from 'uuid/v1';
import BallsBall from './BallsBall.vue';

export default {
  name: 'Balls',

  components: {
    BallsBall,
  },

  data() {
    return {
      balls: [],
      lifeTime: 10 * 1000,
      intervalId: undefined,
      clearTime: 20 * 1000,
    };
  },

  mounted() {
    document.addEventListener('PlayerFire', this.fire);
    this.intervalId = setInterval(this.cleaner, this.clearTime);
  },

  destroyed() {
    document.removeEventListener('PlayerFire', this.fire);
    clearInterval(this.intervalId);
  },

  methods: {
    fire({ detail: { position, direction } }) {
      const id = uuidv1();

      setTimeout(() => this.hide(id), this.lifeTime);
      this.balls.push({ id, isShown: true });

      this.$nextTick(() => this.acceleration(id, position, direction));
    },

    hide(hideBallId) {
      this.balls.some(({ id: ballId }, index) => {
        if (ballId === hideBallId) {
          this.balls[index].isShown = false;
          return true;
        }

        return false;
      });
    },

    async acceleration(id, position, direction) {
      const ball = await document.getElementById(id);

      ball.body.position.set(...position);
      ball.body.velocity.set(...direction);
    },

    cleaner() {
      this.balls = this.balls.filter(({ isShown }) => isShown);
    },
  },
};
</script>
