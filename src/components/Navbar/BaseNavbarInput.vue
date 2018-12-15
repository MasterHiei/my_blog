<template>
  <div :class="['navbar-item', hiddenClass]">
    <div class="field">
      <div class="control">
        <input class="input" type="text" :placeholder="searchHint">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hiddenClass'],
  data () {
    return {
      searchHint: this.$t('message.navbar.search')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
