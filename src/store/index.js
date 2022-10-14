import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: [],
    searchString: ''
  },
  getters: {
  },
  mutations: {
    addMovies(state, data) {
      state.movies = data
    },
    updateString(state, string) {
      state.searchString = string
    }
  },
  actions: {
  },
  modules: {
  }
})
