<template>
  <nav id="navbar" class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
    <div id="brand" class="navbar-brand">
      <a class="navbar-item" role="button" @click="transTo('/home')">
        <strong>My Blog</strong>
      </a>
      <div class="navbar-item">
        <div class="navbar-item is-hidden-desktop">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Search...">
            </div>
          </div>
        </div>
      </div>

      <a id="navbarBurger" :class="['navbar-burger burger is-hidden-desktop', { 'is-active': isActive }]" role="button"
      aria-label="menu" aria-expanded="false" @click="onClick">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="['navbar-menu', { 'is-active': isActive }]">
      <div class="navbar-start">
        <a role="button" class="navbar-item" @click="transTo('/home')">Home</a>
        <a role="button" class="navbar-item" @click="transTo('/articles')">Articles</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item is-hidden-touch">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Search...">
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    onClick () {
      this.isActive = !this.isActive
    },
    transTo (path) {
      this.onClick()
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @media (min-width: 1024px)
    #navbar
      padding 8px 12px 8px  12px

  #navbarBurger
    height: auto
</style>
