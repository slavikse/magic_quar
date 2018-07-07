<template>
  <a-entity position='0 1 -2'>
    <!-- Голова. -->
    <a-box
      constraint='target: #body'
      position='0 1.8 0'
      width='0.5'
      height='0.5'
      depth='0.5'
      mass='1000'
      dynamic-body
      color='#299'
    />

    <!-- Тело. -->
    <a-box
      id='body'
      position='0 0.5 0'
      width='0.5'
      height='1.5'
      depth='0.5'
      dynamic-body
      color='#955'
    />

    <!-- Левая рука. -->
    <a-box
      constraint='target: #body'
      position='-0.8 1 0'
      width='0.5'
      height='0.5'
      depth='0.5'
      dynamic-body
      color='#999'
    />

    <!-- Правая рука. -->
    <a-box
      constraint='target: #body'
      position='0.8 1 0'
      width='0.5'
      height='0.5'
      depth='0.5'
      dynamic-body
      color='#940'
    />

    <!-- Левая нога. -->
    <a-box
      constraint='target: #body'
      position='-0.9 -0.5 0'
      width='0.5'
      height='0.5'
      depth='0.5'
      dynamic-body
      color='#905'
    />

    <!-- Правая нога. -->
    <a-box
      constraint='target: #body'
      position='0.9 -0.5 0'
      width='0.5'
      height='0.5'
      depth='0.5'
      dynamic-body
      color='#197'
    />
  </a-entity>
</template>

<!-- Имя моба: majestic quar. -->
<script>
export default {
  name: 'Mob',
};
</script>
