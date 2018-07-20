<template>
  <a-scene
    id='App'
    physics='
      debug: true;
      iterations: 2000;
      maxInterval: 0.01;
    '
    vr-mode-ui='enabled: false'
    stats='true'
  >
    <Assets/>
    <Balls/>
    <Mobs/>
    <Player/>
    <Walls/>
    <Lights/>
    <World/>
  </a-scene>
</template>

<script>
import {
  Assets,
  Balls,
  Lights,
  Mobs,
  Player,
  Walls,
  World,
} from './components';

export default {
  name: 'App',

  components: {
    Assets,
    Balls,
    Lights,
    Mobs,
    Player,
    Walls,
    World,
  },
};
</script>
