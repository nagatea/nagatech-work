<template>
  <md-content md-theme="selection-black">
    <Header />
    <About />
    <Skills />
    <WorksIndex />
    <Awards />
    <Links />
    <Footer />
  </md-content>
</template>

<script>
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import WorksIndex from '@/components/WorksIndex'
import Awards from '@/components/Awards'
import Links from '@/components/Links'
import Footer from '@/components/Footer'
export default {
  name: 'Index',
  components: {
    Header,
    About,
    Skills,
    WorksIndex,
    Awards,
    Links,
    Footer
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
