<template>
  <div>
    <h2>About</h2>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-25 md-size-20 avater">
        <img src="../assets/nagatech.png">
      </div>
      <div class="md-layout-item md-xsmall-size-70 md-size-40 hukidashi">
        <ul>
          <li>Name:</li>
          <ul class="non-dot">
            <li>Tatsuya Nagano</li>
          </ul>
          <li>ScreenName:</li>
          <ul class="non-dot">
            <li>nagatech(ながてち)、nagatea(ながてぃー)</li>
            <li>最近はnagatech名義の活動のほうが多いです。</li>
          </ul>
          <li>Grade:</li>
          <ul class="non-dot">
            <li>東京工業大学 情報理工学院 数理・計算科学系 B3</li>
          </ul>
          <li>Likes:</li>
          <ul class="non-dot">
            <li>Programing, Web, Music Game, Electronic Dance Music(J-CORE)</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>

<style scoped>
.non-dot {
  list-style: none;
}

.hukidashi {
  position: relative;
  display: inline-block;
  margin-right: 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  background: #ffffff;
  border: solid 3px #555555;
  box-sizing: border-box;
}

.hukidashi:before{
  content: "";
  position: absolute;
  top: 20%;
  left: -23px;
  margin-top: -12px;
  border: 12px solid transparent;
  border-right: 12px solid #ffffff;
  z-index: 2;
}

.hukidashi:after{
  content: "";
  position: absolute;
  top: 20%;
  left: -30px;
  margin-top: -14px;
  border: 14px solid transparent;
  border-right: 14px solid #555555;
  z-index: 1;
}

.hukidashi p {
  margin: 0;
  padding: 0;
}
</style>
