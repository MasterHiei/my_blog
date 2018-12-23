<template>
  <div id="app" class="container is-fluid">
    <the-navbar/>
    <div class="container is-fluid">
      <the-tabs/>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TheNavbar from 'components/Navbar/TheNavbar'
import TheTabs from 'components/Tabs/TheTabs'

export default {
  components: {
    TheNavbar,
    TheTabs
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    font-family -apple-system, BlinkMacSystemFont, YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "Microsoft YaHei", '微软雅黑', Arial, "Meiryo", sans-serif
</style>
