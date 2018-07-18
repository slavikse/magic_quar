<template>
  <!-- ar embedded arjs -->
  <!-- fog='type: linear; color: #aaa' -->
  <a-scene
    physics='debug: false; iterations: 1000; maxInterval: 0.01'
    vr-mode-ui='enabled: false'
    stats='false'
    background='color: #333'
  >
    <a-assets>
      <!--
      <a-asset-item
      id='colt'
      src='models/colt/scene.gltf'
      />
      -->

      <img
        id='background'
        src='textures/background.jpg'
      >

      <img
        id='roof'
        src='textures/roof.jpg'
      >

      <img
        id='floor'
        src='textures/floor.jpg'
      >

      <img
        id='wall'
        src='textures/wall.jpg'
      >
    </a-assets>

    <!-- animation-mixer
      const obj1Id = e.detail.el.id;
      const obj2Id = e.detail.intersection.object.el.id;

      <a-gltf-model
      src="#colt"
      @raycaster-intersected=''
      id=''
      />
      <a-entity
      gltf-model="#imp"
      />
    -->

    <!--sound='src: url(""); loop: true; autoplay: true; volume: 0.5'-->

    <a-sky
      radius='500'
      src='#background'
    />

    <a-light
      type='ambient'
      color='white'
    />

    <a-entity
      position='-6 1 -5'
      rotation='0 -60 0'
      light='type: directional; decay: 2; color: #ffc18f; intensity: 0.67; castShadow: true'
      class='wall'
    />

    <!--
    <a-box
      position='0 1 -5'
      width='2'
      height='3'
      depth='0.5'
      @click='fire'
      static-body
      animation='property: rotation; dir: alternate; dur: 3000; loop: true; to: 0 360 0'
      shadow='castShadow: true'
      :color='color'
    />
    -->

    <a-box
      position='11 4 -12'
      width='2'
      height='3'
      depth='0.5'
      dynamic-body='mass: 4'
      shadow='castShadow: true'
      color='cyan'
      class='wall'
    />

    <a-box
      position='9 4 -10'
      width='2'
      height='3'
      depth='0.5'
      dynamic-body='mass: 4'
      shadow='castShadow: true'
      color='cyan'
      class='wall'
    />

    <a-box
      position='7 4 -8'
      width='2'
      height='3'
      depth='0.5'
      dynamic-body='mass: 4'
      shadow='castShadow: true'
      color='cyan'
      class='wall'
    />

    <a-box
      position='5 4 -6'
      width='2'
      height='3'
      depth='0.5'
      dynamic-body='mass: 4'
      shadow='castShadow: true'
      color='cyan'
      class='wall'
    />

    <Balls/>
    <Mobs/>
    <Player/>
    <Walls/>

    <!-- todo type: lock. создать эффект захвата объекта. -->
    <a-box
      constraint="target: #player; type: distance; distance: 4"
      dynamic-body
      color='teal'
      class='wall'
    />

    <!--
    <a-ocean
    position='4 0.5 -5'
    width='100'
    depth='100'
    density='40'
    speed='2'
    color='#92E2E2'
    />
    -->
  </a-scene>
</template>

<script>
import { Balls, Mobs, Player, Walls } from './components';

export default {
  name: 'App',

  components: {
    Balls,
    Mobs,
    Player,
    Walls,
  },

  data() {
    return {
      color: '#000',
    };
  },

  methods: {
    fire() {
      this.changeColor();
    },

    changeColor() {
      this.color = `#${((Math.random() * (255 - 100)) + 100).toFixed(0)}`;
    },
  },
};
</script>
