<template>
  <div>
    <van-tabs v-model:active="activeName" shrink title-active-color="black">
      <van-tab title="推荐" name="a" id="swiper">
      <!-- 首页banner -->
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="item in swiperImages" :key="item">
            <img :src="item.pic"/>
          </van-swipe-item>
        </van-swipe>

        <van-grid :border="false" clickable :column-num="3" :gutter="8">  
            <van-grid-item icon="smile-comment-o" text="每日推荐" to="/" />
            <van-grid-item icon="tv-o" text="私人FM" to="/" />
            <van-grid-item icon="fire" text="排行榜" to="/" />  
          <!-- <van-grid-item icon="home-o" text="歌单" to="/">   
            <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"/>
            <span>ttttt</span>
          </van-grid-item> -->  
        </van-grid>

      <!-- 歌单列表 -->
        <div class="songSheet">
          <h3>发现好歌单</h3>
          <van-button plain type="default" round size="small">查看更多</van-button>
        </div>
        <van-swipe id="songSheetSwipe" :show-indicators="false" :loop="false" :width="150" style="height:3.5rem">
          <van-swipe-item v-for="item in songSheetList" :key="item.id">
            <div class="songSheetItem" style="margin-right:0.2rem">
              <router-link :to="'/songSheetInfo/'+item.id">
                <img :src="item.picUrl" style="width:2.8rem;height:2.8rem" />
                <span><van-icon name="play-circle-o" size="30px"/>{{handlePlayCount(item.playCount)}}</span>
                <h5>{{item.name}}</h5>
              </router-link>
            </div>
          </van-swipe-item>
        </van-swipe>
      <!-- 新歌推荐 -->
        <div id="newSongs">
          <div class="newSongs_top">
            <h3>新声来袭</h3>
            <van-button plain type="default" round size="small">查看更多</van-button>
          </div>
          <div class="musicList">
            <van-row v-for="(item,i) in songs" :key="item.id" align="center" style="margin-top:10px;height:1rem">
              <van-col span="2"><span style="margin:12px">{{i+1}}</span></van-col>
              <van-col span="16" class="left" @click="play(item)">
                <h4 style="margin:0px">{{item.name}}</h4>
                <span style="fontSize:6px;color:gray">{{getArtists(item.song.artists)}}</span>
              </van-col>
              <van-col span="4" offset="2" class="right">
                <van-icon v-if="item.song.mvid!=0" name="video-o" size="0.6rem"/>
                <van-icon class="right-img" name="bars" size="0.6rem"/>
              </van-col>
            </van-row>
          </div>
          <!-- mv列表 -->
        <div id="mvList">
          <div class="mvList_top">
            <h3>MV推荐</h3>
            <van-button plain type="default" round size="small">查看更多</van-button>
          </div>          
          <van-swipe class="mvList_main" :show-indicators="false" :loop="false" :width="200" style="height:3.5rem">
            <van-swipe-item v-for="item in Mvs" :key="item.id">
              <div class="mvListItem" style="margin-right:0.2rem">
                <router-link :to="'/mv/'+item.id">
                  <img :src="item.cover" style="max-width:3.8rem;height:2.8rem" />
                  <span><van-icon name="play-circle-o" size="30px"/>{{handlePlayCount(item.playCount)}}</span>
                  <h4>{{item.name}}</h4>
                </router-link>
              </div>
            </van-swipe-item>
          </van-swipe>

          <div id="Null"></div>
        </div>
        </div>
      </van-tab>
      <van-tab title="音乐馆" name="b">音乐馆</van-tab>
      <van-tab title="发现" name="c">发现</van-tab>
      <van-tab title="我的" name="d">
        <div id="login" v-show="!islogin">
          <h2>请登录账号</h2>
          <van-cell-group inset>
            <van-field v-model="tel" type="tel" error required label="手机号" placeholder="请输入手机号"/>
            <van-field v-model="password" type="password" required label="密码" placeholder="请输入密码"/>
          </van-cell-group>
          <van-button @click="login">登录</van-button>
        </div>
        <div id="userInfo" v-show="islogin">
          <h2>欢迎欢迎</h2>
          <!-- <img src="../assets/a.jpg" alt=""> -->
        </div>
      </van-tab>
    </van-tabs>
    <span class="search"><van-icon @click="this.$router.push('/search')" name="search" size="0.5rem" /></span>
        
      
  </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'
export default {
  data(){
    return{
      activeName:'a',
      swiperImages:[
      {pic:'http://p1.music.126.net/eHcRblZvJsL1X6d6xELNGw==/109951167625056937.jpg'},
      {pic:'http://p1.music.126.net/1cow50pTgQTTctqPt9rgaQ==/109951167625111843.jpg'},
      {pic:'http://p1.music.126.net/leRGkoCsrNnmocZmfeErPQ==/109951167625309622.jpg'},
      {pic:'http://p1.music.126.net/on5rjPJN68p9H0X1zYJQBA==/109951167624870370.jpg'},
      ],
      songSheetList:[
      {id:6783412642,name:'情歌300首｜总有一首情歌让你心酸',picUrl:'https://p2.music.126.net/WZZyxQc--7NsDhw_xIiaLA==/109951166045038823.jpg',playCount:13251166},
      {id:331841455 ,name:'深度睡眠 |重度失眠者专用歌单' ,picUrl:'https://p2.music.126.net/g2_Gv0dtAicJ3ChTYu28_g==/1393081239628722.jpg' ,playCount:62217564},
      {id:2585465480,name:'此生多少情与仇，只愿与你长相守' ,picUrl:'https://p2.music.126.net/JmvcSq1Jh65HNlUQBIy6rA==/109951163793559872.jpg' ,playCount:19007080},
      {id:2399935867 ,name:'看书刷题+纯音乐【学习专用】' ,picUrl:'https://p2.music.126.net/k6dwo-n_fnRhCHLXUrxKtw==/109951163626916509.jpg' ,playCount:26247512},
      ],
      tel:123456,
      password:111,
      songs:[
      {
          "id": 1960639795,
          "type": 4,
          "name": "终有一散的人们",
          "copywriter": null,
          "picUrl": "http://p1.music.126.net/t1qypSpdy0-I2FaTLjbkCQ==/109951167581598290.jpg",
          "canDislike": true,
          "trackNumberUpdateTime": null,
          "song": {
              "name": "终有一散的人们",
              "id": 1960639795,
              "position": 0,
              "alias": [],
              "status": 0,
              "fee": 8,
              "copyrightId": 2706773,
              "disc": "01",
              "no": 6,
              "artists": [
                  {
                      "name": "周震南",
                      "id": 12917484,
                      "picId": 0,
                      "img1v1Id": 0,
                      "briefDesc": "",
                      "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "img1v1Url": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "albumSize": 0,
                      "alias": [],
                      "trans": "",
                      "musicSize": 0,
                      "topicPerson": 0
                  }
              ],
              },
      },
      {
          "id": 1961287841,
          "type": 4,
          "name": "来自冰岛的信号",
          "copywriter": null,
          "picUrl": "http://p1.music.126.net/0V9b8O1mUFbIyOqnABpmOg==/109951167624073329.jpg",
          "canDislike": true,
          "trackNumberUpdateTime": null,
          "song": {
              "name": "来自冰岛的信号",
              "id": 1961287841,
              "position": 0,
              "alias": [],
              "status": 0,
              "fee": 8,
              "copyrightId": 2707463,
              "disc": "01",
              "no": 1,
              "artists": [
                  {
                      "name": "白举纲",
                      "id": 909029,
                      "picId": 0,
                      "img1v1Id": 0,
                      "briefDesc": "",
                      "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "img1v1Url": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "albumSize": 0,
                      "alias": [],
                      "trans": "",
                      "musicSize": 0,
                      "topicPerson": 0
                  }
              ],
              
      },
      },
      {
          "id": 1960602407,
          "type": 4,
          "name": "容貌焦虑症",
          "copywriter": null,
          "picUrl": "http://p1.music.126.net/0WzXF8kldgrEJGFs8XkJmw==/109951167611485883.jpg",
          "canDislike": true,
          "trackNumberUpdateTime": null,
          "song": {
              "name": "容貌焦虑症",
              "id": 1960602407,
              "position": 0,
              "alias": [],
              "status": 0,
              "fee": 8,
              "copyrightId": 0,
              "disc": "01",
              "no": 5,
              "artists": [
                  {
                      "name": "刘瑞琦",
                      "id": 840134,
                      "picId": 0,
                      "img1v1Id": 0,
                      "briefDesc": "",
                      "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "img1v1Url": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "albumSize": 0,
                      "alias": [],
                      "trans": "",
                      "musicSize": 0,
                      "topicPerson": 0
                  }
              ],
              
      },
      },
      {
          "id": 1954694243,
          "type": 4,
          "name": "日落沙滩后",
          "copywriter": null,
          "picUrl": "http://p1.music.126.net/W_HGCJ_c-8dnyjRdushebw==/109951167531636363.jpg",
          "canDislike": true,
          "trackNumberUpdateTime": null,
          "song": {
              "name": "日落沙滩后",
              "id": 1954694243,
              "position": 0,
              "alias": [],
              "status": 0,
              "fee": 8,
              "copyrightId": 0,
              "disc": "01",
              "no": 0,
              "artists": [
                  {
                      "name": "余佳运",
                      "id": 1079074,
                      "picId": 0,
                      "img1v1Id": 0,
                      "briefDesc": "",
                      "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "img1v1Url": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "albumSize": 0,
                      "alias": [],
                      "trans": "",
                      "musicSize": 0,
                      "topicPerson": 0
                  },
                  {
                      "name": "HYBS",
                      "id": 49713779,
                      "picId": 0,
                      "img1v1Id": 0,
                      "briefDesc": "",
                      "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "img1v1Url": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                      "albumSize": 0,
                      "alias": [],
                      "trans": "",
                      "musicSize": 0,
                      "topicPerson": 0
                  }
              ],
              
          },
      }
],
      Mvs:[
      {
      "id": 14276994,
      "cover": "http://p1.music.126.net/fZXYjrs6ye2IIWYkfWazJg==/109951165849906351.jpg",
      "name": "手术刀 Scalpel",
      "playCount": 2983412,
      "briefDesc": null,
      "desc": null,
      "artistName": "Melo",
      "artistId": 29304235,
      "duration": 0,
      "mark": 0,
      "subed": false,
      "artists": [
          {
              "id": 29304235,
              "name": "Melo"
          }
      ]
      },
      {
    "id": 14260205,
    "cover": "http://p1.music.126.net/aNdqdTa0_AW7vAVIXVShxw==/109951165774422155.jpg",
    "name": "彩券",
    "playCount": 4097659,
    "briefDesc": null,
    "desc": null,
    "artistName": "薛之谦",
    "artistId": 5781,
    "duration": 0,
    "mark": 0,
    "subed": false,
    "artists": [
        {
            "id": 5781,
            "name": "薛之谦"
        }
    ]
      },
      {
    "id": 10974182,
    "cover": "http://p1.music.126.net/6AqD26CMFVXTJ2LrFD8zKQ==/109951165498552831.jpg",
    "name": "欲控",
    "playCount": 477520,
    "briefDesc": null,
    "desc": null,
    "artistName": "毕雯珺",
    "artistId": 13058487,
    "duration": 0,
    "mark": 0,
    "subed": false,
    "artists": [
        {
            "id": 13058487,
            "name": "毕雯珺"
        }
    ]
      },
      {
    "id": 14212561,
    "cover": "http://p1.music.126.net/wRzS7TbR95LdLTdDQ5T2hA==/109951165547651915.jpg",
    "name": "过",
    "playCount": 6340727,
    "briefDesc": null,
    "desc": null,
    "artistName": "王嘉尔",
    "artistId": 1083118,
    "duration": 0,
    "mark": 0,
    "subed": false,
    "artists": [
        {
            "id": 1083118,
            "name": "王嘉尔"
        },
        {
            "id": 3684,
            "name": "林俊杰"
        }
    ]
      },
      ],
    }
  },
  methods:{
    async getSwiperImages(){
      const {data :res} = await this.$http.get('/banner?type=2')
      //console.log(res,1)
      this.swiperImages=res.banners
    },
    async getSongSheet(){
      const {data :res} = await this.$http.get('/personalized?limit=10')
      //console.log(res,2)
      this.songSheetList=res.result
    },
    handlePlayCount(x){
      if(x>10000)
        return (x/10000).toFixed(2)+'万'
      if(x<10000)
        return x
    },
    login(){
      if(this.tel==123456&&this.password==111){
        this.$store.commit('updateLogin',true)
        window.localStorage.setItem('token','xxx')
      }
      else
        window.alert('登陆失败')
    },
      ...mapMutations(['addPlaySong','updatePlaylist','updatePlaylistIndex']),
    async getSongs(){
        const {data :res} = await this.$http.get('/personalized/newsong?limit=4')
        //console.log(res,3)
        this.songs=res.result
    },
    getArtists(x){
      var a=''
      for(let i in x){
        a+=x[i].name+'/'
      }
      return a
    },
    play(item){
      this.addPlaySong(item)
    },
    async getMvs(){
        const {data :res} = await this.$http.get('/mv/first?limit=8')
        //console.log(res,4)
        this.Mvs=res.data
    },
  },
  computed:{
    ...mapState(['islogin']),
  },
  created(){
    this.$notify({ type: 'danger', message: '由于采用的网易云音乐接口，可能会由于身份验证而请求数据失败' })
    this.getSwiperImages()
    this.getSongSheet()
    this.getSongs()
    this.getMvs()
    if(window.localStorage.getItem('token'))
      this.$store.commit('updateLogin',true)
  }
}
</script>

<style lang="less" scoped>
.search{
  display: inline-block;
  position: fixed;
  top:0.2rem;
  right:0.2rem;
}
#swiper{
  .van-swipe{
    width: 100%;
    height: 3rem;
      .van-swipe-item{
        padding: auto;
        img{
          width: 100%;
          height: 100%;
          border-radius: 0.2rem;
        }
      }
  }
}
.songSheet{
  height: 0.6rem;
  margin-top: 0;
  h3{
    float: left;
    margin: 0;
  }
  .van-button{
    float:right;
    margin-top: 0;
  }
}
.songSheetItem{
  position: static;
  span{
    position: absolute;
    top:0;
    right:0.2rem;
    color: black;
  }
  h5{
    margin: 0;
    text-align: center;
    color: black;
  }
}
#newSongs{
  background-color: rgba(151, 191, 226, 0.7);
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .newSongs_top{
    width: 100%;
    height: 0.6rem;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .musicList{
    .right{
    .van-icon{
      width: 0.6rem;
    }
    .right-img{
      float: right;
    }
    }
  }
}
#mvList{
  background-color: rgba(200, 187, 187, 0.75);
  .mvList_top{
    width: 100%;
    height: 0.6rem;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mvList_main{
  position: static;
  span{
    position: absolute;
    bottom:0.6rem;
    left:0;
    color: black;
    background-color: rgba(205, 205, 205, 0.6);
    border-radius: 30%;
  }
  h4{
    margin: 0;
    text-align: center;
    color: black;
  }
  }
}
#Null{
  width: 100%;
  height: 1rem;
}
#login{
  .van-button{
    margin:0.4rem 2.6rem;
  }
}
#userInfo{
  width: 100%;
  height: 10rem;
  background: url('../assets/a4.jpg') no-repeat;
  background-size: 100% ;
  //animation: hello 20s  infinite;
  h2{
    margin-top: 0;
  }
  // img{
  //   width: 100%;
  //   max-height: 100%;
  //   //animation: hello 6s linear infinite;
  // }
  // @keyframes hello {
  //   // 0% {filter: blur(0.1rem);}
  //   // 100% {filter: blur(0rem);}
  //   0% {background: url('../assets/a1.jpg');background-size: 100%}
  //   25% {background: url('../assets/a2.jpg');background-size: 100%}
  //   50% {background: url('../assets/a3.jpg');background-size: 100%}
  //   75% {background: url('../assets/a4.jpg');background-size: 100%}
  // }
}
</style>>