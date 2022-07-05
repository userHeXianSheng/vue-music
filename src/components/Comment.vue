<template>
  <div id="comment">
    <img :src="userImg" alt="">
    <div class="comment_main">
      <div class="comment_top">
        <div class="left">
          <h4>{{nickname}}</h4>
          <span>{{timeStr}}</span>
        </div>
        <div class="right">
          <span>{{likedCount}}</span>
          <van-icon name="like" color="red" />
        </div>
      </div>
      <div class="comment_content">
        <p>{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
  content:{
    type:String,
    default:'',
    required:true
  },
  timeStr:{
    type:String,
    default:'',
    required:true
  },
  userImg:{
    type:String,
    default:'',
    required:true
  },
  nickname:{
    type:String,
    default:'',
    required:true
  },
  likedCount:{
    type:Number,
    default:0,
    required:true
  },
}
}
</script>

<style lang="less" scoped>
#comment{
  width: 100%;
  display: flex;
  justify-content: space-between;
  img{
    display: inline-block;
    width: 10%;
    height: 10%;
    border-radius: 0.6rem;
  }
  .comment_main{
    width: 90%;
    .comment_top{
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        h4{
          margin: 6px;
        }
        span{
          font-size: 6px;
          color: gray;
        }
      }
      .right{
        margin-right:0.2rem;
      }
    }
    // .comment_content{
    //   p{
         
    //   }
    // }
  }

}
</style>