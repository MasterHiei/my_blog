<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/TheNavbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
