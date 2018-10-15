<template>
  <div>
    <h2>Main Works</h2>
    <WorkCard :datas="datas" />
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
        }
      ]
    }
  }
}
</script>

<style>
</style>
