<template>
  <a-entity id='MobsMagicQuAR'>
    <a-box
      id='MobsMagicQuAREngine'
      :mobs-magic-quar-engine='{ Player }'
      dynamic-body='mass: 0'
      constraint='
        target: #MobsMagicQuARShape;
        type: coneTwist;
        pivot: 0 -2 0;
      '
      position='0, 3.15, 0'
      width='0.01'
      height='0.01'
      depth='0.01'
      :animation='animation'
      visible='false'
    />

    <a-entity
      id='MobsMagicQuARShape'
      @collide='collide'
      position='0 2 -2'
      dynamic-body='mass: 5'
      shadow='receive: true'
      class='MobsMagicQuARCollide'
    >
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
      animation: { property: 'position', dur: 2000, to: { x: 0, y: 3.15, z: 0 } },
    };
  },

  mounted() {
    this.Player = document.getElementById('Player').object3D;

    // todo интерполяция скорости передвижения моба.
    setInterval(() => {
      const { x, z } = this.Player.getWorldPosition();
      this.animation = { ...this.animation, to: { x, z } };
    }, 100);
  },

  methods: {
    // todo система хп. места пополнения хп.
    // todo пересечение с объектом пули. испускается событие, тут прослушивают и -1 хп.
    collide(e) {
      // console.log(e);
    },
  },
};
</script>
