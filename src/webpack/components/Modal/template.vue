<template>
  <div
    class="Modal"
    :class="{
      '-visible': isVisible
    }"
  >
    <div class="Modal_body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .Modal {
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;

    background: rgba(#000, .6);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity .4s;

    &:not(.-visible) {
      opacity: 0;
      pointer-events: none;
    }

    &.-visible {
      opacity: 1;
    }
  }
  .Modal_body {
    width: 400px;
    padding: 40px;
    box-sizing: border-box;

    background: #fff;

    text-align: center;
  }
</style>
