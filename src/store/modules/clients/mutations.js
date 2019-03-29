import Vue from 'vue';

export default {
  ADD(state, clients) {
    state.clients = clients;
  },

  UPDATE(state, client) {
    Object.entries(client).forEach(([clientId, payload]) => {
      Vue.set(state.clients, clientId, {
        ...state.clients[clientId],
        clientId,
        ...payload,
      });
    });
  },

  DELETE(state, clientId) {
    Vue.delete(state.clients, clientId);
  },
};
