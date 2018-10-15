<template>
  <div>
    <h2>About</h2>
    <div class="md-layout">
      <div id="avater">
        <img src="../assets/syobon.png">
      </div>
      <div>
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
            <li>Programing, Game, Web, Electronic dance music</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
#avater {
  width: 200px;
  height: 200px;
  padding-right: 20px;
}

.non-dot {
  list-style: none;
}
</style>
