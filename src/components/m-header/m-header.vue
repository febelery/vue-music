<template>
  <div class="m-header">
    <div class="icon">
      <font-awesome-icon class="icon-logo" icon="music"></font-awesome-icon>
    </div>
    <h1 class="text">Ross Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <font-awesome-icon class="icon-mine" :icon="['far','user']"></font-awesome-icon>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "m-header"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      background-size: 30px 32px
      .icon-logo
        height: 32px
        width: 22px
        line-height 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>