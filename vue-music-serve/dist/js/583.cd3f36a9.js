"use strict";(self["webpackChunkvue_music"]=self["webpackChunkvue_music"]||[]).push([[583],{583:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(311);const o=e=>((0,a.pushScopeId)("data-v-4a1b96ab"),e=e(),(0,a.popScopeId)(),e),l={id:"Mv"},r={class:"Mv_top"},c=["src"],i={ref:"mv",controls:"",autoplay:"",name:"media"},s=["src"],m={class:"Mv_main"},d={class:"des"},u=o((()=>(0,a.createElementVNode)("h4",null,"精彩评论",-1))),v=o((()=>(0,a.createElementVNode)("div",{style:{width:"100%",height:"1rem"}},null,-1)));function p(e,t,n,o,p,h){const g=(0,a.resolveComponent)("van-button"),k=(0,a.resolveComponent)("Comment");return(0,a.openBlock)(),(0,a.createElementBlock)("div",l,[(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("img",{class:"imgTop",src:p.Mv.cover,alt:""},null,8,c),(0,a.createElementVNode)("div",null,[(0,a.createVNode)(g,{style:{opacity:"0.2"},icon:"arrow-left",size:"mini",plain:"",onClick:h.onClickTopLeft},null,8,["onClick"])]),(0,a.createElementVNode)("video",i,[(0,a.createElementVNode)("source",{src:p.Mv.url,type:"video/mp4"},null,8,s)],512)]),(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("div",null,[(0,a.createElementVNode)("h3",null,(0,a.toDisplayString)(p.Mv.name),1),(0,a.createElementVNode)("h5",null,(0,a.toDisplayString)(h.getArtists(p.Mv.artists)),1)]),(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(p.Mv.desc),1)]),u,((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(p.Mv.comment,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:t,content:e.content,timeStr:e.timeStr,userImg:e.user.avatarUrl,nickname:e.user.nickname,likedCount:e.likedCount},null,8,["content","timeStr","userImg","nickname","likedCount"])))),128))]),v])}var h={data(){return{Mv:{}}},methods:{async getMv(){const{data:e}=await this.$http.get("/mv/detail?mvid="+this.$route.params.id);console.log(e),this.Mv=e.data,this.getMvUrl(e.data.id),this.getMvComment(e.data.id)},async getMvUrl(e){const{data:t}=await this.$http.get("/mv/url?id="+e);console.log(t.data.url),this.Mv.url=t.data.url,this.$refs.mv.src=t.data.url},async getMvComment(e){const{data:t}=await this.$http.get("/comment/mv?id="+e);console.log(t),this.Mv.comment=t.hotComments},getArtists(e){var t="";for(let n in e)t+=e[n].name+"/";return t},onClickTopLeft(){this.$router.back()}},created(){this.getMv()}},g=n(89);const k=(0,g.Z)(h,[["render",p],["__scopeId","data-v-4a1b96ab"]]);var M=k}}]);
//# sourceMappingURL=583.cd3f36a9.js.map