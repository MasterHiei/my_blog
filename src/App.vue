<template>
  <div id="app">
    <TheNavbar/>
    <TheArticleList/>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/Navbar/TheNavbar'
import TheArticleList from '@/components/ArticleList/TheArticleList'

export default {
  components: {
    TheNavbar,
    TheArticleList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    font-family -apple-system, BlinkMacSystemFont, YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "Microsoft YaHei", '微软雅黑', Arial, "Meiryo", sans-serif
</style>
