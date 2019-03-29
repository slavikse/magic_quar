<template>
  <a-box
    id="BallsBall"
    src="#AssetsImagesRoof"
    dynamic-body="mass: 10"
    color="#999"
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
