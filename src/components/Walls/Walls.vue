<template>
  <a-entity id="Walls">
    <a-box
      id="WallsRoof"
      src="#AssetsImagesRoof"
      position="0 10 0"
      rotation="-90 0 0"
      height="30"
      width="30"
      depth="0.5"
      repeat="5 10"
      static-body
    />

    <a-plane
      id="WallsFloor"
      src="#AssetsImagesFloor"
      rotation="-90 0 0"
      height="80"
      width="80"
      repeat="30 45"
      static-body
    />

    <a-box
      id="WallsFront"
      src="#AssetsImagesWall"
      position="0 5 -15"
      rotation="0 0 0"
      height="10"
      width="30"
      depth="0.5"
      repeat="10 6"
      static-body
    />

    <a-box
      id="WallsLeft"
      src="#AssetsImagesWall"
      position="0 5 15"
      rotation="0 180 0"
      height="10"
      width="30"
      depth="0.5"
      repeat="10 6"
      static-body
    />

    <a-box
      id="WallsRight"
      src="#AssetsImagesWall"
      position="-15 5 0"
      rotation="0 90 0"
      height="10"
      width="30"
      depth="0.5"
      repeat="10 6"
      static-body
    />

    <a-box
      id="WallsBack"
      src="#AssetsImagesWall"
      position="15 5 0"
      rotation="0 -90 0"
      height="10"
      width="30"
      depth="0.5"
      repeat="10 6"
      static-body
    />

    <!-- Декорации -->
    <a-box
      id="WallsBox_1"
      src="#AssetsImagesWall"
      position="0 3 4"
      rotation="30 0 0"
      height="15"
      width="15"
      repeat="2 10"
      static-body
    />

    <a-box
      id="WallsBox_2"
      src="#AssetsImagesWall"
      position="5 1 -10"
      rotation="0 0 0"
      height="3"
      width="10"
      depth="2"
      repeat="5 8"
      static-body
    />

    <a-box
      id="WallsBox_3"
      src="#AssetsImagesWall"
      position="-5 1.5 -3"
      rotation="39 -143 -145"
      height="3"
      width="10"
      depth="2"
      repeat="5 8"
      static-body
    />
  </a-entity>
</template>

<script>
export default {
  name: 'Walls',
};
</script>
