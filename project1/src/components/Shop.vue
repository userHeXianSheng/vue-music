<template>
  <div id="app">
    <Header></Header>

    <Goods v-for='item in list' :key='item.id' 
    :id='item.id'
    :img='item.goods_img'
    :name='item.goods_name'
    :price='item.goods_price'
    :count="item.goods_count"
    :status="item.goods_state"
    @status_change='newstatus'
    @count_sub='countsub'
    @count_add='countadd'
    ></Goods>
    
    <Footer :isall='stateAll' :total='totalmoney' :count_all="counts" @fullon='getfullon'></Footer>

  </div>
</template>

<script>
import Header from './Header.vue'
import Goods from './Goods.vue'
import Footer from './Footer.vue'
import axios from 'axios'


export default {
  data(){
    return{
      list:[{id:1,goods_img:'',goods_name:'古法倒大袖旗袍2022年新款夏季年轻款少女改良民国风长款',goods_price:189,goods_count:1,goods_state:true},
          {id:2,goods_img:'',goods_name:'suin2021夏季新款文艺复古高腰藏青色a字大摆百褶中长款半身裙女',goods_price:169,goods_count:1,goods_state:true},
          {id:3,goods_img:'',goods_name:'陆小团团2022初恋法式甜美连衣裙小清新气质显瘦复古裙泡泡袖夏季',goods_price:199,goods_count:1,goods_state:false},
          {id:4,goods_img:'',goods_name:'Bloomin吊带裙生日礼服派对气质露背连衣裙',goods_price:89,goods_count:1,goods_state:true},
          {id:5,goods_img:'',goods_name:'2022新款长裙感法式甜美初恋气质收腰泡泡袖白色连衣裙子女夏',goods_price:129,goods_count:1,goods_state:false},
          {id:6,goods_img:'',goods_name:'园系列 重工压褶仙女下凡灯笼袖连衣裙/上衣',goods_price:239,goods_count:1,goods_state:true},]
    }

  },
  components: {
    Header,
    Goods,
    Footer
  },

  created(){
    this.init()
    console.log(this)
    this.$message.warning('接口已失效')
  },
  
  methods:{
    async init(){
      const res = await axios.get('https://www.escook.cn/api/cart')
      if(res.data.status==200){this.list=res.data.list}
      return
    },

    newstatus(e){
      this.list.some(item=>{if(item.id==e.id) {
          item.goods_state=e.status
          return true
        }
      })
    },

    getfullon(e){
        this.list.forEach(item =>item.goods_state=e ) 
    },

    countsub(a){
        this.list.some(item =>{
        if(item.id==a) {
          item.goods_count--
          return }
        })
    },

    countadd(a){
        this.list.some(item =>{
        if(item.id==a) {
          item.goods_count++
          return }
        })
    },
},

  computed:{
    stateAll(){
      return this.list.every(item =>item.goods_state==true)
    },

    totalmoney(){
      return this.list.filter(item =>item.goods_state==true)
      .reduce((s,item)=>{return s += item.goods_count*item.goods_price},0)
    },

    counts(){
      return this.list.filter(item =>item.goods_state==true)
      .reduce((x,item)=>{return x +=item.goods_count},0)
    },
  },
}
</script>

<style lang="less">
#app {
  height:100%;
  width:100%;

}
</style>
