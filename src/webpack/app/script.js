import TopView from '../views/Top/template.vue';
import GameView from '../views/Game/template.vue';

const views = {
  top: TopView,
  game: GameView,
};

export default {
  data() {
    return {
      viewName: 'top',
    };
  },
  methods: {
    changeView(view) {
      this.viewName = view;
    },
  },
  computed: {
    currentView() {
      return views[this.viewName];
    },
  },
};
