<template>
  <a-scene
    embedded
    arjs
  >
    <a-assets>
      <!--
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
      -->

      <a-asset-item
        id='medieval'
        src='models/medieval/scene.gltf'
      />

      <a-asset-item
        id='sword'
        src='models/sword/scene.gltf'
      />

      <a-asset-item
        id='wind_serpent'
        src='models/wind_serpent/scene.gltf'
      />
    </a-assets>

    <a-light
      type='ambient'
      color='white'
    />

    <!--<a-box cursor-listener/>-->

    <!--a-marker-camera & a-marker-->
    <a-marker
      type='pattern'
      animation-mixer
      url='markers/marker1/pattern-marker.patt'
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

      <a-gltf-model
      position='-1.5 1 0'
      rotation='0 270 60'
      scale='0.1 0.1 0.1'
      src="#colt"
      />
      -->

      <a-gltf-model
        position='-0.5 2 -1.5'
        rotation='-20 0 0'
        scale='0.4 0.4 0.4'
        animation='property: position; dir: alternate; dur: 3000; loop: true; to: -0.5 2.5 -1.5'
        animation__two='property: rotation; dir: alternate; dur: 2000; loop: true; to: 0 10 20'
        src="#wind_serpent"
        raycaster
        id='1'
      />
    </a-marker>

    <a-marker
      type='pattern'
      animation-mixer
      url='markers/marker2/pattern-marker.patt'
    >
      <a-gltf-model
        position='1 1 -2'
        rotation='50 -40 10'
        scale='2.5 2.5 2.5'
        src="#medieval"
        @raycaster-intersected='test2'
        id='2'
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
  <!--&lt;!&ndash;sound='src: url(""); loop: true; autoplay: true; volume: 0.5'&ndash;&gt;-->

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
    test2(e) {
      console.log('Пересечение!');
      const obj1Id = e.detail.el.id;
      const obj2Id = e.detail.intersection.object.el.id;
      console.log(`id ${obj1Id} с id ${obj2Id}.`);
      console.log('Дракона с мечом!');
    },

    fire() {
      this.changeColor();
    },

    changeColor() {
      this.color = `#${((Math.random() * (255 - 100)) + 100).toFixed(0)}`;
    },
  },
};
</script>
