/* eslint-disable no-param-reassign */
/*
  ■ no-param-reassignを無効にする理由
  vuexでは、
  mutationFunc: (state) {
   ~
  }
  のように、mutationでstateを引数として渡され、公式のサンプルコードで
  引数stateを利用してstateを変更している。
  そのため、vuexの作法に則るためには引数の再代入を禁止するno-param-reassignを
  無効化する必要があるため。
*/

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
    initScore(state) {
      const highScore = localStorage.getItem('highScore');

      if (highScore !== null) {
        state.highScore = highScore;
      }
    },
    sendScore(state, score) {
      if (state.highScore === null || score < state.highScore) {
        state.highScore = score;
        localStorage.setItem('highScore', score);
      }
    },
  },
});
