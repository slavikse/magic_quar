<template>
  <a-sphere
    id="BallsBall"
    dynamic-body="mass: 2"
    radius="0.03"
    shadow="receive: true"
    color="black"
    @collide="collide"
  />
</template>

<script>
export default {
  name: 'BallsBall',

  methods: {
    collide(e) {
      switch (e.detail.contact.bj.el.id) {
        case 'MobsMagicQuARShape':
          document.dispatchEvent(new CustomEvent('MobsMagicQuARCollide'));
          break;

        default:
      }
    },
  },
};
</script>
