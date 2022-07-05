<template>
  <div class="input">
        <el-input placeholder="请输入任务" size="large" maxlength="20" show-word-limit v-model.trim="task">
        <template slot="prepend">任务</template>
        <el-button slot="append" @click="add">添加</el-button>
  </el-input>
  </div>
</template>

<script>
export default {
data() {
    return {
     task: ''
    }
},
emits:['add'],
methods:{
    add(){
        if(this.task){
            this.$emit('add',this.task)
            this.task=''
        }else
        alert("不能为空")
    }
}
}

</script>

<style lang='less' scoped>
.input{
    width: 800px;
}
</style>