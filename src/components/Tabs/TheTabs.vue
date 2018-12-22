<template>
  <div class="container is-fluid">
    <div id="tabs" class="tabs is-centered">
      <ul>
        <li :class="['tab-item', {'is-active': isHome}]">
          <a @click="transTo('/home')">{{ $t('message.tabs.home') }}</a>
        </li>
        <li :class="['tab-item', {'is-active': isArticles}]">
          <a @click="transTo('/articles')">{{ $t('message.tabs.articles') }}</a>
        </li>
        <li :class="['tab-item', {'is-active': isMore}]">
          <a @click="transTo('/more')">{{ $t('message.tabs.more') }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isHome: this.$route.path === '/home',
      isArticles: this.$route.path === '/articles',
      isMore: this.$route.path === '/more'
    }
  },
  methods: {
    transTo (path) {
      this.$router.replace(path)
    }
  },
  watch: {
    '$route' (to, from) {
      this.isHome = to.path === '/home'
      this.isArticles = to.path === '/articles'
      this.isMore = to.path === '/more'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #tabs
    padding-bottom 3rem
  .tab-item
    font-weight bold
    @media (min-width: 1024px)
      padding 0 3rem!important
</style>
