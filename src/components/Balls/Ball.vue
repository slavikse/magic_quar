<template>
  <!-- position - Задаётся программно Player'ом. -->
  <a-sphere
    radius='0.04'
    dynamic-body='mass: 1'
    color='teal'
    shadow='castShadow: true'
  />
</template>

<script>
export default {
  name: 'Ball',
};
</script>
