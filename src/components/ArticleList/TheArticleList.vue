<template>
  <div>

  </div>
</template>

<script>
import { requestArticles } from '../../api/index.js'

export default {
  async mounted () {
    const result = await requestArticles()
    console.log(result)
  }
}
</script>
