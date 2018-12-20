<template>
  <nav id="navbar" class="navbar has-shadow is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">My Blog</a>
        <a id="navbarBurger" :class="['navbar-burger burger is-hidden-desktop', { 'is-active': isVisible }]" aria-label="menu" aria-expanded="false" @click="toggleVisibility">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      </div>
      <div :class="['navbar-menu', { 'is-active': isVisible }]">
        <div class="navbar-end">
        <div id="localeSelector" class="navbar-item has-dropdown is-hoverable">
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
        <a href="https://github.com/MasterHiei/my_blog" class="navbar-item">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'github']" fixed-width />
          </span>
        </a>
      </div>
      </div>
    </div>
  </nav>
</template>

<script>

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
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @media (min-width: 1024px)
    #navbar
      padding 0
      font-weight  bold
</style>
