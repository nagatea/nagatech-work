<template>
  <md-toolbar class="md-dense">
    <div class="md-toolbar-row">
      <h1 class="md-title">nagatech.work</h1>
      <div class="md-toolbar-section-end">
        <md-tabs md-alignment="right">
          <md-tab id="tab-home" md-label="Home" :to="{ name: 'Index' }"></md-tab>
          <md-tab id="tab-pages" md-label="Works" :to="{ name: 'Works' }"></md-tab>
        </md-tabs>
         <md-menu md-direction="bottom-end" md-align-trigger>
            <md-button md-menu-trigger>Links</md-button>
            <md-menu-content>
              <md-menu-item><a href="https://blog.nagatech.work" target="_brank">Blog</a></md-menu-item>
              <md-menu-item><a href="https://twitter.com/_nagatech" target="_brank">Twitter</a></md-menu-item>
              <md-menu-item><a href="https://github.com/nagatea" target="_brank">GitHub</a></md-menu-item>
            </md-menu-content>
          </md-menu>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
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
