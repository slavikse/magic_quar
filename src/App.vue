<template>
  <a-scene
    id="App"
    physics
    vr-mode-ui="enabled: false"
  >
    <AssetsImages />
    <Balls />
    <Clients />
    <Lights />
    <Player />
    <Walls />

    <div
      v-if="latency !== -1"
      class="latency"
    >
      {{ latency }}ms
    </div>
  </a-scene>
</template>

<script>
import { mapState } from 'vuex';

import {
  AssetsImages,
  Balls,
  Clients,
  Lights,
  Player,
  Walls,
} from './components';

export default {
  name: 'App',

  components: {
    AssetsImages,
    Balls,
    Clients,
    Lights,
    Player,
    Walls,
  },

  computed: {
    ...mapState('player', ['latency']),
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: #333;
}

.latency {
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.1rem 0.5rem 0.35rem;
  border-radius: 1rem;
  text-align: center;
  color: white;
  background-color: darkslategray;
}
</style>
