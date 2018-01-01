<template>
  <div class="Container">
    <h1 class="u-text-center u-font-size-ex-large u-mb-20">Count Up</h1>
    <div class="u-text-center u-mb-20">
      <btn-component @click.native="$store.commit('changeView', 'game')">
        GameStart
      </btn-component>
    </div>
    <div v-if="$store.state.highScore !== null" class="u-text-center">
      <div class="u-mb-10">High Score</div>
      <div>{{ $store.state.highScore }}</div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
