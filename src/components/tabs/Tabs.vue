<template>
  <div class="container is-fluid">
    <div id="tabs" class="tabs is-centered">
      <ul>
        <router-link tag="li" class="tab-item" active-class="is-active" to="/home">
          <a>{{ $t('message.tabs.home') }}</a>
        </router-link>
        <router-link tag="li" class="tab-item" active-class="is-active" to="/articles">
          <a>{{ $t('message.tabs.articles') }}</a>
        </router-link>
        <router-link tag="li" class="tab-item" active-class="is-active" to="/isMore">
          <a>{{ $t('message.tabs.more') }}</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #tabs
    padding-bottom 2.5rem
  .tab-item
    font-weight bold
    @media (min-width: 1024px)
      padding 0 3rem!important
</style>
