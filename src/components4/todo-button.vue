<template>
  <div class="button">
        <el-row>
        <el-button :type="activeNum===0 ? 'primary' : ''" @click="active(0)">全部</el-button>
        <el-button :type="activeNum===1 ? 'success' : ''" round @click="active(1)">已完成</el-button>
        <el-button :type="activeNum===2 ? 'warning' : ''" round @click="active(2)">未完成</el-button>
        </el-row>
  </div>
</template>

<script>
export default {
props:{
    activeNum:{
        type:Number,
        require:true,
        default:0
    }
},
emits:['button'],
methods:{
active(index){
    if(this.activeNum==index) return
    this.$emit('button',index)
}

}
}
</script>

<style lang="less" scoped>
.button{
    margin-top: 20px;
}
</style>