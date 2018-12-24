<template>
  <div class="container is-fluid">
    合計：{{ count }}件
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      count: 'countArticles',
      articles: 'getArticles'
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
