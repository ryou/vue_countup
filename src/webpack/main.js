import Vue from 'vue';

import AppComponent from './components/App/template.vue';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render(h) {
    return h(AppComponent);
  },
});
