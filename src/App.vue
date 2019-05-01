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
    <Latency />
    <Walls />
  </a-scene>
</template>

<script>
import {
  AssetsImages,
  Balls,
  Clients,
  Lights,
  Player,
  Latency,
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
    Latency,
    Walls,
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
</style>
