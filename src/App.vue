<template>
  <a-scene
    physics='gravity: -8; debug: false'
    background='color: #333'
    stats='false'
  >
    <!--
    embedded
    arjs
    -->
    <a-assets>
      <!--
      <a-asset-item
        id='cube'
        src='glTF/AnimatedCube.gltf'
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
    <!--
    <a-entity
      position='0 0 0'
      gltf-model='#cube'
    />
    -->

    <a-sky
      radius='500'
      src='#background'
    />

    <a-light
      type='ambient'
      color='white'
    />

    <a-light
      position='3 10 -10'
      distance='20'
      intensity='0.4'
      type='point'
      color='#ccc'
    />

    <!--
    <a-marker preset="hiro">
      <a-box
        position='0 0.5 0'
        material='color: black'
      />
    </a-marker>
    -->

    <!-- Потолок. -->
    <a-box
      position='0 5 0'
      rotation='-90 0 0'
      height='30'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='20 20'
      roughness='1'
      src='#roof'
      static-body
    />

    <!-- Пол. -->
    <a-plane
      rotation='-90 0 0'
      height='100'
      width='100'
      repeat='50 50'
      roughness='1'
      src='#floor'
      static-body
    />

    <!-- Стены: -->
    <!-- Спереди. -->
    <a-box
      position='0 2 -15'
      rotation='0 0 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      src='#wall'
      static-body
    />

    <!-- Слева. -->
    <a-box
      position='0 2 15'
      rotation='0 180 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      src='#wall'
      static-body
    />

    <!-- Справа.
    <a-box
      position='-15 2 0'
      rotation='0 90 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      src='#wall'
      static-body
    />
    -->

    <!-- Сзади. -->
    <a-box
      position='15 2 0'
      rotation='0 -90 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      src='#wall'
      static-body
    />
    <!-- / Стены -->

    <!-- @raycaster-intersected='test' -->
    <a-box
      position='0 0 -5'
      width='2'
      height='5'
      depth='0.5'
      @click='fire'
      static-body
      :color='color'
    />

    <Player/>
    <Mob/>
  </a-scene>
</template>

<script>
import { Player, Mob } from './components';

export default {
  name: 'App',

  components: {
    Player,
    Mob,
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
