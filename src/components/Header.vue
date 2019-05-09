<template>
  <md-toolbar class="md-dense">
    <div class="md-toolbar-row">
      <h1 class="md-title">nagatech.work</h1>
      <div class="md-toolbar-section-end">
        <md-button :md-ripple="false" @click="$router.push({ name: 'Index' })">Home</md-button>
        <md-button :md-ripple="false" @click="$router.push({ name: 'Works' })">Works</md-button>
        <md-menu md-direction="bottom-end" md-align-trigger>
          <md-button md-menu-trigger>Links</md-button>
          <md-menu-content>
            <md-menu-item><a href="https://blog.nagatech.work" target="_blank">Blog</a></md-menu-item>
            <md-menu-item><a href="https://twitter.com/nagatech_i" target="_blank">Twitter</a></md-menu-item>
            <md-menu-item><a href="https://github.com/nagatea" target="_blank">GitHub</a></md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </div>
  </md-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style scoped>
  .md-toolbar {
    background-color: #ffffff;
    margin: auto;
    max-width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .md-tabs {
    background-color: #ffffff;
  }
  .md-button {
    color: rgba(0,0,0,0.7);
    min-width: 72px;
    min-height: 48px;
  }
  .md-menu {
    padding-left: 8px;
  }
</style>
