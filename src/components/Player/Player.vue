<template>
  <a-entity
    id="Player"
    :movement-controls="controls"
    position="0 0 10"
    kinematic-body
    jump-ability="distance: 1.2"
    shadow="receive: true"
  >
    <a-entity
      id="PlayerCamera"
      position="0 1.6 0"
      look-controls="pointerLockEnabled: true"
      camera
      @click="click"
    >
      <a-cursor
        id="PlayerCursor"
        ref="PlayerCursor"
        position="0 -0.7 -2"
      />

      <a-gltf-model
        id="PlayerGun"
        position="0 -0.6 -1"
        rotation="0 90 0"
        scale="0.05 0.05 0.05"
        src="#AssetsModelsGun"
      />
    </a-entity>
  </a-entity>
</template>

<script>
import hotkeys from 'hotkeys-js';

// todo запас пуль и перезарядка.
// todo реакция модели на выстрел - отдача для оружия.
// todo при ходьбе мотать оружие из стороны в сторону.
// todo система хп. места пополнения хп.
export default {
  name: 'Player',

  data() {
    return {
      PlayerCursor: null,
      click: () => { },
      rate: 1000 / 3,
      move: () => { },
      run: () => { },
      jump: () => { },
      duration: { move: 350, run: 200, jump: 600 },
      controls: { speed: 0.45 },
      acceleration: -40,
    };
  },

  mounted() {
    this.PlayerCursor = this.$refs.PlayerCursor.object3D;

    this.click = window.AFRAME.utils.throttle(this.fire, this.rate);
    this.move = window.AFRAME.utils.throttle(window.app.noise, this.duration.move);
    this.run = window.AFRAME.utils.throttle(window.app.noise, this.duration.run);
    this.jump = window.AFRAME.utils.throttle(window.app.noise, this.duration.jump);

    window.app.PlayerFire = this.click;

    this.movement();
  },

  destroyed() {
    hotkeys.unbind('w, a, s, d, w+a, w+d, shift+w, shift+w+a, shift+w+d, space');
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
      window.app.noise({ path: 'audios/revolver_shoot1.mp3' });
    },

    movement() {
      // todo send position
      // const { x, y, z } = this.PlayerCursor.getWorldPosition();

      const wasd = 'w, a, s, d, w+a, w+d';
      const special = 'shift+w, shift+w+a, shift+w+d, space';

      hotkeys(`${wasd}, ${special}`, (_, { key }) => {
        switch (key) {
          case 'w':
          case 'a':
          case 's':
          case 'd':
          case 'w+a':
          case 'w+d':
            this.controls = { ...this.controls, speed: 0.45 };
            this.move({ path: 'audios/step_stone.mp3' });
            break;

          case 'shift+w':
          case 'shift+w+a':
          case 'shift+w+d':
            this.controls = { ...this.controls, speed: 0.8 };
            this.run({ path: 'audios/step_stone.mp3' });
            break;

          case 'space':
            this.jump({ path: 'audios/male_jump.mp3' });
            break;

          default:
            console.log('Упс!');
        }
      });
    },
  },
};
</script>
