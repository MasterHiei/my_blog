<template>
  <nav id="navbar" class="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">Brand</a>

      <a role="button" class="navbar-burger burger is-hidden-desktop" aria-label="menu" aria-expanded="false" data-target="menuList">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="menuList" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">Articles</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
          <a class="button is-success">Create</a>
        </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
