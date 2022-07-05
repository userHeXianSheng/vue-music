<template>
  <div id="footer">
    <van-submit-bar :price="total*100" button-text="提交订单">
    <input type="checkbox" :checked='isall' @change='all_state_change'>全选
    </van-submit-bar>
  </div>
</template>

<script>
export default {
    props:{
        isall:{
            default:'true',
            type:Boolean
        },

        total:{
            default: '0',
            type:Number
        },

        count_all:{
            default:'0',
            type:Number
        }
    },

    methods:{
        all_state_change(e){
            this.$emit('fullon',e.target.checked)
        }
    }

}
</script>

<style lang='less' scoped>

</style>