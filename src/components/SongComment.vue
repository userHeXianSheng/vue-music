<template>
  <div>
    <van-button style="opacity: 0.8;position:absolute;z-index:1" icon="arrow-left" size="small" plain @click="this.$router.back()"/>
    <h2 style="text-align:center">精彩评论</h2>
    <Comment v-for="(item,i) in SongComment" :key="i"
    :content="item.content"
    :timeStr="item.timeStr"
    :userImg="item.user.avatarUrl"
    :nickname="item.user.nickname"
    :likedCount="item.likedCount"
    ></Comment>
    <div style="height:1rem"></div>
  </div>
</template>

<script>
export default {
data(){
    return{
        SongComment:
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
    async getSongComment(){
        const {data :res} = await this.$http.get('/comment/music?id='+this.$route.params.id)
        //console.log(res.hotComments)
        this.SongComment=res.hotComments
    },
},
created(){
    this.getSongComment()
}
}
</script>

<style>

</style>