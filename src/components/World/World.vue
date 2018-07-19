<template>
  <a-entity id='World'>
    <a-sky
      id='WorldSky'
      src='#AssetsBackground'
      radius='500'
    />

    <a-sound
      id='WorldAmbient'
      src='#AssetsAmbient'
      autoplay="true"
      loop='true'
      volume='0.5'
    />
  </a-entity>
</template>

<script>
export default {
  name: 'World',
};
</script>
