<template>
  <a-entity
    id='Mobs'
    raycaster
    @raycaster-intersected='intersected'
    position='0 1 -2'
    animation='
      property: position;
      dir: alternate;
      dur: 3000;
      loop: true;
      to: 0 1 4;
    '
    shadow='receive: true'
  >
    <!-- dynamic-body -->
    <!-- Голова -->
    <a-box
      id='MobsHead'
      constraint='target: #MobsBody'
      position='0 1.5 0'
      width='0.4'
      height='0.4'
      depth='0.4'
      static-body
      color='#755'
      class='MobsCollide'
    />

    <!-- Тело -->
    <a-box
      id='MobsBody'
      position='0 0.4 0'
      width='0.7'
      height='1.5'
      depth='0.7'
      static-body
      color='#955'
      class='MobsCollide'
    />

    <!-- Левая рука -->
    <a-box
      id='MobsLeftHand'
      constraint='target: #MobsBody'
      position='-0.7 0.6 0'
      width='0.3'
      height='1'
      depth='0.3'
      static-body
      color='#755'
      class='MobsCollide'
    />

    <!-- Правая рука -->
    <a-box
      id='MobsRightHand'
      constraint='target: #MobsBody'
      position='0.7 0.6 0'
      width='0.3'
      height='1'
      depth='0.3'
      static-body
      color='#755'
      class='MobsCollide'
    />

    <!-- Левая нога -->
    <a-box
      id='MobsLeftLeg'
      constraint='target: #MobsBody'
      position='-0.4 -0.84 0'
      width='0.5'
      height='0.3'
      depth='0.5'
      static-body
      color='#755'
      class='MobsCollide'
    />

    <!-- Правая нога -->
    <a-box
      id='MobsRightLeg'
      constraint='target: #MobsBody'
      position='0.4 -0.84 0'
      width='0.5'
      height='0.3'
      depth='0.5'
      static-body
      color='#755'
      class='MobsCollide'
    />
  </a-entity>
</template>

<!-- Имя моба: Magic QuAR. -->
<!-- todo научить моба вставать и не падать -->
<script>
export default {
  name: 'Mobs',

  methods: {
    // todo система хп. места пополнения хп.
    // todo пересечение с объектом пули.
    intersected() {
      // console.log('intersected');
    },
  },
};
</script>
