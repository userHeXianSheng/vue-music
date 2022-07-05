<template>
  <div>
      <h1>to-do list</h1>
      <Input @add="addOne"> </Input>
      <AList :list="activeList"> </AList>
      <Button :activeNum="activeNum" @button="active"></Button>                
        
  </div>
</template>

<script>
import Input from './todo-input.vue'
import AList from './todo-list.vue'
import Button from './todo-button.vue'

export default {
components:{
    Input,
    AList,
    Button
},

data(){
    return{
        todolist:[
            {id:1,task:'周一吃饭',done:false},
            {id:2,task:'周er睡觉',done:true},
            {id:3,task:'周san打豆豆',done:false},
            {id:4,task:'周si学习',done:true},
            {id:5,task:'周wu嗨起来',done:false}

        ],
        //控制button按钮的激活状态
        activeNum:0
    }
},
methods:{
    addOne(x){
        //console.log(this.todolist)
        this.todolist.push({id:this.todolist.length+1,task:x,done:false})
    },
    active(x){
        this.activeNum=x
        this.todolist.filter(item => item.done==true)
    }
},
//通过计算属性返回过滤的激活的数据项 
computed:{
    activeList(){
        if(this.activeNum==1){return this.todolist.filter(item => item.done==true)}
        else if(this.activeNum==2){return this.todolist.filter(item => item.done==false)}
        else return this.todolist
    }
}
}
</script>

<style lang='less' scoped>

</style>