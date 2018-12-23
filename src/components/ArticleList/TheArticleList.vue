<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.requestArticles()
  },
  methods: {
    ...mapActions(['requestArticles'])
  }
}
</script>
