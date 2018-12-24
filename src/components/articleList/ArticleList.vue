<template>
  <div class="columns is-multiline is-marginless">
    <div class="column is-one-third-desktop is-full-mobile"
      v-for="(article, index) in current" :key="index">
      <p class="has-text-centered">{{ article.title }}</p>
    </div>
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
  },
  computed: {
    current () {
      return this.$store.getters.getArticles(0, 10)
    }
  }
}
</script>
