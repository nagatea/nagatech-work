<template>
  <md-content md-theme="selection-black">
    <About />
    <Skills />
    <MainWorks />
    <Awards />
    <Links />
  </md-content>
</template>

<script>
import About from '@/components/About'
import Skills from '@/components/Skills'
import MainWorks from '@/components/MainWorks'
import Awards from '@/components/Awards'
import Links from '@/components/Links'
export default {
  name: 'Index',
  components: {
    About,
    Skills,
    MainWorks,
    Awards,
    Links
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
