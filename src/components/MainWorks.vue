<template>
  <div>
    <h2>Main Works</h2>
    <WorkCard :datas="datas" />
    <div class="md-layout md-alignment-top-right">
      <md-button class="md-raised md-primary" to="/works">More...</md-button>
    </div>
  </div>
</template>

<script>
import WorkCard from '@/components/WorkCard'
export default {
  name: 'MainWorks',
  components: {
    WorkCard
  },
  data () {
    return {
      datas: [
        {
          title: 'SnapRally',
          description: 'HackU東工大2017で開発した、地図上で写真を撮りながらスタンプラリーを楽しむAndroidアプリ。最優秀賞を受賞しました。',
          links: [
            {
              link_title: 'HackU東工大2017公式サイト',
              link_url: 'https://hacku.yahoo.co.jp/titech2017/'
            },
            {
              link_title: '作品の紹介記事',
              link_url: 'https://trap.jp/post/239/'
            }
          ],
          img_path: require('../assets/works/snaprally.png')
        },
        {
          title: 'Mascot Ranking Viewer',
          description: '第6回学園祭マスコット総選挙非公式ランキング閲覧ツール。Chart.jsを用いて投票状況を可視化できるようにしました。',
          links: [
            {
              link_title: 'Mascot Ranking Viewer',
              link_url: 'https://mascot.nagatech.work/'
            }
          ],
          img_path: require('../assets/works/MascotRankingViewer.png')
        },
        {
          title: 'booQ',
          description: 'サークル内ハッカソンで作成した、部内の書籍の貸し借りを楽にすることを目的とした書籍管理サービス。ハッカソンが終わった今も開発を進めています。',
          links: [
            {
              link_title: '作品の紹介記事',
              link_url: 'https://trap.jp/post/438/'
            }
          ],
          img_path: require('../assets/works/booQ.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.md-button {
  z-index: 0;
}
</style>
