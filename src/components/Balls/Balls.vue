<template>
  <a-entity>
    <Ball
      v-for='(isShown, index) in balls'
      :key='index'
      v-if='isShown'
    />
  </a-entity>
</template>

<script>
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
    document.addEventListener('fire', this.add);
    this.interval = setInterval(this.clear, this.clearTime);
  },

  destroyed() {
    document.removeEventListener('fire', this.add);
    clearInterval(this.interval);
  },

  methods: {
    add() {
      setTimeout(this.hide.bind(this, this.balls.length), this.lifeTime);
      this.balls.push(true);
    },

    hide(index) {
      this.balls.splice(index, 1, false);
    },

    clear() {
      this.balls = this.balls.filter(isSown => !isSown);
    },
  },
};
</script>
