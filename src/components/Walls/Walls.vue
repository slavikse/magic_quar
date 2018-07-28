<template>
  <a-entity id='Walls'>
    <a-box
      id='WallsRoof'
      src='#AssetsImagesRoof'
      position='0 5 0'
      rotation='-90 0 0'
      height='30'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='5 10'
      roughness='1'
      static-body
    />

    <a-plane
      id='WallsFloor'
      src='#AssetsImagesFloor'
      rotation='-90 0 0'
      height='80'
      width='80'
      repeat='30 45'
      roughness='1'
      static-body
      shadow='receive: true'
    />

    <a-box
      id='WallsFront'
      src='#AssetsImagesWall'
      position='0 2 -15'
      rotation='0 0 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='5 2'
      roughness='1'
      static-body
    />

    <a-box
      id='WallsLeft'
      src='#AssetsImagesWall'
      position='4 2 15'
      rotation='0 180 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='5 2'
      roughness='1'
      static-body
      :animation='movement'
    />

    <a-box
      id='WallsRight'
      src='#AssetsImagesWall'
      position='-15 2 0'
      rotation='0 90 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='5 2'
      roughness='1'
      static-body
    />

    <a-box
      id='WallsBack'
      src='#AssetsImagesWall'
      position='15 2 0'
      rotation='0 -90 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='5 2'
      roughness='1'
      static-body
    />
  </a-entity>
</template>

<script>
// todo когда перс зашёл, звук закрывания двери.
export default {
  name: 'Walls',

  data() {
    return {
      // todo кнопка на входе, куда нужно выстрелить, чтобы открылась дверь.
      // opened | closed
      status: 'closed',
      movement: {
        property: 'position',
        easing: 'linear',
        dir: 'alternate',
        dur: 3000,
        loop: true,
        to: { x: 0 },
        startEvents: 'test',
        autoplay: true,
      },
    };
  },

  methods: {
    test() {
      console.log('test');
    },
  },
};
</script>
