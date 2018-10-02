<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #b1effd;
}

#app {
  width: 100%;
  padding: 80px 30px;
  background-color: #ffffff;
  position: absolute;
}

h2 {
  clear: left;
  padding: 10px 10px;
  border-left: 10px solid #63bdfd;
}

h3 {
  margin: 30px 0 0 0;
  border-bottom: 3px dashed #63bdfd;
}
</style>
