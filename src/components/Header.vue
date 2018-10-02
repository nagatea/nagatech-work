<template>
  <md-toolbar class="md-dense">
    <div class="md-toolbar-row">
      <h1 class="md-title">nagatech.work</h1>
      <div class="md-toolbar-section-end">
        <md-tabs md-alignment="right">
          <md-tab id="tab-home" md-label="Home"></md-tab>
          <md-tab id="tab-pages" md-label="Works"></md-tab>
          <md-tab id="tab-posts" md-label="Links"></md-tab>
        </md-tabs>
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
</style>
