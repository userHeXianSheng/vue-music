<template>
  <div id="playlistTop">
    <img class="imgTop" :src="playlist.coverImgUrl" alt="">
    <div>
        <van-button style="opacity: 0.2;" icon="arrow-left" size="mini" plain @click="onClickTopLeft"/>
    </div>
    <div class="cover">
        <div class="leftCover">
            <img class="img" :src="playlist.coverImgUrl" alt="">
        </div>
        <div class="rightCover">
            <h3>{{playlist.name}}</h3>
            <span>{{playlist.description}}</span>
        </div>
    </div>
    <van-grid :border="false" clickable :column-num="4" :gutter="8">  
        <van-grid-item icon="chat-o" icon-color="" :text="playlist.commentCount+''" to="/" />
        <van-grid-item icon="share-o" :text="playlist.shareCount+''" to="/" />
        <van-grid-item icon="down" text="下载" to="/" /> 
        <van-grid-item icon="like-o" text="收藏" to="/" />  
    </van-grid>
  </div>
</template>

<script>
export default {
data(){
    return{
        playlist:{
                commentCount: 128,
                coverImgUrl:'https://p1.music.126.net/WZZyxQc--7NsDhw_xIiaLA==/109951166045038823.jpg',
                description:'有人说：世界上唯有爱和咳嗽是藏不住的，可是失去的爱，需要拼命挽留的爱已经是难以愈合的伤疤，只能慢慢让它静静的带着，直到忘却，开始新的感情。高烧之后你体内又多了一份新的抗体，血液细胞也都换过一遍了，你也可以重新开始一段新的感情。',
                name:'情歌300首｜总有一首情歌让你心酸',
                shareCount: 1025
        },
    }
},
methods:{
    async getPlayList(){
        const {data :res} = await this.$http.get('/playlist/detail?id='+this.$route.params.id)
        //console.log(res)
        this.playlist=res.playlist
    },
    onClickTopLeft(){
        this.$router.back()
    }
},
created(){
    this.getPlayList();
}
}
</script>

<style lang="less" scoped>
#playlistTop{
    position: static;
    // background-image:this.playlist.playlist.coverImgUrl
    .imgTop{
        position: absolute;
        z-index: -1;
        width: 100%;
        max-height: 6rem;
        filter: blur(0.4rem);
    }
    .cover{
        display: flex;
    }
    .leftCover{
        width: 3.6rem;
        height: 3.6rem;
    }
    .img{
        width: 3rem;
        max-height: 3rem;
        margin: 0.4rem 0.4rem 0.2rem 0.2rem;
        border-radius: 00.2rem;
    }
    .rightCover{
        width: 3.6rem;
        height: 3.6rem;
        overflow: hidden;
        span{
            font-size: 10px;
            display: inline-block;
            height: 2rem;;
        }
    }
    .van-grid-item{
        --van-grid-item-content-background-color:rgba(254, 254, 254, 0);
    }
}
</style>>
