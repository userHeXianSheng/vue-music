"use strict";(self["webpackChunkvue_music"]=self["webpackChunkvue_music"]||[]).push([[517],{517:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var l=t(311);const o=(0,l.createElementVNode)("h2",{style:{"text-align":"center"}},"精彩评论",-1),a=(0,l.createElementVNode)("div",{style:{height:"1rem"}},null,-1);function u(e,n,t,u,r,i){const m=(0,l.resolveComponent)("van-button"),s=(0,l.resolveComponent)("Comment");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createVNode)(m,{style:{opacity:"0.8",position:"absolute","z-index":"1"},icon:"arrow-left",size:"small",plain:"",onClick:n[0]||(n[0]=e=>this.$router.back())}),o,((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(r.SongComment,((e,n)=>((0,l.openBlock)(),(0,l.createBlock)(s,{key:n,content:e.content,timeStr:e.timeStr,userImg:e.user.avatarUrl,nickname:e.user.nickname,likedCount:e.likedCount},null,8,["content","timeStr","userImg","nickname","likedCount"])))),128)),a])}var r={data(){return{SongComment:[{user:{locationInfo:null,liveInfo:null,anonym:0,commonIdentity:null,userId:433770124,authStatus:0,expertTags:null,experts:null,vipType:0,followed:!1,mutual:!1,remarkName:null,vipRights:null,nickname:"薛家猫名暴暴",avatarDetail:null,userType:0,avatarUrl:"http://p4.music.126.net/jh3hWxG0L_eAg3iHFlf91g==/109951167340236410.jpg"},beReplied:[],pendantData:null,showFloorComment:null,status:0,commentId:5255096549,content:"大家能想到薛之谦拍摄时是吸起双下巴后期再配音的嘛（手动狗头）",contentResource:null,time:1614744289988,timeStr:"2021-03-03",needDisplayTime:!0,likedCount:4120,expressionUrl:null,commentLocationType:0,parentCommentId:0,decoration:{},repliedMark:null,grade:null,liked:!1},{user:{locationInfo:null,liveInfo:null,anonym:0,commonIdentity:null,userId:1343823989,authStatus:0,expertTags:null,experts:null,vipType:0,followed:!1,mutual:!1,remarkName:null,vipRights:null,nickname:"苏淮_o85L",avatarDetail:null,userType:0,avatarUrl:"http://p4.music.126.net/Y1ENY-upods8G3eTKv-2VQ==/109951167581950725.jpg"},beReplied:[],pendantData:null,showFloorComment:null,status:0,commentId:5255123143,content:"薛之谦：人家谈恋爱跟我有什么关系 我只用在一边唱歌就好",contentResource:null,time:1614744367955,timeStr:"2021-03-03",needDisplayTime:!0,likedCount:2933,expressionUrl:null,commentLocationType:0,parentCommentId:0,decoration:{},repliedMark:null,grade:null,liked:!1},{user:{locationInfo:null,liveInfo:null,anonym:0,commonIdentity:null,userId:1364472683,authStatus:0,expertTags:null,experts:null,vipType:11,followed:!1,mutual:!1,remarkName:null,vipRights:{associator:{vipCode:100,rights:!0},musicPackage:null,redVipAnnualCount:-1,redVipLevel:5},nickname:"xin-羽",avatarDetail:null,userType:0,avatarUrl:"http://p4.music.126.net/rcpui9d87f3hQxOtPfl7ag==/109951165616335396.jpg"},beReplied:[],pendantData:null,showFloorComment:null,status:0,commentId:5255159908,content:"我中过最惊喜的彩券 就是遇见薛之谦",contentResource:null,time:1614744563564,timeStr:"2021-03-03",needDisplayTime:!0,likedCount:1901,expressionUrl:null,commentLocationType:0,parentCommentId:0,decoration:{},repliedMark:null,grade:null,liked:!1},{user:{locationInfo:null,liveInfo:null,anonym:0,commonIdentity:null,userId:1945880027,authStatus:0,expertTags:null,experts:null,vipType:0,followed:!1,mutual:!1,remarkName:null,vipRights:null,nickname:"今天降温了-",avatarDetail:null,userType:0,avatarUrl:"http://p3.music.126.net/wFeVHDLbobBFful7ug62WA==/109951167052298702.jpg"},beReplied:[],pendantData:null,showFloorComment:null,status:0,commentId:5255094694,content:"细节 男主穿dsp！！！",contentResource:null,time:1614744666138,timeStr:"2021-03-03",needDisplayTime:!0,likedCount:1389,expressionUrl:null,commentLocationType:0,parentCommentId:0,decoration:{},repliedMark:null,grade:null,liked:!1}]}},methods:{async getSongComment(){const{data:e}=await this.$http.get("/comment/music?id="+this.$route.params.id);this.SongComment=e.hotComments}},created(){this.getSongComment()}},i=t(89);const m=(0,i.Z)(r,[["render",u]]);var s=m}}]);
//# sourceMappingURL=517.bd716dc4.js.map