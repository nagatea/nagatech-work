<template>
  <div>
    <h2>Links</h2>
    <ul>
      <li><img src="../assets/twitter.png"> <a href="https://twitter.com/nagatech_i" target="_blank">@nagatech_i</a></li>
      <li><img src="../assets/github.png"> <a href="https://github.com/nagatea" target="_blank">nagatea</a></li>
      <li>Article</li>
      <ul>
        <li>Blog: <a href="https://blog.nagatech.work" target="_blank">あれがながてち</a></li>
        <li>Circle(traP): <a href="https://trap.jp/author/nagatech/" target="_blank">nagatechの書いた記事</a></li>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Links extends Vue {}
</script>

<style scoped>
img {
  width: 32px;
  padding-right: 5px;
}
</style>
