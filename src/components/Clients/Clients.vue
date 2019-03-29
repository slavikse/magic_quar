<template>
  <a-entity id="Clients">
    <a-entity
      v-for="client in clients"
      :id="`Clients_${client.clientId}`"
      :key="client.clientId"
      :position="client.position.join(', ')"
      :rotation="client.rotation.join(', ')"
      kinematic-body
    >
      <a-entity id="MobsMagicQuARShape">
        <a-box
          id="MobsMagicQuARHead"
          constraint="target: #MobsMagicQuARBody"
          position="0 1.5 0"
          width="0.4"
          height="0.4"
          depth="0.4"
          color="#755"
        />

        <a-box
          id="MobsMagicQuARBody"
          position="0 0.4 0"
          width="0.7"
          height="1.5"
          depth="0.7"
          color="#955"
        />

        <a-box
          id="MobsMagicQuARLeftHand"
          constraint="target: #MobsMagicQuARBody"
          position="-0.7 0.6 0"
          width="0.3"
          height="1"
          depth="0.3"
          color="#755"
        />

        <a-box
          id="MobsMagicQuARRightHand"
          constraint="target: #MobsMagicQuARBody"
          position="0.7 0.6 0"
          width="0.3"
          height="1"
          depth="0.3"
          color="#755"
        />

        <a-box
          id="MobsMagicQuARLeftLeg"
          constraint="target: #MobsMagicQuARBody"
          position="-0.4 -0.84 0"
          width="0.5"
          height="0.3"
          depth="0.5"
          color="#755"
        />

        <a-box
          id="MobsMagicQuARRightLeg"
          constraint="target: #MobsMagicQuARBody"
          position="0.4 -0.84 0"
          width="0.5"
          height="0.3"
          depth="0.5"
          color="#755"
        />
      </a-entity>
    </a-entity>
  </a-entity>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Clients',

  computed: {
    ...mapState('clients', ['clients']),
  },

  watch: {
    clients: {
      deep: true,
      handler() {
        Object.entries(this.clients).forEach(([clientId, { fire }]) => {
          if (fire) {
            const playerFire = new CustomEvent('PlayerFire', { detail: fire });
            document.dispatchEvent(playerFire);

            delete this.clients[clientId].fire;
          }
        });
      },
    },
  },
};
</script>
