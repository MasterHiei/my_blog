<template>
  <div id="searchBox" class="columns is-centered">
    <div class="column is-three-quarters-desktop is-full-mobile">
      <div class="field">
        <div class="control has-icons-left is-clearfix">
          <input type="search" class="input"
            :placeholder="$t('message.searchBox.placeholder')"
            v-model="query">
          <span class="icon is-left">
            <font-awesome-icon :icon="['fas', 'search']" fixed-width />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },
  created () {
    this.$watch('query', (queryStr) => {
      this.$emit('query', queryStr)
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #searchBox
    margin 0
</style>
