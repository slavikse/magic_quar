<template>
  <a-scene
    embedded
    arjs
  >
    <a-assets>
      <a-asset-item
        id='colt'
        src='models/colt/scene.gltf'
      />

      <a-asset-item
        id='potion'
        src='models/potion/scene.gltf'
      />

      <a-asset-item
        id='imp'
        src='models/imp/scene.gltf'
      />
    </a-assets>

    <a-light
      type='ambient'
      color='white'
    />

    <!--a-marker-camera & a-marker-->
    <a-marker
      type='pattern'
      animation-mixer
      url='markers/pattern-marker.patt'
    >
      <!--
      <a-gltf-model
        position='0 -1.5 -1.5'
        rotation='-90 0 0'
        src="#potion"
      />

      <a-gltf-model
        position='0 -1.5 -1.5'
        rotation='-90 0 0'
        src="#imp"
      />
      -->

      <a-gltf-model
        position='-1.5 1 0'
        rotation='0 270 60'
        scale='0.1 0.1 0.1'
        src="#colt"
      />
    </a-marker>
  </a-scene>

  <!--<a-scene-->
  <!--physics='debug: false; iterations: 100; maxInterval: 0.015'-->
  <!--stats='false'-->
  <!--background='color: #333'-->
  <!--fog='type: linear; color: #aaa'-->
  <!--embedded-->
  <!--arjs-->
  <!--&gt;-->
  <!--&lt;!&ndash;sound='src: url(audios/octobernight.mp3); loop: true; autoplay: true; volume: 0.5'&ndash;&gt;-->

  <!--&lt;!&ndash;-->
  <!--embedded-->
  <!--arjs-->
  <!--&ndash;&gt;-->
  <!--<a-assets>-->
  <!--&lt;!&ndash;-->
  <!--<a-asset-item-->
  <!--id='imp'-->
  <!--src='models/imp/scene.gltf'-->
  <!--/>-->
  <!--&ndash;&gt;-->

  <!--<img-->
  <!--id='background'-->
  <!--src='textures/background.jpg'-->
  <!--&gt;-->

  <!--<img-->
  <!--id='roof'-->
  <!--src='textures/roof.jpg'-->
  <!--&gt;-->

  <!--<img-->
  <!--id='floor'-->
  <!--src='textures/floor.jpg'-->
  <!--&gt;-->

  <!--<img-->
  <!--id='wall'-->
  <!--src='textures/wall.jpg'-->
  <!--&gt;-->
  <!--</a-assets>-->

  <!--
  <a-entity
  position='-30 10 0'
  gltf-model="#imp"
  static-body
  />
  -->

  <!--<a-sky-->
  <!--radius='500'-->
  <!--src='#background'-->
  <!--/>-->

  <!--
  <a-light
  type='ambient'
  color='white'
  />
  -->

  <!--<a-light-->
  <!--type='hemisphere'-->
  <!--intensity='0.4'-->
  <!--groundColor='#5424ff'-->
  <!--color='white'-->
  <!--castShadow='true'-->
  <!--/>-->

  <!--<a-light-->
  <!--position='-6 1 -5'-->
  <!--rotation='0 -60 0'-->
  <!--type='spot'-->
  <!--distance='20'-->
  <!--intensity='0.67'-->
  <!--castShadow='true'-->
  <!--color='#ccc'-->
  <!--/>-->

  <!--<a-box-->
  <!--position='0 1 -5'-->
  <!--width='2'-->
  <!--height='3'-->
  <!--depth='0.5'-->
  <!--@click='fire'-->
  <!--static-body-->
  <!--animation='property: rotation; dir: alternate; dur: 3000; loop: true; to: 0 360 0'-->
  <!--castShadow='true'-->
  <!--shadow='receive: true'-->
  <!--:color='color'-->
  <!--/>-->

  <!--<Mobs/>-->
  <!--<Player/>-->
  <!--<Walls/>-->

  <!--&lt;!&ndash;-->
  <!--<a-ocean-->
  <!--position='4 0.5 -5'-->
  <!--width='100'-->
  <!--depth='100'-->
  <!--density='40'-->
  <!--speed='2'-->
  <!--color='#92E2E2'-->
  <!--/>-->
  <!--&ndash;&gt;-->
  <!--</a-scene>-->
</template>

<script>
import { Mobs, Player, Walls } from './components';

export default {
  name: 'App',

  components: {
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
