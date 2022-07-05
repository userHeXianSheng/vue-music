<template>
  <div id='Goods'>
          <div id="Goods_info">
                <van-card
                :num="count"
                :price="price"
                :title="name"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                >
                <template #tags>
                    <van-tag plain type="danger" v-if=" price < 160 ">超低价</van-tag>
                    <van-tag plain type="danger" v-else>新款</van-tag>
                </template>
                <template #footer>
                    <input type="checkbox" style="float:left;margin-left:36px" :checked='status' @change='status_change'>
                    <van-button size="mini" @click='sub'>-</van-button>
                    <van-button size="mini" @click='add'>+</van-button>
                </template>
                </van-card>
          </div>
      </div>
    
</template>

<script>
export default {
    methods:{
        status_change(e){
            const a ={id:this.id,status:e.target.checked}
            this.$emit('status_change',a)
        },

        sub(){
            if(this.count==1) return
            this.$emit('count_sub',this.id)
        },

        add(){
            this.$emit('count_add',this.id)
        }

    },

    props:{
        id:{
            require:true,
            type:Number
        },
        img:{
            default:'',
            type: String
        },
        name:{
            default:'',
            type: String
        },
        price:{
            default:'',
            type: Number
        },
        count:{
            default:'1',
            type: Number            
        },
        status:{
            default:'true',
            type:Boolean
        },

    }

}
</script>

<style lang='less' scoped>
#Goods{
    width:100%;
    border: 2px solid gray;
    text-align:center;
}

</style>