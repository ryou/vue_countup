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
  },
  getters: {
    currentView(state) {
      return views[state.view];
    },
  },
  mutations: {
    changeView(state, view) {
      this.state.view = view;
    },
  },
});
