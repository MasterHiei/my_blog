<template>
  <nav id="navbar" class="navbar is-success" role="navigation" aria-label="main navigation">
    <div id="brand" class="navbar-brand">
      <a class="navbar-item" @click="transTo('/home')">My Blog</a>
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
        <a href="https://github.com/MasterHiei/my_blog" class="navbar-item">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'github']" fixed-width />
          </span>
        </a>
        <BaseNavbarInput hiddenClass="is-hidden-touch"/>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <div>
              <font-awesome-icon :icon="['fas', 'globe']" fixed-width />
              {{ $t("message.navbar.language") }}
            </div>
          </a>
          <div class="navbar-dropdown">
            <a :class="['navbar-item', { 'is-active': isZhCN }]" @click="changeLocale('zh-CN')">简体中文</a>
            <a :class="['navbar-item', { 'is-active': isJa }]" @click="changeLocale('ja')">日本語</a>
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
      isVisible: false,
      isJa: this.$i18n.locale === 'ja',
      isZhCN: this.$i18n.locale === 'zh-CN'
    }
  },
  methods: {
    changeLocale (lang) {
      this.$i18n.locale = lang
      this.isJa = this.$i18n.locale === 'ja'
      this.isZhCN = this.$i18n.locale === 'zh-CN'
    },
    toggleVisibility () {
      this.isVisible = !this.isVisible
    },
    transTo (path) {
      this.isVisible = false
      this.$router.replace(path)
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
      font-weight  bold

  #navbarBurger
    height auto
</style>
