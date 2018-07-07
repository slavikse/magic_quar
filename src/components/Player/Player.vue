<template>
  <a-entity
    kinematic-body
    movement-controls='speed: 0.2'
    jump-ability='maxJumps: 1; distance: 1.2'
    @click='fire'
  >
    <a-entity
      position='0 1 0'
      look-controls='pointerLockEnabled: true'
      camera
    >
      <!-- Патрон. -->
      <a-sphere
        v-for='(_, index) in balls'
        :key='index'
        position='0 0.6 -0.5'
        radius='0.4'
        dynamic-body
        color='#059'
      />

      <a-cursor
        geometry='primitive: ring; radiusInner: 0.0005; radiusOuter: 0.005'
        material='shader: flat; color: black'
      />
    </a-entity>
  </a-entity>
</template>

<script>
import { Ball } from '../Ball';

export default {
  name: 'Player',

  components: {
    Ball,
  },

  data() {
    return {
      balls: [],
    };
  },

  methods: {
    fire() {
      this.balls.push(null);
    },
  },
};
</script>
