<template>
  <div id="Mv">
    <div class="Mv_top">
      <img class="imgTop" :src="Mv.cover" alt="">
      <div><van-button style="opacity: 0.2;" icon="arrow-left" size="mini" plain @click="onClickTopLeft"/></div>
      <video ref="mv" controls autoplay name="media">
        <source :src="Mv.url" type="video/mp4">
      </video>
    </div>
    <div class="Mv_main">
        <div class="des">
            <div>
                <h3>{{Mv.name}}</h3>
                <h5>{{getArtists(Mv.artists)}}</h5>
            </div>
            <span>{{Mv.desc}}</span>
        </div>
        <h4>精彩评论</h4>
        <Comment v-for="(item,i) in Comment" :key="i"
        :content="item.content"
        :timeStr="item.timeStr"
        :userImg="item.user.avatarUrl"
        :nickname="item.user.nickname"
        :likedCount="item.likedCount"
        ></Comment>
    </div>
    <div style="width:100%;height:1rem"></div>
  </div>
</template>

<script>
export default {
data(){
    return{
        Mv:{
        cover:'http://p1.music.126.net/aNdqdTa0_AW7vAVIXVShxw==/109951165774422155.jpg',
        url:'http://vodkgeyttp8.vod.126.net/cloudmusic/ae2c/core/cdbc/599e1a6ef37930c119293beaf34368ae.mp4?wsSecret=8e9dce3373624570c9f81ca0ecbba125&wsTime=1657011031',
        name:'彩券',
        desc:'薛之谦专辑「天外来物」高甜单曲《彩券》MV正式上线，MV由内地新锐导演张圣熹执导，以叙事和光影的交叠绘制一幅浪漫邂逅的瞬间，画面将纯净透彻的白色空间和光影柔和的现实世界设为主基调，对照着爱情在理想与现实中的模样。爱情从初遇到疯狂，从平淡到别离，全部融化在细节里，MV的光影跟随情感的走势由明至暗，忽冷忽暖，映照令人深陷着迷的热诚。《彩券》MV演员别出心裁，由《彩券》词曲作者郭冠廷搭档黄婷婷友情出演，以情绪融化生活点滴，诠释爱情在不期而会中一见倾心，在放任甜蜜里挥洒浪漫，在情意散尽时分崩离析，去留都是难以忘怀的瞬间，流连于生命的痕迹。薛之谦则深处白色的空间演绎歌曲，以纯粹而浅易的视觉感官，默示着关于情感的意蕴。暮色和暖，微风缱绻，擦肩而过的气息，都是命中「彩券」的爱意。',
        artists:[{
        "id": 5781,
        "name": "薛之谦",
        "img1v1Url": null,
        "followed": false
        }],
        },
        Comment:
        [
        {
        user: {
        "locationInfo": null,
        "liveInfo": null,
        "anonym": 0,
        "commonIdentity": null,
        "userId": 433770124,
        "authStatus": 0,
        "expertTags": null,
        "experts": null,
        "vipType": 0,
        "followed": false,
        "mutual": false,
        "remarkName": null,
        "vipRights": null,
        nickname: "薛家猫名暴暴",
        "avatarDetail": null,
        "userType": 0,
        avatarUrl: "http://p4.music.126.net/jh3hWxG0L_eAg3iHFlf91g==/109951167340236410.jpg"
        },
        "beReplied": [],
        "pendantData": null,
        "showFloorComment": null,
        "status": 0,
        "commentId": 5255096549,
        content: "大家能想到薛之谦拍摄时是吸起双下巴后期再配音的嘛（手动狗头）",
        "contentResource": null,
        "time": 1614744289988,
        timeStr: "2021-03-03",
        "needDisplayTime": true,
        likedCount: 4120,
        "expressionUrl": null,
        "commentLocationType": 0,
        "parentCommentId": 0,
        "decoration": {},
        "repliedMark": null,
        "grade": null,
        "liked": false
        },
        {
        user: {
        "locationInfo": null,
        "liveInfo": null,
        "anonym": 0,
        "commonIdentity": null,
        "userId": 1343823989,
        "authStatus": 0,
        "expertTags": null,
        "experts": null,
        "vipType": 0,
        "followed": false,
        "mutual": false,
        "remarkName": null,
        "vipRights": null,
        nickname: "苏淮_o85L",
        "avatarDetail": null,
        "userType": 0,
        avatarUrl: "http://p4.music.126.net/Y1ENY-upods8G3eTKv-2VQ==/109951167581950725.jpg"
        },
        "beReplied": [],
        "pendantData": null,
        "showFloorComment": null,
        "status": 0,
        "commentId": 5255123143,
        content: "薛之谦：人家谈恋爱跟我有什么关系 我只用在一边唱歌就好",
        "contentResource": null,
        "time": 1614744367955,
        timeStr: "2021-03-03",
        "needDisplayTime": true,
        likedCount: 2933,
        "expressionUrl": null,
        "commentLocationType": 0,
        "parentCommentId": 0,
        "decoration": {},
        "repliedMark": null,
        "grade": null,
        "liked": false
        },
        {
        user: {
        "locationInfo": null,
        "liveInfo": null,
        "anonym": 0,
        "commonIdentity": null,
        "userId": 1364472683,
        "authStatus": 0,
        "expertTags": null,
        "experts": null,
        "vipType": 11,
        "followed": false,
        "mutual": false,
        "remarkName": null,
        "vipRights": {
            "associator": {
                "vipCode": 100,
                "rights": true
            },
            "musicPackage": null,
            "redVipAnnualCount": -1,
            "redVipLevel": 5
        },
        nickname: "xin-羽",
        "avatarDetail": null,
        "userType": 0,
        avatarUrl: "http://p4.music.126.net/rcpui9d87f3hQxOtPfl7ag==/109951165616335396.jpg"
        },
        "beReplied": [],
        "pendantData": null,
        "showFloorComment": null,
        "status": 0,
        "commentId": 5255159908,
        content: "我中过最惊喜的彩券 就是遇见薛之谦",
        "contentResource": null,
        "time": 1614744563564,
        timeStr: "2021-03-03",
        "needDisplayTime": true,
        likedCount: 1901,
        "expressionUrl": null,
        "commentLocationType": 0,
        "parentCommentId": 0,
        "decoration": {},
        "repliedMark": null,
        "grade": null,
        "liked": false
        },
        {
        user: {
        "locationInfo": null,
        "liveInfo": null,
        "anonym": 0,
        "commonIdentity": null,
        "userId": 1945880027,
        "authStatus": 0,
        "expertTags": null,
        "experts": null,
        "vipType": 0,
        "followed": false,
        "mutual": false,
        "remarkName": null,
        "vipRights": null,
        nickname: "今天降温了-",
        "avatarDetail": null,
        "userType": 0,
        avatarUrl: "http://p3.music.126.net/wFeVHDLbobBFful7ug62WA==/109951167052298702.jpg"
        },
        "beReplied": [],
        "pendantData": null,
        "showFloorComment": null,
        "status": 0,
        "commentId": 5255094694,
        content: "细节 男主穿dsp！！！",
        "contentResource": null,
        "time": 1614744666138,
        timeStr: "2021-03-03",
        "needDisplayTime": true,
        likedCount: 1389,
        "expressionUrl": null,
        "commentLocationType": 0,
        "parentCommentId": 0,
        "decoration": {},
        "repliedMark": null,
        "grade": null,
        "liked": false
        },
        ],
    }
},
methods:{
    async getMv(){
        const {data :res} = await this.$http.get('/mv/detail?mvid='+this.$route.params.id)
        if(res.code==200){
            //console.log(res)
            this.Mv=res.data
            this.getMvUrl(res.data.id)
            this.getMvComment(res.data.id)
        }
        return
    },
    async getMvUrl(id){
        const {data :res} = await this.$http.get('/mv/url?id='+id)
        if(res.code==200){
            //console.log(res)
            this.Mv.url=res.data.url
            this.$refs.mv.src=res.data.url
        }
        return        
    },
    async getMvComment(id){
        const {data :res} = await this.$http.get('/comment/mv?id='+id)
        if(res.code==200){
            //console.log(res)
            this.Comment=res.hotComments
        }
        return
    },
    getArtists(x){
      var a=''
      for(let i in x){
        a+=x[i].name+'/'
      }
      return a
    },
    onClickTopLeft(){
        this.$router.back()
    }
},
created(){
    this.getMv();
}
}
</script>

<style lang="less" scoped>
#Mv{
    .Mv_top{
        img{
            width: 100%;
            position: absolute;
            z-index: -1;
            filter: blur(0.4rem);
        }
        video{
            width: 100%;
        }
    }
    .Mv_main{
        .des{
            width: 100%;
            height: 2rem;
            overflow: auto;
        }
        h3,h5{
            display: inline-block;
            margin-right: 0.2rem;
        }
    }
}
</style>