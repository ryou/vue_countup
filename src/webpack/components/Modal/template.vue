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

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
