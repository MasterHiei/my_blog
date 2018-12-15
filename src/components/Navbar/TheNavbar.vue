<template>
  <nav id="navbar" class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
    <div id="brand" class="navbar-brand">
      <a class="navbar-item" @click="transTo('/home')">
        <strong>My Blog</strong>
      </a>
      <BaseNavbarInput hiddenClass="is-hidden-desktop"/>

      <a id="navbarBurger" :class="['navbar-burger burger is-hidden-desktop', { 'is-active': isVisible }]"
      aria-label="menu" aria-expanded="false" @click="toggleVisibility">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="['navbar-menu', { 'is-active': isVisible }]">
      <div class="navbar-start">
        <a class="navbar-item" @click="transTo('/home')">{{ $t("message.navbar.home") }}</a>
        <a class="navbar-item" @click="transTo('/articles')">{{ $t("message.navbar.articles") }}</a>
      </div>
      <div class="navbar-end">
        <a href="https://github.com/MasterHiei" class="navbar-item">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </span>
        </a>
        <BaseNavbarInput hiddenClass="is-hidden-touch"/>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">{{ $t("message.navbar.language") }}</a>
          <div class="navbar-dropdown">
            <a :class="['navbar-item', { 'is-active': isCN}]" @click="changeLanguage('zh-CN')">简体中文</a>
            <a :class="['navbar-item', { 'is-active': isJa}]" @click="changeLanguage('ja')">日本語</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseNavbarInput from './BaseNavbarInput'

export default {
  data () {
    return {
      locale: this.$i18n.locale,
      isVisible: false
    }
  },
  methods: {
    changeLanguage (lang) {
      this.locale = lang
      this.$i18n.locale = lang
    },
    toggleVisibility () {
      this.isVisible = !this.isVisible
    },
    transTo (path) {
      this.isVisible = false
      this.$router.replace(path)
    }
  },
  computed: {
    isJa: function () {
      return this.locale.startsWith('ja')
    },
    isCN: function () {
      return !this.isJa
    }
  },
  components: {
    BaseNavbarInput
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @media (min-width: 1024px)
    #navbar
      padding 0 12px 0 12px

  #navbarBurger
    height auto
</style>
