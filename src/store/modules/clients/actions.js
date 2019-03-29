export default {
  add({ commit }, clients) {
    commit('ADD', clients);
  },

  update({ commit }, client) {
    commit('UPDATE', client);
  },

  delete({ commit }, clientId) {
    commit('DELETE', clientId);
  },
};
