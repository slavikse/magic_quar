<template>
  <a-entity id='Balls'>
    <BallsBall
      v-for='({ id, isShown }) in balls'
      v-if='isShown'
      :key='id'
      :id='id'
    />
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
      interval: null,
      clearTime: 60 * 1000,
    };
  },

  mounted() {
    document.addEventListener('PlayerFire', this.fire);
    this.interval = setInterval(this.cleaner, this.clearTime);
  },

  destroyed() {
    document.removeEventListener('PlayerFire', this.fire);
    clearInterval(this.interval);
  },

  methods: {
    fire({ detail: { position, direction } }) {
      const id = uuidv1();

      setTimeout(this.hide.bind(this, id), this.lifeTime);
      this.balls.push({ id, isShown: true });

      this.$nextTick(this.acceleration.bind(null, id, position, direction));
    },

    hide(hidesId) {
      this.balls.some(({ id: ballId }, index) => {
        if (ballId === hidesId) {
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
