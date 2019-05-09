<template>
  <div>
    <Header />
    <div id="app">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
}
</script>

<style>
body {
  background-color: #e2faff;
}

#app {
  width: 95%;
  margin: auto;
  padding: 80px 2.5vw;
  font-size: 16px;
  background-color: #ffffff;
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

ul {
  padding-inline-start: 20px;
}
</style>
