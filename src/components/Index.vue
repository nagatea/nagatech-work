<template>
  <md-content md-theme="selection-black">
    <About />
    <Skills />
    <WorksIndex />
    <Awards />
    <Links />
  </md-content>
</template>

<script>
import About from '@/components/About'
import Skills from '@/components/Skills'
import WorksIndex from '@/components/WorksIndex'
import Awards from '@/components/Awards'
import Links from '@/components/Links'
export default {
  name: 'Index',
  components: {
    About,
    Skills,
    WorksIndex,
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
