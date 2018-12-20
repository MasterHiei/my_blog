<template>
  <div :class="['navbar-item', hiddenClass]">
    <div class="field">
      <div class="control">
        <input class="input" type="text" :placeholder="$t('message.navbar.search')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hiddenClass']
}
</script>
