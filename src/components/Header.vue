<template>
  <header>
      <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      :fixed='true'
      @click-left="onClickLeft"
      />
  </header>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang='less' scoped>
header{
  margin-bottom: 46px;
}
</style>