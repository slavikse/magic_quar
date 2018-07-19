<template>
  <a-entity id='Walls'>
    <!-- Потолок -->
    <a-box
      id='WallsRoof'
      src='#AssetsRoof'
      position='0 5 0'
      rotation='-90 0 0'
      height='30'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='20 20'
      roughness='1'
      static-body
      class='collide'
    />

    <!-- Пол -->
    <a-plane
      id='WallsFloor'
      src='#AssetsFloor'
      rotation='-90 0 0'
      height='100'
      width='100'
      repeat='50 50'
      roughness='1'
      static-body
      shadow='receive: true'
    />

    <!-- Стена спереди -->
    <a-box
      id='WallsFront'
      src='#AssetsWall'
      position='0 2 -15'
      rotation='0 0 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      static-body
      class='collide'
    />

    <!-- Стена слева -->
    <a-box
      id='WallsLeft'
      src='#AssetsWall'
      position='0 2 15'
      rotation='0 180 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      static-body
      class='collide'
    />

    <!-- Стена справа -->
    <a-box
      id='WallsRight'
      src='#AssetsWall'
      position='-15 2 0'
      rotation='0 90 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      static-body
      class='collide'
    />

    <!-- Стена сзади -->
    <a-box
      id='WallsBack'
      src='#AssetsWall'
      position='15 2 0'
      rotation='0 -90 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      static-body
      class='collide'
    />
  </a-entity>
</template>

<script>
export default {
  name: 'Walls',
};
</script>
