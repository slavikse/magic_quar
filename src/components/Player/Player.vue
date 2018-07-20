<template>
  <a-entity
    id='Player'
    position='0 0 5'
    movement-controls='speed: 0.45'
    jump-ability='distance: 1.1'
    kinematic-body
    mesh-smooth
  >
    <!-- todo добавить модель оружия -->
    <a-entity
      id='PlayerCamera'
      @click='click'
      position='0 1.6 0'
      look-controls='pointerLockEnabled: true'
      camera
    >
      <a-cursor
        id='PlayerCursor'
        ref='PlayerCursor'
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
      />
    </a-entity>
  </a-entity>
</template>

<script>
export default {
  name: 'Player',

  data() {
    return {
      PlayerCursor: null,
      click: Function,
      rate: 1000 / 5,
      acceleration: -20,
    };
  },

  mounted() {
    this.PlayerCursor = this.$refs.PlayerCursor.object3D;

    this.click = window.AFRAME.utils.throttle(this.fire, this.rate, null);
    window.app.PlayerFire = this.fire;
  },

  methods: {
    fire() {
      const { x: pX, y: pY, z: pZ } = this.PlayerCursor.getWorldPosition();
      const { x: dX, y: dY, z: dZ } = this.PlayerCursor.getWorldDirection();

      const playerFire = new CustomEvent('PlayerFire', {
        detail: {
          position: [pX, pY, pZ],
          direction: [dX, dY, dZ].map(d => d * this.acceleration),
        },
      });

      document.dispatchEvent(playerFire);
      // todo добавить другой звук.
      new Audio('audios/revolver_shoot1.mp3').play();
    },
  },
};
</script>
