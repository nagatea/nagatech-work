<template>
  <md-toolbar md-elevation="0">
    <p>Copyright (C) 2019 nagatech All Rights Reserved.</p>
  </md-toolbar>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
.md-toolbar {
  background-color: #e2faff;
}
</style>
