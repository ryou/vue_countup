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
      :is-visible="isGameOver"
    ></modal-component>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
