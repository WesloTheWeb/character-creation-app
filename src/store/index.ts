import { createStore } from 'vuex'

export default createStore({
  state: {
    character: {
      name: '',
      age: null,
      gender: '',
      class: '',
      hardcoreMode: '',
      story: ''
    }
  },
  getters: {
    getCharacter: state => state.character
  },
  mutations: {
    SET_CHARACTER(state, character) {
      state.character = character;
    }
  },
  actions: {
    updateCharacter({ commit }, character) {
      commit('SET_CHARACTER', character);
    }
  },
  modules: {}
});