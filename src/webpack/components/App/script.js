import _ from 'lodash';
import Loop from '../../libs/LoopController';

const PANEL_NUM = 24;

export default {
  data() {
    return {
      panels: [],
      isReady: true,
      isGameOver: false,
      time: {
        start: 0,
        current: 0,
      },
      loopController: null,
    };
  },
  methods: {
    clickPanel(number) {
      if (number === this.nextPanel) {
        const index = this.panels.findIndex(panel => panel.number === number);
        this.panels[index].isDisabled = true;

        if (number === PANEL_NUM) {
          this.gameOver();
        }
      }
    },
    gameStart() {
      this.isReady = false;

      this.initPanels();

      this.time.start = Date.now();

      this.loopController = new Loop(this.updateTime);
      this.loopController.start();
    },
    gameOver() {
      this.isGameOver = true;
      this.loopController.pause();
    },
    retry() {
      this.isReady = true;
      this.isGameOver = false;
      this.time.start = 0;
      this.time.current = 0;
      this.panels = [];
    },
    updateTime() {
      this.time.current = Date.now();
    },
    initPanels() {
      const tmpArray = [];
      for (let i = 0; i < PANEL_NUM; i += 1) {
        const tmp = {
          number: i + 1,
          isDisabled: false,
        };
        tmpArray.push(tmp);
      }

      this.panels = _.shuffle(tmpArray);
    },
  },
  computed: {
    nextPanel() {
      let min = PANEL_NUM;

      const activePanels = this.panels.filter(panel => panel.isDisabled === false);
      activePanels.forEach((panel) => {
        if (panel.number < min) {
          min = panel.number;
        }
      });

      return min;
    },
    displayTime() {
      const pastTime = this.time.current - this.time.start;
      const ms = String(pastTime % 1000).padStart(3, '0');
      const s = Math.floor(pastTime / 1000);
      return `${s}.${ms}`;
    },
  },
};
