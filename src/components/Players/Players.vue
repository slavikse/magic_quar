<template>
  <a-entity
    :id='`Player${window.id}`'
    position='-10 0 25'
    :movement-controls='controls'
    jump-ability='distance: 1.2'
    kinematic-body
    shadow='receive: true'
  >
    <!-- todo 1 игрок -->
    <a-entity
      :id='`PlayerCamera${window.id}`'
      @click='click'
      position='0 1.6 0'
      look-controls='pointerLockEnabled: true'
      camera
    >
      <a-cursor
        :id='`PlayerCursor${window.id}`'
        position='0 -0.7 -2'
        cursor='fuse: false'
      />

      <!-- todo руку к моделе пистолета -->
      <a-gltf-model
        :id='`PlayerGun${window.id}`'
        position='0 -0.6 -1'
        rotation='0 90 0'
        scale='0.05 0.05 0.05'
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
  name: 'Players',

  data() {
    return {
      window,
      PlayerCursor: null,
      click: Function,
      rate: 1000 / 3,
      move: Function,
      run: Function,
      jump: Function,
      duration: { move: 350, run: 200, jump: 600 },
      controls: { speed: 0.45 },
      acceleration: -40,
    };
  },

  mounted() {
    this.PlayerCursor = document.getElementById(`PlayerCursor${window.id}`).object3D;

    this.click = window.AFRAME.utils.throttle(this.fire, this.rate, null);
    this.move = window.AFRAME.utils.throttle(window.app.noise, this.duration.move, null);
    this.run = window.AFRAME.utils.throttle(window.app.noise, this.duration.run, null);
    this.jump = window.AFRAME.utils.throttle(window.app.noise, this.duration.jump, null);

    this.sendDelay = window.AFRAME.utils.throttle(this.send, 50, null);

    window.app.PlayerFire = this.click;

    this.movement();

    window.ws.onmessage = ({ data }) => {
      const { payload } = JSON.parse(data);

      if (Number(payload.id) !== window.id) {
        console.log(payload);
      }
    };
  },

  destroyed() {
    hotkeys.unbind('w, a, s, d, w+a, w+d, shift+w, shift+w+a, shift+w+d, space');
  },

  methods: {
    fire() {
      const { x: pX, y: pY, z: pZ } = this.PlayerCursor.getWorldPosition();
      const { x: dX, y: dY, z: dZ } = this.PlayerCursor.getWorldDirection();

      const playerFire = new CustomEvent('PlayerFire0', {
        detail: {
          position: [pX, pY, pZ],
          direction: [dX, dY, dZ].map(d => d * this.acceleration),
        },
      });

      document.dispatchEvent(playerFire);
      window.app.noise({ path: 'audios/revolver_shoot1.mp3' });
    },

    movement() {
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

            const { x, y, z } = this.PlayerCursor.getWorldPosition();
            this.sendDelay([x, y + 1.6, z]);

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
        }
      });
    },

    send(position) {
      window.ws.send(JSON.stringify({
        id: window.id,
        payload: { position },
      }));
    },
  },
};
</script>
