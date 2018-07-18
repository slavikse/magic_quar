<template>
  <a-entity
    id='player'
    movement-controls='fly: false; speed: 0.45'
    jump-ability='maxJumps: 1; distance: 1.1'
    kinematic-body
    mesh-smooth
  >
    <!--@raycaster-intersection='intersection'-->
    <!--
      ar-raycaster
      raycaster='showLine: true; far: 100'
      line='color: orange; opacity: 0.5'
    -->
    <a-entity
      position='0 1.6 0'
      @click='click'
      @collide='collide'
      look-controls='pointerLockEnabled: true'
      camera
    >
      <!-- todo добавить модель оружия
      <a-entity
        position='0 0 -4'
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
        ref='cursor'
        geometry='primitive: ring; radiusInner: 0.0001; radiusOuter: 0.003'
        material='shader: flat; color: black'
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
      click: Function,
      // 10 выстрелов в секунду.
      rate: 1000 / 10,
      acceleration: -30,
    };
  },

  mounted() {
    this.click = window.AFRAME.utils.throttle(this.fire, this.rate, null);
    window.app.fire = this.fire;
  },

  methods: {
    fire() {
      const { object3D: cursor } = this.$refs.cursor;
      const { x: pX, y: pY, z: pZ } = cursor.getWorldPosition();
      const { x: dX, y: dY, z: dZ } = cursor.getWorldDirection();

      const event = new CustomEvent('fire', {
        detail: {
          position: [pX, pY, pZ],
          direction: [dX, dY, dZ].map(d => d * this.acceleration),
        },
      });

      document.dispatchEvent(event);

      new Audio('audios/revolver_shoot1.mp3').play();
    },

    collide(e) {
      // console.log('collide', e);
    },

    intersection(e) {
      // console.log('intersection', e.detail.intersections[0].point);
    },
  },
};
</script>
