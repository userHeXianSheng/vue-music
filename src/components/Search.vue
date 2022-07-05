<template>
  <div>
    <header id="search-top1">
        <van-icon @click="this.$router.push('/')" name="arrow-left" size="0.5rem" />
        <input type="text" v-model="searchInput" @keydown.enter="search(0)" autofocus id="search_input">
    </header>
    <header id="search-top2">
        <p>历史</p>
        <span v-for="(item,i) in searchHistory" :key="i" @click="search(item)">{{item}}</span>
        <van-icon @click="deleteSearchHistory" id="delete_icon" name="delete" size="0.5rem" />
    </header>
    <!-- 歌曲区域 -->
    <div class="musicList">
        <van-row v-for="(item,i) in searchList" :key="item.id" align="center" style="margin-top:10px;height:1rem">
            <van-col span="2"><span style="margin:12px">{{i+1}}</span></van-col>
            <van-col span="16" class="left" @click="play(item,i)">
            <h4 style="margin:0px">{{item.name}}</h4>
            <span style="fontSize:6px;color:gray">{{getArtists(item.artists)}}</span>
            </van-col>
            <van-col span="4" offset="2" class="right">
            <van-icon v-if="item.mvid!=0" name="video-o" size="0.6rem"/>
            <van-icon class="right-img" name="bars" size="0.6rem"/>
            </van-col>
        </van-row>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            searchInput:'林俊杰',
            searchList:[],
            searchHistory:['林俊杰','周杰伦','双笙'],
        }
    },
    created(){
        this.searchHistory=(JSON.parse(window.localStorage.getItem('searchHistory')) ? JSON.parse(window.localStorage.getItem('searchHistory')) : [])
    },
    methods:{
    ...mapMutations(['addPlaySong','updatePlaylistIndex']),
        async search(i){
            if(i)
            this.searchInput=i
            if(this.searchInput){
                const {data :res} = await this.$http.get('/search?keywords='+this.searchInput)
                console.log(res,this.searchInput)
                this.searchList=res.result.songs
                this.addSearchHistory()
                this.searchInput=''
            }
        },
        addSearchHistory(){
            if(this.searchInput){
                this.searchHistory.unshift(this.searchInput)
                this.searchHistory=[...new Set([...this.searchHistory])]
                 this.searchHistory.splice(10)
                window.localStorage.setItem('searchHistory',JSON.stringify(this.searchHistory))
            }
        },
        deleteSearchHistory(){
            window.localStorage.removeItem('searchHistory')
            this.searchHistory=[]
        },
        play(item,i){
            item.song={}
            item.song.album={}
            item.song.id=item.id
            item.song.album.artists=item.artists
            item.picUrl=item.album.artist.img1v1Url
            this.addPlaySong(item)
            //console.log(item);
        },
        getArtists(x){
            var a=''
            for(let i in x){
                a+=x[i].name+'/'
            }
            return a
        },
    },
}
</script>

<style lang="less" scoped>
#search-top1{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #search_input{
        width: 90%;
        height: 0.6rem;
        border: none;
        border-bottom:1px solid gray ;
    }
}
#search-top2{
    width: 100%;
    position:relative;
    p{
        display: inline-block;
        font-weight: bolder;
    }
    span{
        background-color: yellowgreen;
        border-radius: 0.2rem;
        display: inline-block;
        margin: 0.1rem 0.2rem ;
        padding: 0.1rem;

    }
    #delete_icon{
        display: block;
        position: absolute;
        top: 0.2rem;
        right: 0.1rem;
    }
}
.right{
  .van-icon{
    width: 0.6rem;
  }
  .right-img{
    float: right;

  }
}
</style>