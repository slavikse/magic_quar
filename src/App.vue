<template>
  <a-scene
    id='App'
    physics='
      debug: true;
      iterations: 3000;
      maxInterval: 0.008;
    '
    stats='true'
    vr-mode-ui='enabled: false'
  >
    <AssetsAudios/>
    <AssetsImages/>
    <AssetsModels/>

    <Balls/>
    <Mobs/>
    <Player/>
    <Walls/>
    <Lights/>
    <World/>

    <!-- animation-mixer -->
    <!--
      movement: {
        property: 'position',
        easing: 'linear',
        dur: 30000,
        to: { z: 66 },
      },
    -->
    <!--
    <a-gltf-model
      id='PlayerGun2'
      position='-10 0 18'
      rotation='0 0 0'
      scale='0.1 0.1 0.1'
      animation-mixer
      src="#"
      animation='movement'
    />
    -->
  </a-scene>
</template>

<script>
import {
  AssetsAudios,
  AssetsImages,
  AssetsModels,

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
    AssetsAudios,
    AssetsImages,
    AssetsModels,

    Balls,
    Lights,
    Mobs,
    Player,
    Walls,
    World,
  },
};
</script>
