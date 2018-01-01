<template>
  <div
    class="Panel"
    :class="{
      '-disabled': isDisabled,
    }"
    @click="onClick"
  >
    {{ number }}
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
