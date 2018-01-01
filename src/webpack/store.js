import Vue from 'vue';
import Vuex from 'vuex';
import TopView from './views/Top/template.vue';
import GameView from './views/Game/template.vue';

Vue.use(Vuex);

const views = {
  top: TopView,
  game: GameView,
};

export default new Vuex.Store({
  state: {
    view: 'top',
    highScore: null,
  },
  getters: {
    currentView(state) {
      return views[state.view];
    },
  },
  mutations: {
    changeView(state, view) {
      state.view = view;
    },
    sendScore(state, score) {
      if (state.highScore === null || score < state.highScore) {
        state.highScore = score;
      }
    },
  },
});
