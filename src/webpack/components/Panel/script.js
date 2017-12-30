export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click', this.number);
    },
  },
};
