<template>
  <router-view></router-view>
  <MusicPlayer></MusicPlayer>
</template>

<script>
import MusicPlayer from './components/MusicPlayer.vue'
export default {
components:{
  MusicPlayer,
}
}
</script>

<style lang='less' scoped>

</style>