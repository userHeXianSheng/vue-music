<template>
  <div>
    <ul class="list-group">    
        <li v-for="item in list" :key="item.id"  class="list-group-item d-flex justify-content-between align-items-center">
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" :id="item.id" v-model="item.done">
                <label class="form-check-label" :class="item.done? 'delete' : '' " :for="item.id">{{item.task}}</label>
            </div>

            <div>
                <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
                <span class="badge badge-warning badge-pill" v-else>未完成</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
data(){
    return{
        
    }
},
props:{
    list:{
        type:Array,
        require:true,
        default:[]
    }
}
}
</script>

<style lang="less" scoped>
.list-group{
    width: 800px;
}
.delete{
    color: grey;
    text-decoration: line-through;
    font-style: italic;
}
</style>