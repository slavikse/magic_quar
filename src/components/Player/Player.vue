<template>
  <a-entity
    id="Player"
    movement-controls="speed: 0.4"
    kinematic-body="enableJumps: true"
    jump-ability="distance: 2.5; maxJumps: 2"
  >
    <a-entity
      id="PlayerCamera"
      ref="Player"
      position="0 1.6 0"
      look-controls="pointerLockEnabled: true"
      camera
      @click="click"
    >
      <a-cursor
        id="PlayerCursor"
        ref="Cursor"
        scale="0.5 0.5 0.5"
      />
    </a-entity>
  </a-entity>
</template>

<script>
import io from 'socket.io-client';

const URI = process.env.VUE_APP_BASE_URL;
const opts = { transports: ['websocket'] };
const frequency = 1000 / 60;

let socket;
let broadcastId;

export default {
  name: 'Player',

  data() {
    return {
      clientId: -1,
      Player: undefined,
      Cursor: undefined,

      click: () => { },
      rate: 1000 / 5,
      acceleration: -20,

      position: [0, 0, 0],
      rotation: [0, 0, 0],
    };
  },

  mounted() {
    this.initial();
    this.connect();
    this.broadcast();
  },

  destroyed() {
    clearTimeout(broadcastId);
  },

  methods: {
    initial() {
      this.Player = this.$refs.Player.object3D;
      this.Cursor = this.$refs.Cursor.object3D;

      this.click = window.AFRAME.utils.throttle(this.fire, this.rate);
    },

    fire() {
      const { x: pX, y: pY, z: pZ } = this.Cursor.getWorldPosition(new window.THREE.Vector3());
      const { x: dX, y: dY, z: dZ } = this.Cursor.getWorldDirection(new window.THREE.Vector3());

      const fire = {
        position: [pX, pY, pZ],
        direction: [dX, dY, dZ].map(d => d * this.acceleration),
      };

      const playerFire = new CustomEvent('PlayerFire', { detail: fire });
      document.dispatchEvent(playerFire);

      socket.emit('clientUpdate', { fire });
    },

    connect() {
      socket = io(`${URI}/clients`, opts);

      // Сервер выдает идентификатор.
      socket.once('connected', async ({ clientId, clients }) => {
        this.clientId = clientId;
        this.$store.dispatch('clients/add', clients);

        const payload = {
          position: this.position,
          rotation: this.rotation,
        };

        // Инициализация состояния на сервере для всех подключённых клиентов.
        socket.emit('connected', payload);
        console.log('client id', clientId);
      });

      socket.on('clientUpdate', async (client) => {
        await this.$store.dispatch('clients/update', client);
      });

      socket.on('pong', async (latency) => {
        await this.$store.dispatch('player/latency', latency);
      });

      socket.on('disconnected', async ({ clientId }) => {
        console.log('disconnected', clientId);
        await this.$store.dispatch('clients/delete', clientId);
      });
    },

    broadcast() {
      broadcastId = setTimeout(this.broadcast, frequency);

      const { x, y, z } = this.Player.getWorldPosition(new window.THREE.Vector3());
      this.position = [x, y, z];

      const { _x: x2, _y: y2, _z: z2 } = this.Player.rotation;
      this.rotation = [
        window.THREE.Math.radToDeg(x2),
        window.THREE.Math.radToDeg(y2),
        window.THREE.Math.radToDeg(z2),
      ];

      socket.emit('clientUpdate', {
        position: this.position,
        rotation: this.rotation,
      });
    },
  },
};
</script>
