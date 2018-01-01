import Vue from 'vue';

import AppComponent from './components/App/template.vue';
import PanelComponent from './components/Panel/template.vue';
import ModalComponent from './components/Modal/template.vue';
import BtnComponent from './components/Btn/template.vue';

Vue.component('panel-component', PanelComponent);
Vue.component('modal-component', ModalComponent);
Vue.component('btn-component', BtnComponent);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render(h) {
    return h(AppComponent);
  },
});
