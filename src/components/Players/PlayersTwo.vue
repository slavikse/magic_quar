<template>
  <a-entity
    id='Player1'
    position='-10 0 25'
    kinematic-body
    shadow='receive: true'
  >
    <!-- todo 2 игрок -->
    <a-entity
      id='PlayerCamera1'
      :position='position'
    >
      <!-- todo руку к моделе пистолета -->
      <a-gltf-model
        id='PlayerGun1'
        position='0 -0.6 -1'
        rotation='0 90 0'
        scale='0.05 0.05 0.05'
        src="#AssetsModelsGun"
      />
    </a-entity>
  </a-entity>
</template>

<script>
export default {
  name: 'PlayersTwo',

  data() {
    return {
      window,
      PlayerCursor: null,
      position: '0 1.6 0',
    };
  },

  mounted() {
    window.ws.onmessage = ({ data }) => {
      const { payload } = JSON.parse(data);
      console.log('payload 2', payload);

      payload.forEach((p) => {
        if (Number(p.id) === 0 && p.position) {
          this.position = p.position.join(' ');
        }
      });
    };
  },
};
</script>
