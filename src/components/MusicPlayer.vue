<template>
  <div class="musicPlayer">
    <audio ref="audio" :src="'https://music.163.com/song/media/outer/url?id='+playlist[playlistIndex].id+'.mp3'"></audio>
    <!-- 底部播放器 -->
    <van-row>
      <van-col span="4" @click="this.ShowMusicDetail=true"><img :src="playlist[playlistIndex].picUrl" alt=""/></van-col>
      <van-col span="14" style="padding: 0.1rem">
        <p style="margin: 0px">{{ playlist[playlistIndex].name }}</p>
        <span style="fontsize: 8px; color: gray">横划切换歌曲</span>
      </van-col>
      <van-col span="6">
        <van-icon v-if="!isplay" @click="play" name="play-circle-o" size="0.7rem" style="margin: 0.2rem" />
        <van-icon v-else @click="play" name="pause-circle-o" size="0.7rem" style="margin: 0.2rem" />
        <van-icon @click="this.ShowPlaylistCard=true" class="right-img" name="bars" size="0.7rem" />
      </van-col>
    </van-row>
    <!-- 弹出音乐详情页 -->
    <van-popup  id="PlayPage" v-model:show="ShowMusicDetail" position="bottom" 
    closeable close-icon="arrow-down" close-icon-position="top-left" 
    :style="{ height:'100%',width:'100%'}">
      <!-- <van-tabs v-model:active="activePage" shrink>
        <van-tab title="歌曲" name="0">cd</van-tab>
        <van-tab title="歌词" name="1">geci</van-tab>
      </van-tabs> -->
      <img class="backgroundImg" :src="playlist[playlistIndex].picUrl" alt="">
      <header id="top">
        <!-- <div class="topLeft">
          <h4>{{playlist[playlistIndex].name}}</h4>
          <span>{{getArtists(playlist[playlistIndex].song.album.artists)}}</span>
        </div> -->
        <div class="topRight"><van-icon name="share-o" size="0.6rem"/></div>
      </header>
      <!-- CD页 -->
      <main id="main" v-show="!showLyricPage" @click="this.showLyricPage=true">
        <img :class="isplay ? 'needle_play' : 'needle'" src="../assets/needle-ab.png" alt="">
        <img class="CD" src="../assets/disc-plus.png" alt="">
        <img class="SongImg" :class="isplay ? 'SongImg_play' : 'SongImg_paused'" :src="playlist[playlistIndex].picUrl" alt="">
        <div class="main_info" style="margin-top:0.4rem">
          <h2>{{playlist[playlistIndex].name}}</h2>
          <span>{{getArtists(playlist[playlistIndex].song.album.artists)}}</span>
        </div>
      </main>
      <!-- 歌词页 -->
      <main class="lyric_content" ref="musicLyric" v-show="showLyricPage" @click="this.showLyricPage=false">
        <p v-for="(item,i) in lyric" :key="i" :class="(currentTime*1000 >= item.time) && (currentTime*1000 < item.pre) ? 'lyric_active' : ''">{{item.content}}</p>
      </main>
      <!-- 底部区域 -->
      <footer id="footer">
        <div class="footer1">
          <van-icon name="like-o" size="0.6rem"/>
          <van-icon @click="JumpToComment" name="chat-o" badge="99+" color="#ee0a24" size="0.6rem"/>
          <van-icon @click="JumpToMV" v-if="playlist[playlistIndex].song.mvid" badge="ready" name="video-o" color="#1989fa" size="0.6rem"/>
          <van-icon name="more-o" size="0.6rem"/>
        </div>
        <!-- 进度条 -->
        <div class="footer2">
          <input id="playLine" type="range" min="0" :max="this.$refs.audio.duration" step="0.1" v-model="playTime" @change="setCurrentTime()">
        </div>
        <div class="footer3">
          <van-icon name="revoke" size="0.5rem"/>
          <van-icon name="arrow-left" size="0.8rem" @click="changeSong(0)"/>
          <van-icon v-if="!isplay" @click="play" name="play-circle-o" size="1.2rem"/>
          <van-icon v-else @click="play" name="pause-circle-o" size="1.2rem"/>          
          <van-icon name="arrow" size="0.8rem" @click="changeSong(1)"/>
          <van-icon  name="ascending" size="0.5rem"/>
        </div>
      </footer>
    </van-popup>
    <!-- 弹出音乐播放列表 -->
    <van-popup  id="PlaylistCard" v-model:show="ShowPlaylistCard" position="bottom" 
    closeable close-icon="arrow-down" close-icon-position="top-left" 
    :style="{ height:'60%',width:'100%'}">
      <h3>歌曲列表</h3>
      <div class="music" :class="playlistIndex==i ? 'music_active' : ''" v-for="(item,i) in playlist" :key="item.id">
        <div class="music_left" @click="changeSong(item.id)">
          <h4>{{item.name}}-</h4>
          <span>{{getArtists(item.song.album.artists)}}</span>
          <van-icon v-if="playlistIndex==i" name="flower-o" size="0.8rem"></van-icon>
        </div>
        <van-icon @click="deleteOneSong(i,item.id)" name="cross" size="0.4rem"></van-icon>
      </div>
    </van-popup>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapState } from "vuex";
export default {
  data(){
    return{
      ShowPlaylistCard:false,
      ShowMusicDetail:false,
      // activePage:'0'
      showLyricPage:false,
      lyric:[],
      currentTime:0,
      playTime:0,
      timer:'',
    }
  },
  created(){
    this.getMusicLyric()
  },
  methods:{
    ...mapMutations(['playOrPause','updatePlaylistIndex','deletePlaySong','updateLyric','updateCurrentTime']),
    play(){
        if(this.$refs.audio.paused){
            this.$refs.audio.play()
            this.playOrPause(true)
            this.timer=setInterval(this.getCurrentTime,800)
        }
        else{
            this.$refs.audio.pause()
            this.playOrPause(false)
            clearInterval(this.timer)
        }
    },
    deleteOneSong(i,id){
      if(this.playlist.length==1)
        return
      if(i<this.playlistIndex)
      this.updatePlaylistIndex(this.playlistIndex-1)
      this.deletePlaySong(id)
      this.$nextTick(()=>{
        this.$refs.audio.pause()
        this.playOrPause(false)
        clearInterval(this.timer)
      })     
    },
    getArtists(x){
      var a=''
      for(let i in x){
        a+=x[i].name+'/'
      }
      return a
    },
    // 获取歌词并格式化
    async getMusicLyric(){
        const {data :res} = await axios.get('/lyric?id='+this.playlist[this.playlistIndex].song.id)
        this.lyric=res.lrc.lyric.split(/[(\r\n)\r\n]+/)
        this.lyric=this.lyric.map((item,i)=>{
          let m=item.slice(1,3)
          let s=item.slice(4,6)
          let ms=item.slice(7,10)
          let time=parseInt(m)*60*1000+parseInt(s)*1000+parseInt(ms)
          let pre=9999999
          let content=item.slice(11,this.lyric.length)
          return {m,s,ms,time,pre,content}
        })
        this.lyric.forEach((item,i)=>{
          if(i==this.lyric.length-1 || i==this.lyric.length-2){
            item.pre=99999999
          }
          else{item.pre=this.lyric[i+1].time}
        })
        this.updateLyric()
        //console.log(this.lyric);
    },
    //获取当前歌曲播放的时间
    getCurrentTime(){
        this.currentTime=this.$refs.audio.currentTime
        this.updateCurrentTime(this.currentTime)
        //console.log(this.currentTime);
        //滚动歌词
        this.scollLyric()
    },
    //监听当前正在播放的歌词,滚动滑块
    scollLyric(){
      let x=document.querySelector('p.lyric_active')
      //console.log([x])
      if(x!=null){
        if(x.offsetTop>240)
        this.$refs.musicLyric.scrollTop=x.offsetTop-240
      }
    },
    changeSong(i){
      if(i==1){
        this.playlistIndex==this.playlist.length-1?
          this.updatePlaylistIndex(0)
          : this.updatePlaylistIndex(this.playlistIndex+1)
      }
      else if(i==0){
        this.playlistIndex==0?
          this.updatePlaylistIndex(this.playlist.length-1)
          : this.updatePlaylistIndex(this.playlistIndex-1)
      }
      else{
        this.updatePlaylistIndex(this.playlist.findIndex(item => item.id==i))
      }
    },
    //拖动进度条触发，将进度条playTime同步给currentTime
    setCurrentTime(){
      this.$refs.audio.currentTime=this.playTime
    },
    JumpToComment(){
    this.$router.push('/SongComment/'+this.playlist[this.playlistIndex].song.id)
    this.ShowMusicDetail=false
    },
    JumpToMV(){
    this.$router.push('/MV/'+this.playlist[this.playlistIndex].song.mvid)
    this.ShowMusicDetail=false
    this.play()
    }
  },
  watch:{
    playlistIndex(){
        this.getMusicLyric()
        this.timer=setInterval(this.getCurrentTime,800)
        this.$refs.audio.autoplay=true
        if(this.$refs.audio.paused){
            this.playOrPause(true)
        }
    },
    playlist(){
        this.getMusicLyric()
        this.timer=setInterval(this.getCurrentTime,800)
        this.$refs.audio.autoplay=true
        if(this.isplay==false){
            this.$refs.audio.play()
            this.playOrPause(true)
        }
    },
    //监听currentTime，同步给进度条的playTime
    currentTime(){
      this.playTime=this.$refs.audio.currentTime
    },
    //监听播放结束自动播放下一首
    playTime(newvalue){
      if(newvalue==this.$refs.audio.duration){
        this.changeSong(1)
      }
    }
  },
  computed: {
    ...mapState(["playlist","playlistIndex",'isplay']),
  },
};
</script>

<style lang="less" scoped>
.musicPlayer {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid gainsboro;
  background-color: rgb(253, 253, 253);
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
}
#PlayPage{
  .backgroundImg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(1rem);
  }
}
#top{
  width: 100%;
  height: 1rem;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // .topLeft{
  //   margin-left: 1.4rem;
  //   h4{
  //     margin: 0.1rem 0 ;
  //   }
  //   span{
  //     font-size: 8px;
  //     color: grey;
  //   }
  }
  .topRight{
    position: absolute;
    right:0.2rem;
    margin: 0.3rem 0.2rem;
  }
  
#main{
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .needle{
    height: 3.2rem;
    width: 2rem;
    z-index: 1;
    position: relative;
    left:2rem ;
    transform-origin: 0 0 ;
    transform: rotate(0deg);
    transition: all 2s;
  }
  .needle_play{
    height: 3.2rem;
    width: 2rem;
    z-index: 1;
    position: relative;
    left:2rem ;
    transform-origin: 0 0 ;
    transform: rotate(20deg);
    transition: all 2s;
  }
  .CD{
    height: 5rem;
    width: 5rem;
    position: absolute;
    top: 1.8rem;
  }
  @keyframes rotateCD {
  0%   {transform: rotateZ(0deg);}
  100% {transform: rotateZ(360deg);}
}
  .SongImg{
    height: 3.2rem;
    width: 3.2rem;
    position: relative;
    top:-0.46rem;
    animation: rotateCD 10s linear infinite;
  }
  .SongImg_play{
    animation-play-state: running;
  }
  .SongImg_paused{
    animation-play-state: paused;
  }
  .main_info{
    h2{
      margin-bottom: 6px;
    }
    span{
      font-size: 8px;
      color: grey;
    }
  }
}
.lyric_content{
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: scroll;
  p{
    font-size: 18px;
    color: rgba(229, 169, 169, 0.681);
  }
  .lyric_active{
    font-size: 22px;
    color: rgb(235, 235, 235);
}
}

.footer1{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1.2rem;
}
.footer2{
  width: 100%;
  height: 0.1rem;
  margin-bottom: 0.4rem;
  #playLine{
    width: 100%;
  }
}
.footer3{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1.2rem;
  color: #b33434ce;
}
#PlaylistCard{
  h3{
    text-align: center;
  }
  .music{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .music_active{
    color: indianred;
  }
  .music_left{
    width: 80%;
    h4{
      margin: 0;
      display: inline-block;
    }
    span{
      font-size: 6px;
      color: gray;
    }
  }

}
</style>