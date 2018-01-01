<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component
        :is="currentView"
        @to-game="changeView('game')"
        @to-top="changeView('top')"
      ></component>
    </transition>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./common.scss"></style>
<style lang="scss" src="./style.scss" scoped></style>
