<template>
  <md-content md-theme="selection-black">
    <About />
    <Skills />
    <MainWorks />
    <Awards />
    <Links />
  </md-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import MainWorks from '@/components/MainWorks.vue'
import Awards from '@/components/Awards.vue'
import Links from '@/components/Links.vue'

@Component({
  components: {
    About,
    Skills,
    MainWorks,
    Awards,
    Links
  }
})
export default class Index extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
