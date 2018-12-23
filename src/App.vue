<template>
  <div id="app" class="container is-fluid">
    <TheNavbar/>
    <div class="container is-fluid">
      <TheTabs/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TheNavbar from 'components/Navbar/TheNavbar'
import TheTabs from 'components/Tabs/TheTabs'

export default {
  components: {
    TheNavbar,
    TheTabs
  },
  created () {
    this.requestArticles()
  },
  methods: {
    ...mapActions(['requestArticles'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    font-family -apple-system, BlinkMacSystemFont, YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "Microsoft YaHei", '微软雅黑', Arial, "Meiryo", sans-serif
</style>
