<template>
  <div id="app">
    <div class="Container">
      <div class="Time">{{ displayTime }}</div>
      <div class="Numlist">

        <div v-for="panel in panels" class="Numlist_item">
          <panel-component
            @click="clickPanel"
            :number="panel.number"
            :is-disabled="panel.isDisabled"
          ></panel-component>
        </div>

      </div>
    </div>
    <modal-component
      v-if="isReady"
      :is-visible="true"
      @click.native="gameStart"
    >
      <div class="u-text-center u-font-size-ex-large">Click to Start</div>
    </modal-component>
    <modal-component
      :is-visible="isGameOver"
    >
      <div class="u-text-center u-font-size-ex-large u-mb-10">Result</div>
      <div class="u-text-center u-font-size-ex-large">{{ displayTime }}</div>
    </modal-component>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./common.scss"></style>
<style lang="scss" src="./style.scss" scoped></style>
