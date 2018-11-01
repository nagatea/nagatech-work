<template>
  <div>
    <h2>Web App</h2>
    <WorkCard :datas="webAppDatas" />
    <h2>Game</h2>
    <WorkCard :datas="gameDatas" />
    <h2>Android App</h2>
    <WorkCard :datas="androidAppDatas" />
    <h2>Twitter Bot</h2>
    <WorkCard :datas="twitterBotDatas" />
  </div>
</template>

<script>
import WorkCard from '@/components/WorkCard'
export default {
  name: 'Works',
  components: {
    WorkCard
  },
  data () {
    return {
      webAppDatas: [
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
      ],
      gameDatas: [
        {
          title: 'Explosion',
          description: 'お互いにくっつくブロックを操作しながら、同じ色のブロックを消していくパズルゲーム。ゲームの見た目の部分を担当しました。',
          links: [
            {
              link_title: '作品の紹介記事',
              link_url: 'https://trap.jp/post/233/'
            }
          ],
          img_path: require('../assets/works/explosion.png')
        },
        {
          title: '#pptp_game',
          description: 'アニメ「ポプテピピック」のワンシーンを題材にした、記憶力を試すミニゲーム。',
          links: [
            {
              link_title: '#pptp_game',
              link_url: 'http://pptp-game.nagatech.trap.show/'
            }
          ],
          img_path: require('../assets/works/pptp_game.png')
        },
        {
          title: '進むネズミと見張るネコ',
          description: '#traP3jamという、3時間でゲームを作る企画で制作したミニゲーム。テーマは「とまる」でした。',
          links: [
            {
              link_title: '進むネズミと見張るネコ',
              link_url: 'http://trap3jam-stop.nagatech.trap.show/'
            }
          ],
          img_path: require('../assets/works/trap3jam_stop.png')
        }
      ],
      androidAppDatas: [
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
        }
      ],
      twitterBotDatas: [
        {
          title: 'nagatea_bot',
          description: '自分のWebアプリ開発の原点。多彩な機能を持ったチャットボット。例えば@_nagateaに「天気」とリプライするとその日の東京の天気を教えてくれます。',
          links: [
            {
              link_title: '@_nagatea',
              link_url: 'https://twitter.com/_nagatea'
            }
          ],
          img_path: require('../assets/works/nagatea_bot.png')
        }
      ]
    }
  }
}
</script>

<style>
</style>
