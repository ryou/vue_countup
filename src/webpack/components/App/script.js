import _ from 'lodash';

export default {
  data() {
    return {
      animationId: null,
      panelNum: 24,
      panels: [],
      isReady: true,
      isGameOver: false,
      time: {
        start: null,
        current: null,
      },
    };
  },
  methods: {
    clickPanel(number) {
      if (number === this.nextPanel) {
        const index = this.panels.findIndex(panel => panel.number === number);
        this.panels[index].isDisabled = true;

        if (number === this.panelNum) {
          this.isGameOver = true;
          window.cancelAnimationFrame(this.animationId);
        }
      }
    },
    gameStart() {
      this.isReady = false;

      this.initPanels();

      this.time.start = Date.now();

      const mainLoop = () => {
        this.animationId = window.requestAnimationFrame(mainLoop);

        this.updateTime();
      };
      mainLoop();
    },
    updateTime() {
      this.time.current = Date.now();
    },
    initPanels() {
      const tmpArray = [];
      for (let i = 0; i < this.panelNum; i += 1) {
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
      let min = this.panelNum;

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
