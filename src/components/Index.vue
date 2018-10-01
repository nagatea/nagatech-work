<template>
  <div id="container">
    <Header />
    <About />
    <Skills />
    <WorksIndex />
    <Links />
    <h2>つくったもの</h2>
    <h3>TwitterBot</h3>
    <p>
      ついったーのぼっと<br>
      <a href="https://twitter.com/_nagatea">これ</a>
    </p>
    <h3>ポプテピピックのゲーム</h3>
    <p>
      ボブネミミッミのゲーム<br>
      <a href="http://pptp-game.nagatech.trap.show/">ここ</a>
      から遊べる
    </p>
    <h3>脱出ゲーム</h3>
    <p>
      実は中学生のころFlashゲームつくってた<br>
      <a href="http://nagatea.web.fc2.com/">こいつ</a>
    </p>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import WorksIndex from '@/components/WorksIndex'
import Links from '@/components/Links'
import Footer from '@/components/Footer'
export default {
  name: 'Index',
  components: {
    Header,
    About,
    Skills,
    WorksIndex,
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
#container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0px 20px;
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

</style>
