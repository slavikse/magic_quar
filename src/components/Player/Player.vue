<template>
  <a-entity
    id='Player'
    movement-controls='speed: 0.45'
    jump-ability='distance: 1.1'
    kinematic-body
    mesh-smooth
  >
    <a-entity
      id='PlayerCamera'
      @click='click'
      position='0 1.6 0'
      look-controls='pointerLockEnabled: true'
      camera
    >
      <a-cursor
        id='PlayerCursor'
        geometry='
          primitive: ring;
          radiusInner: 0.0001;
          radiusOuter: 0.003;
        '
        material='
          shader: flat;
          color: black;
        '
        cursor='fuse: false'
        ref='cursor'
      />
    </a-entity>
  </a-entity>
</template>

<script>
export default {
  name: 'Player',

  data() {
    return {
      click: Function,
      rate: 1000 / 5,
      acceleration: -30,
    };
  },

  mounted() {
    this.click = window.AFRAME.utils.throttle(this.fire, this.rate, null);
    window.app.PlayerFire = this.fire;
  },

  methods: {
    fire() {
      const { object3D: player } = this.$refs.cursor;
      const { x: pX, y: pY, z: pZ } = player.getWorldPosition();
      const { x: dX, y: dY, z: dZ } = player.getWorldDirection();

      const playerFire = new CustomEvent('PlayerFire', {
        detail: {
          position: [pX, pY, pZ],
          direction: [dX, dY, dZ].map(d => d * this.acceleration),
        },
      });

      document.dispatchEvent(playerFire);
      new Audio('audios/revolver_shoot1.mp3').play();
    },
  },
};
</script>
