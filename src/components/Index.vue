<template>
  <div id="container">
    <header>
      <div class="hukidashi">
        <h1>あれがながてち</h1>
      </div>
      <div id="title_img">
        <img width="120px" height="120px" src="../assets/nagatech.png">
      </div>
      <nav>
        <ul>
          <li>portfolio</li>
          <li>about</li>
          <li><a href="https://blog.nagatech.work/">blog</a></li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
    <main>
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
    </main>
    <footer>
        <p>Copyright (C) 2018 nagatech All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  width: 800px;
  margin: 0 auto;
  padding: 0px 20px;
  background-color: #ffffff;
}

#title_img {
  width: 120px;
  height: 120px;
  float: left;
  padding: 10px 0px 10px 10px;
  margin: 0;
}

nav{
  clear: left;
  overflow: hidden;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  float: left;
  width: 23.5%;
  background-color: #96edfd;
  padding: 10px 0 10px 0;
  margin: 0 0.25em 0 0.25em;
  text-align: center;
  border: 2px solid #63bdfd;
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

.hukidashi {
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 400px;
  max-width: 100%;
  color: #555;
  font-size: 20px;
  text-align: center;
  background: #cbf3fe;
}

.hukidashi:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -40px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-right: 30px solid #cbf3fe;
}

.hukidashi h1 {
  margin: 0;
  padding: 0;
}
</style>
