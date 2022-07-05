<template>
  <div id="article">
      <!-- <h3>{{title}}</h3>   
      <h5>{{author}}</h5>
      <h5>{{pubdate}}</h5>       
      <h5>{{comitnum}}</h5>  
      <img v-if='cover.type==1' :src="cover.images" alt="#">
      <div v-if='cover.type==3'>
        <img :src="cover.images[0]" alt="#">
        <img :src="cover.images[1]" alt="#">
        <img :src="cover.images[2]" alt="#">
      </div> -->
    <van-skeleton title :row="4" :loading="loading">
      <van-card
        :num="'评论数:'+comitnum"
        :price="pubdate" currency=''
        :title="title"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">原创</van-tag>
          <van-tag plain type="danger">{{author}}</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">查看详情</van-button>
        </template>
      </van-card>
      <hr>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {this.loading=false},3000)
  },
  data() {
    return {
      loading: true,
    };
  },
  props:{
    title:{
      type:String,
      default:''
    },
    author:{
      type:String,
      default:''
    },
    comitnum:{
      type:[String,Number],
      default: 0
    },    
    pubdate:{
      type:String,
      default:''
    },
    cover:{
      type:Object,
      default: function(){
        return {cover:0}
      }
    },


  }


}
</script>

<style lang='less' scoped>
// img{
//   max-height: 160px; 
//   width: 120px;
// }
</style>