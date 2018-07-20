<template>
  <a-entity id='Mobs'>
    <MobsMagicQuAR/>
  </a-entity>
</template>

<script>
import { MobsMagicQuAR } from './MobsMagicQuAR';
import { MobsUnits } from './MobsUnits';

export default {
  name: 'Mobs',

  components: {
    MobsMagicQuAR,
    MobsUnits,
  },
};
</script>
