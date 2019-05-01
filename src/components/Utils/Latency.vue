<template>
  <div class="Latency">
    <div
      v-if="latency !== -1"
      class="latency"
    >
      {{ latency }}ms
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Latency',

  computed: {
    ...mapState('player', ['latency']),
  },
};
</script>

<style
  lang='scss'
  scoped
>
.Latency {
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.1rem 0.5rem 0.35rem;
  border-radius: 1rem;
  text-align: center;
  color: white;
  background-color: darkslategray;
}
</style>
