<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/TheNavbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    font-family -apple-system, BlinkMacSystemFont, YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "Microsoft YaHei", '微软雅黑', Arial, "Meiryo", sans-serif
</style>
