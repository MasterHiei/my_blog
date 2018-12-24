<template>
  <div id="app" class="container is-fluid">
    <navbar/>
    <div class="container is-fluid">
      <tabs/>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import Tabs from 'components/tabs/Tabs'

export default {
  components: {
    Navbar,
    Tabs
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    font-family -apple-system, BlinkMacSystemFont, YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "Microsoft YaHei", '微软雅黑', Arial, "Meiryo", sans-serif
</style>
