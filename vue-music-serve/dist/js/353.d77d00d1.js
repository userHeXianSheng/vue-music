"use strict";(self["webpackChunkvue_music"]=self["webpackChunkvue_music"]||[]).push([[353],{353:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var a=s(311);const r=e=>((0,a.pushScopeId)("data-v-5ea3a47c"),e=e(),(0,a.popScopeId)(),e),o={id:"search-top1"},i={id:"search-top2"},n=r((()=>(0,a.createElementVNode)("p",null,"历史",-1))),c=["onClick"],l={class:"musicList"},h={style:{margin:"12px"}},d={style:{margin:"0px"}},p={style:{fontSize:"6px",color:"gray"}};function u(e,t,s,r,u,m){const y=(0,a.resolveComponent)("van-icon"),g=(0,a.resolveComponent)("van-col"),k=(0,a.resolveComponent)("van-row");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createElementVNode)("header",o,[(0,a.createVNode)(y,{onClick:t[0]||(t[0]=e=>this.$router.push("/")),name:"arrow-left",size:"0.5rem"}),(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>u.searchInput=e),onKeydown:t[2]||(t[2]=(0,a.withKeys)((e=>m.search(0)),["enter"])),autofocus:"",id:"search_input"},null,544),[[a.vModelText,u.searchInput]])]),(0,a.createElementVNode)("header",i,[n,((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(u.searchHistory,((e,t)=>((0,a.openBlock)(),(0,a.createElementBlock)("span",{key:t,onClick:t=>m.search(e)},(0,a.toDisplayString)(e),9,c)))),128)),(0,a.createVNode)(y,{onClick:m.deleteSearchHistory,id:"delete_icon",name:"delete",size:"0.5rem"},null,8,["onClick"])]),(0,a.createElementVNode)("div",l,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(u.searchList,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:e.id,align:"center",style:{"margin-top":"10px",height:"1rem"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,{span:"2"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("span",h,(0,a.toDisplayString)(t+1),1)])),_:2},1024),(0,a.createVNode)(g,{span:"16",class:"left",onClick:s=>m.play(e,t)},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("h4",d,(0,a.toDisplayString)(e.name),1),(0,a.createElementVNode)("span",p,(0,a.toDisplayString)(m.getArtists(e.artists)),1)])),_:2},1032,["onClick"]),(0,a.createVNode)(g,{span:"4",offset:"2",class:"right"},{default:(0,a.withCtx)((()=>[0!=e.mvid?((0,a.openBlock)(),(0,a.createBlock)(y,{key:0,name:"video-o",size:"0.6rem"})):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(y,{class:"right-img",name:"bars",size:"0.6rem"})])),_:2},1024)])),_:2},1024)))),128))])])}var m=s(294),y={data(){return{searchInput:"林俊杰",searchList:[],searchHistory:["林俊杰","周杰伦","双笙"]}},created(){this.searchHistory=JSON.parse(window.localStorage.getItem("searchHistory"))?JSON.parse(window.localStorage.getItem("searchHistory")):[]},methods:{...(0,m.mapMutations)(["addPlaySong","updatePlaylistIndex"]),async search(e){if(e&&(this.searchInput=e),this.searchInput){const{data:e}=await this.$http.get("/search?keywords="+this.searchInput);console.log(e,this.searchInput),this.searchList=e.result.songs,this.addSearchHistory(),this.searchInput=""}},addSearchHistory(){this.searchInput&&(this.searchHistory.unshift(this.searchInput),this.searchHistory=[...new Set([...this.searchHistory])],this.searchHistory.splice(10),window.localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory)))},deleteSearchHistory(){window.localStorage.removeItem("searchHistory"),this.searchHistory=[]},play(e,t){e.song={},e.song.album={},e.song.id=e.id,e.song.album.artists=e.artists,e.picUrl=e.album.artist.img1v1Url,this.addPlaySong(e)},getArtists(e){var t="";for(let s in e)t+=e[s].name+"/";return t}}},g=s(89);const k=(0,g.Z)(y,[["render",u],["__scopeId","data-v-5ea3a47c"]]);var v=k}}]);
//# sourceMappingURL=353.d77d00d1.js.map