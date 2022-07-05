<template>
  <div class='content'>
      <Header></Header>  

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <Part v-for='item in list' 
        :key="item.id"
        :title="item.title"      
        :author="item.aut_name"      
        :pubdate="item.pubdate"      
        :comitnum="item.comm_count"
        :cover="item.cover"
        ></Part>
        </van-list>
    </van-pull-refresh>
        
        <Footer2> </Footer2>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Part from '../components2/Article.vue'
import Footer2 from '../components2/Footer2.vue'
import axios from'axios'

export default {
created(){
    this.init()
    this.$message.warning('接口已失效')
},

data(){
        return{
        page:1,
        limit:10,
        list:[{id:1,title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum beatae quibusdam quam qui! Eaque, eum! ',aut_name:'wang',pubdate:'2021-12-11',comm_count:16,cover:{}},
            {id:2,title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum beatae quibusdam quam qui! Eaque, eum! ',aut_name:'qiang',pubdate:'2021-12-11',comm_count:99,cover:{}},
            {id:3,title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum beatae quibusdam quam qui! Eaque, eum! ',aut_name:'yang',pubdate:'2021-12-11',comm_count:33,cover:{}},
            {id:4,title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum beatae quibusdam quam qui! Eaque, eum! ',aut_name:'wong',pubdate:'2021-12-11',comm_count:55,cover:{}},
            {id:5,title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum beatae quibusdam quam qui! Eaque, eum! ',aut_name:'mei',pubdate:'2021-12-11',comm_count:22,cover:{}},
            {id:6,title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum beatae quibusdam quam qui! Eaque, eum! ',aut_name:'ming',pubdate:'2021-12-11',comm_count:43,cover:{}}],
        loading: true,
        finished: false,
        refreshing: false,
        }
    },
components:{
    Header,
    Part,
    Footer2
},
methods:{
        async init(refreshing){
        const res = await axios.get('https://www.escook.cn/articles',
        {params:{_page:this.page,_limit:this.limit}}
        )
        if(refreshing==false)
        {this.list=[...this.list,...res.data] }
        else
        {this.list=[...res.data,...this.list]} 
        this.loading=false

        if(res.data.length==0){this.finished=true}
        console.log(this.list)       
    },

    onLoad() {
      this.page++      
      this.init()
    },

    onRefresh() {
        this.page++
        this.init();
        this.refreshing=false;

    },

    }
}
</script>

<style lang='less' scoped>

.content{
    margin:46px 0 50px 0
}
</style>