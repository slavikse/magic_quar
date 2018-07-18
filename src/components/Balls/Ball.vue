<template>
  <a-sphere
    radius='0.04'
    dynamic-body='mass: 1'
    color='teal'
    @collide='collide'
  />
</template>

<script>
export default {
  name: 'Ball',

  methods: {
    collide(e) {
      if (e.detail.contact.bj.el.className === 'wall') {
        new Audio('audios/rebound.wav').play();
      }
    },
  },
};
</script>
