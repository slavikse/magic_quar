<template>
  <a-entity id='Lights'>
    <a-light
      id='LightsAmbient'
      position='0 0 0'
      type='ambient'
      color='#111'
    />

    <a-entity
      id='LightsPoint1'
      position='2 3 2'
      rotation='0 0 0'
      light='
        type: point;
        intensity: 0.6;
        color: #999;
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
