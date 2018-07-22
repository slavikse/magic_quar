<template>
  <a-entity id='MobsMagicQuAR'>
    <!--  :mobs-magic-quar-engine='{ Player }' -->
    <a-box
      id='MobsMagicQuAREngine'
      dynamic-body='mass: 0'
      constraint='
        target: #MobsMagicQuARShape;
        type: coneTwist;
        pivot: 0 -1 0;
      '
      position='0, 2.5, 0'
      width='0.01'
      height='0.01'
      depth='0.01'
      visible='false'
      :animation='movement'
    />

    <a-entity
      id='MobsMagicQuARShape'
      position='0 2 -2'
      dynamic-body='mass: 2'
      shadow='receive: true'
    >
      <a-text
        id='MobsMagicQuARHealth'
        position='0 2 0'
        align='center'
        height='10'
        color='red'
        side='double'
        :value='health'
      />

      <a-box
        id='MobsMagicQuARHead'
        constraint='target: #MobsMagicQuARBody'
        position='0 1.5 0'
        width='0.4'
        height='0.4'
        depth='0.4'
        color='#755'
      />

      <a-box
        id='MobsMagicQuARBody'
        position='0 0.4 0'
        width='0.7'
        height='1.5'
        depth='0.7'
        color='#955'
      />

      <a-box
        id='MobsMagicQuARLeftHand'
        constraint='target: #MobsMagicQuARBody'
        position='-0.7 0.6 0'
        width='0.3'
        height='1'
        depth='0.3'
        color='#755'
      />

      <a-box
        id='MobsMagicQuARRightHand'
        constraint='target: #MobsMagicQuARBody'
        position='0.7 0.6 0'
        width='0.3'
        height='1'
        depth='0.3'
        color='#755'
      />

      <a-box
        id='MobsMagicQuARLeftLeg'
        constraint='target: #MobsMagicQuARBody'
        position='-0.4 -0.84 0'
        width='0.5'
        height='0.3'
        depth='0.5'
        color='#755'
      />

      <a-box
        id='MobsMagicQuARRightLeg'
        constraint='target: #MobsMagicQuARBody'
        position='0.4 -0.84 0'
        width='0.5'
        height='0.3'
        depth='0.5'
        color='#755'
      />
    </a-entity>
  </a-entity>
</template>

<script>
export default {
  name: 'MobsMagicQuAR',

  data() {
    return {
      Player: null,
      MobsMagicQuAREngine: null,
      interval: null,
      movement: {
        property: 'position',
        easing: 'linear',
        dur: 3000,
        to: { x: 0, y: 3.15, z: 0 },
      },
      health: 100,
    };
  },

  // OBJECT.position.distanceTo(OBJECT.position)
  mounted() {
    this.Player = document.getElementById('Player').object3D;
    this.MobsMagicQuAREngine = document.getElementById('MobsMagicQuAREngine').object3D;

    this.interval = setInterval(this.tick, 200);
    document.addEventListener('MobsMagicQuARCollide', this.collide);
  },

  destroyed() {
    clearInterval(this.interval);
    document.removeEventListener('MobsMagicQuARCollide', this.collide);
  },

  methods: {
    tick() {
      const { x, z } = this.Player.getWorldPosition();
      this.move(x, z);
      this.lookAt(x, z);
    },

    move(x, z) {
      this.movement = { ...this.movement, to: { x, z } };
    },

    lookAt(x, z) {
      this.MobsMagicQuAREngine.lookAt(x, 3, z);
    },

    collide() {
      this.health -= 1;
    },
  },
};
</script>
