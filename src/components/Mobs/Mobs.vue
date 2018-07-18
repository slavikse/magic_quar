<template>
  <a-entity
    position='0 1 -2'
    raycaster
    @raycaster-intersected='intersected'
    shadow='receive: true'
  >
    <!--animation='property: position; dir: alternate; dur: 3000; loop: true; to: 0 1 4'-->

    <!--dynamic-body-->
    <!-- Голова. -->
    <a-box
      position='0 1.5 0'
      width='0.4'
      height='0.4'
      depth='0.4'
      constraint='target: #body'
      static-body
      color='#755'
      class='wall'
    />

    <!-- Тело. -->
    <a-box
      position='0 0.4 0'
      width='0.7'
      height='1.5'
      depth='0.7'
      static-body
      id='body'
      color='#955'
      class='wall'
    />

    <!-- Левая рука. -->
    <a-box
      position='-0.7 0.6 0'
      width='0.3'
      height='1'
      depth='0.3'
      constraint='target: #body'
      static-body
      color='#755'
      class='wall'
    />

    <!-- Правая рука. -->
    <a-box
      position='0.7 0.6 0'
      width='0.3'
      height='1'
      depth='0.3'
      constraint='target: #body'
      static-body
      color='#755'
      class='wall'
    />

    <!-- Левая нога. -->
    <a-box
      position='-0.4 -0.8 0'
      width='0.5'
      height='0.3'
      depth='0.5'
      constraint='target: #body'
      static-body
      color='#755'
      class='wall'
    />

    <!-- Правая нога. -->
    <a-box
      position='0.4 -0.8 0'
      width='0.5'
      height='0.3'
      depth='0.5'
      constraint='target: #body'
      static-body
      color='#755'
      class='wall'
    />
  </a-entity>
</template>

<!-- Имя моба: Majic Quar. -->
<!-- todo научить моба вставать и не падать -->
<script>
export default {
  name: 'Mob',

  methods: {
    // todo система хп. места пополнения хп.
    // todo пересечение с объектом пули.
    intersected() {
      // console.log('intersected');
    },
  },
};
</script>
