<template>
  <a-sphere
    id='Ball'
    @collide='collide'
    dynamic-body='mass: 1'
    radius='0.04'
    color='teal'
  />
</template>

<script>
export default {
  name: 'Ball',

  methods: {
    collide(e) {
      if (e.detail.contact.bj.el.className === 'MobsCollide') {
        const audio = new Audio('audios/rebound.wav');
        audio.volume = 0.4;
        audio.play();
      }
    },
  },
};
</script>
