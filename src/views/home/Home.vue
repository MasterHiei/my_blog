<template>
  <div class="container is-fluid">
    <search-box/>
    <transition name="fade">
      <article-list/>
    </transition>
  </div>
</template>

<script>
import SearchBox from 'base/searchBox/SearchBox'
import ArticleList from 'components/articleList/ArticleList'

export default {
  components: {
    SearchBox,
    ArticleList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .fade-enter-active
    transform opacity 0.3s
  .fade-enter
    opacity 0
</style>
