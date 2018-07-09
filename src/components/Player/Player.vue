<template>
  <a-entity
    movement-controls='fly: false'
    jump-ability='maxJumps: 1; distance: 1.2'
    kinematic-body
    mesh-smooth
    @click='click'
    @collide='collide'
  >
    <a-entity
      position='0 1.5 0'
      look-controls='pointerLockEnabled: true'
      camera
    >
      <!--<Balls/>-->

      <!-- todo -->
      <a-sphere
        position='0 0.01 -0.1'
        radius='0.04'
        dynamic-body
        ref='ball'
        color='black'
      />

      <!-- todo добавить модель оружия
      <a-entity
        position='0 -0.5 -3'
        id='weapon'
      >
        <a-box
          width='0.2'
          height='0.2'
          depth='0.5'
          static-body
          color='blue'
        />
      </a-entity>
      -->

      <a-cursor
        geometry='primitive: ring; radiusInner: 0.0001; radiusOuter: 0.003'
        material='shader: flat; color: black'
      />
    </a-entity>
  </a-entity>
</template>

<script>
import { Balls } from '../Balls';

export default {
  name: 'Player',

  components: {
    Balls,
  },

  data() {
    return {
      click() {},
      rate: 300,
      event: new CustomEvent('fire'),
    };
  },

  mounted() {
    this.click = window.AFRAME.utils.throttle(this.fire, this.rate);
  },

  methods: {
    fire() {
      // document.dispatchEvent(this.event);

      this.$refs.ball.body.position.set(0, 0.01, -0.1);
      this.$refs.ball.body.velocity.set(0, 0, -20);
      this.$refs.ball.body.angularVelocity.set(0, 0, 0);
    },

    collide(e) {
      console.log('collide', e);
    },
  },
};
</script>
