<template>
  <nav id="navbar" class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
    <div id="brand" class="navbar-brand">
      <a id="logo" href="/home" class="navbar-item">
        <strong>My Blog</strong>
      </a>
      <div class="navbar-item">
        <div class="navbar-item is-hidden-desktop">
          <div class="field">
            <div class="control">
              <input id="searchInput" class="input" type="text" placeholder="Search...">
            </div>
          </div>
        </div>
      </div>

      <a role="button" :class="[burgerClass, isActive ? activeClass : '']"
      aria-label="menu" aria-expanded="false" data-target="menuList"
      @click="onClick">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="menuList" :class="[menuClass, isActive ? activeClass : '']">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">Articles</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item is-hidden-touch">
          <div class="field">
            <div class="control">
              <input id="searchInput" class="input" type="text" placeholder="Search...">
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
      isActive: false,
      burgerClass: 'navbar-burger burger is-hidden-desktop',
      menuClass: 'navbar-menu',
      activeClass: 'is-active'
    }
  },
  methods: {
    onClick () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #brand
    margin-left 0

  #menuList
    margin-right 0

  #searchInput
    height 32px
</style>
