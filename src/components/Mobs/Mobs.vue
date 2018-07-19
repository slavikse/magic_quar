<template>
  <a-entity id='Mobs'>
    <a-box
      id='MobsEngine'
      dynamic-body='mass: 0'
      constraint='
        target: #MobsFull;
        type: coneTwist;
        pivot: 0 -2 0;
      '
      position='0 3.5 0'
      width='0.4'
      height='0.4'
      depth='0.4'
      animation='
        property: position;
        dir: alternate;
        dur: 3000;
        loop: true;
        to: 0 3.5 4;
      '
    />

    <a-entity
      id='MobsFull'
      @collide='collide'
      position='0 2 -2'
      dynamic-body='mass: 1'
      shadow='receive: true'
    >
      <a-box
        id='MobsHead'
        constraint='target: #MobsBody'
        position='0 1.5 0'
        width='0.4'
        height='0.4'
        depth='0.4'
        color='#755'
        class='MobsCollide'
      />

      <a-box
        id='MobsBody'
        position='0 0.4 0'
        width='0.7'
        height='1.5'
        depth='0.7'
        color='#955'
        class='MobsCollide'
      />

      <a-box
        id='MobsLeftHand'
        constraint='target: #MobsBody'
        position='-0.7 0.6 0'
        width='0.3'
        height='1'
        depth='0.3'
        color='#755'
        class='MobsCollide'
      />

      <a-box
        id='MobsRightHand'
        constraint='target: #MobsBody'
        position='0.7 0.6 0'
        width='0.3'
        height='1'
        depth='0.3'
        color='#755'
        class='MobsCollide'
      />

      <a-box
        id='MobsLeftLeg'
        constraint='target: #MobsBody'
        position='-0.4 -0.84 0'
        width='0.5'
        height='0.3'
        depth='0.5'
        color='#755'
        class='MobsCollide'
      />

      <a-box
        id='MobsRightLeg'
        constraint='target: #MobsBody'
        position='0.4 -0.84 0'
        width='0.5'
        height='0.3'
        depth='0.5'
        color='#755'
        class='MobsCollide'
      />
    </a-entity>
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
    collide(e) {
      console.log(e);
    },
  },
};
</script>
