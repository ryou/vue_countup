export default {
  data() {
    return {
      animationId: null,
      panelNum: 24,
      panels: [],
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
        this.panels.forEach((panel) => {
          if (panel.number === number) {
            panel.isDisabled = true;

            if (number === this.panelNum) {
              this.isGameOver = true;
              window.cancelAnimationFrame(this.animationId);
            }
          }
        });
      }
    },
    gameStart() {
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
    createPanels() {
      for (let i = 0; i < this.panelNum; i += 1) {
        const tmp = {
          number: i + 1,
          isDisabled: false,
        };
        this.panels.push(tmp);
      }

      // 配列をシャッフル
      // 参考：https://qiita.com/artistan/items/9eb9a0fb14f4ec3a8764
      for (let i = this.panels.length - 1; i >= 0; i -= 1) {
        // 0~iのランダムな数値を取得
        const rand = Math.floor(Math.random() * (i + 1));

        // 配列の数値を入れ替える
        [this.panels[i], this.panels[rand]] = [this.panels[rand], this.panels[i]];
      }
    },
  },
  computed: {
    nextPanel() {
      let min = this.panelNum;

      const activePanels = this.panels.filter((panel) => {
        return panel.isDisabled === false;
      });
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
  created() {
    this.createPanels();
  },
  mounted() {
    this.gameStart();
  },
};
