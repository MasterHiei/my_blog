<template>
  <div class="container is-fluid">
    <search-box/>
    <article-list/>
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
</style>
