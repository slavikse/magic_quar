<template>
  <a-entity>
    <Ball
      v-for='({ id, isShown }) in balls'
      v-if='isShown'
      :key='id'
      :id='id'
    />
  </a-entity>
</template>

<script>
import uuidv1 from 'uuid/v1';
import Ball from './Ball.vue';

export default {
  name: 'Balls',

  components: {
    Ball,
  },

  data() {
    return {
      balls: [],
      lifeTime: 5 * 1000,
      interval: null,
      clearTime: 60 * 1000,
    };
  },

  mounted() {
    document.addEventListener('fire', this.fire);
    this.interval = setInterval(this.cleaner, this.clearTime);
  },

  destroyed() {
    document.removeEventListener('fire', this.fire);
    clearInterval(this.interval);
  },

  methods: {
    fire({ detail: { position, direction } }) {
      const id = uuidv1();

      setTimeout(this.hide.bind(this, id), this.lifeTime);
      this.balls.push({ id, isShown: true });

      this.$nextTick(this.acceleration.bind(null, id, position, direction));
    },

    hide(id) {
      this.balls.some(({ id: ballId }, index) => {
        if (ballId === id) {
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
