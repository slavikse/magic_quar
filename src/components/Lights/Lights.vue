<template>
  <a-entity id='Lights'>
    <a-light
      id='LightsAmbient'
      position='0 0 0'
      type='ambient'
      color='#999'
    />

    <a-entity
      id='LightsPoint1'
      position='0 10 0'
      rotation='0 0 0'
      light='
        type: point;
        intensity: 0.4;
        color: #fff;
        castShadow: true;
      '
    />
  </a-entity>
</template>

<script>
export default {
  name: 'Lights',
};
</script>
