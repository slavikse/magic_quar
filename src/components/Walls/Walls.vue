<template>
  <a-entity>
    <!-- Потолок. -->
    <a-box
      position='0 5 0'
      rotation='-90 0 0'
      height='30'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='20 20'
      roughness='1'
      src='#roof'
      static-body
    />

    <!-- Земля. -->
    <a-plane
      rotation='-90 0 0'
      height='100'
      width='100'
      repeat='50 50'
      roughness='1'
      src='#floor'
      static-body
      shadow='receive: true'
    />

    <!-- Стена спереди. -->
    <a-box
      position='0 2 -15'
      rotation='0 0 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      src='#wall'
      static-body
      class='wall'
    />

    <!-- Стена слева. -->
    <a-box
      position='0 2 15'
      rotation='0 180 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      src='#wall'
      static-body
      class='wall'
    />

    <!-- Стена справа.
    <a-box
      position='-15 2 0'
      rotation='0 90 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      src='#wall'
      static-body
    />
    -->

    <!-- Стена сзади. -->
    <a-box
      position='15 2 0'
      rotation='0 -90 0'
      height='6'
      width='30'
      depth='0.5'
      material='side: double'
      repeat='15 2'
      roughness='1'
      src='#wall'
      static-body
      class='wall'
    />
  </a-entity>
</template>

<script>
// todo огородка по бокам территории.
export default {
  name: 'Walls',

  methods: {
    intersected() {
      console.log('1');
    },
  },
};
</script>
