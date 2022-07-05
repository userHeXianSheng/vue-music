<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    <el-breadcrumb-item>商品参数管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card style="margin-top:16px">
        <el-alert title="注意：只允许为三级分类设置相关参数!" type="warning"></el-alert>
        <!-- 级联选择器 -->
        <div class="block" style="margin-top:16px">
        <span>请选择商品分类： </span>
        <el-cascader v-model="goods_kind" :options="goods_kind_options" :props="{ expandTrigger: 'hover' }" @change="handleGoodsKindChange"></el-cascader>
        </div>
        <!-- 属性标签页 -->
        <el-tabs style="margin-top:16px" v-model="activeTag" @tab-click="handleTagClick">
            <el-tab-pane label="动态参数" name="first">
                <el-button type="primary" :disabled="goods_kind.length!==3" @click="addAttrDialogVisible = true">添加参数</el-button>
                    <el-table :data="firstTableData" style="width: 100%;margin-top:16px" stripe border highlight-current-row>
                        <el-table-column type="index" label="#"></el-table-column>
                        <el-table-column prop="name" label="参数名称" width="600"> </el-table-column>
                        <el-table-column label="操作">
                                <template v-slot="{row}">
                                    <el-button  type="primary" icon="el-icon-edit" size="mini" @click="edit(row.id)">编辑</el-button>
                                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(row.id)">删除</el-button>
                                </template>
                        </el-table-column>
                    </el-table>
            </el-tab-pane>
            <el-tab-pane label="静态属性" name="second">
                <el-button type="primary" :disabled="goods_kind.length!==3" @click="addAttrDialogVisible = true">添加属性</el-button>
                    <el-table :data="secondTableData" style="width: 100%;margin-top:16px" stripe border highlight-current-row>
                        <el-table-column type="index" label="#"></el-table-column>
                        <el-table-column prop="name" label="参数名称" width="600"> </el-table-column>
                        <el-table-column label="操作">
                                <template v-slot="{row}">
                                    <el-button  type="primary" icon="el-icon-edit" size="mini" @click="edit(row.id)">编辑</el-button>
                                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(row.id)">删除</el-button>
                                </template>
                        </el-table-column>
                    </el-table>
            </el-tab-pane>
        </el-tabs>
    </el-card>
    <!-- 添加参数/属性对话框 -->
    <el-dialog title="添加参数/属性" :visible.sync="addAttrDialogVisible" width="50%">
    参数名称: <el-input v-model="input1" placeholder="请编辑参数/属性名称" style="width:80%"></el-input>
    <span slot="footer" class="dialog-footer">
        <el-button @click="addAttrDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAttrDialog">确 定</el-button>
    </span>
    </el-dialog>
    <!-- 编辑参数/属性对话框 -->
    <el-dialog title="编辑参数/属性" :visible.sync="editAttrDialogVisible" width="50%">
    参数名称: <el-input v-model="input1" placeholder="请编辑参数/属性名称" style="width:80%"></el-input>
    <span slot="footer" class="dialog-footer">
        <el-button @click="editAttrDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editAttrDialog">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            goods_kind:[],
            goods_kind_options:[
                    {
                value: 1,
                label: '家电',
                children: [{
                    value: 1,
                    label: '电视',
                    children: [{
                    value: 1,
                    label: '曲面电视'
                    }, {
                    value: 2,
                    label: '液晶电视'
                    }, {
                    value: 3,
                    label: '投影电视'
                    }]
                }, {
                    value: 2,
                    label: '电脑',
                    children: [{
                    value: 1,
                    label: '笔记本'
                    }, {
                    value: 2,
                    label: '台式机'
                    }]
                }]
                }, 
                {
                value: 2,
                label: '家具',
                children: [{
                    value: 1,
                    label: '床',
                    children: [{
                    value: 1,
                    label: '平板床'
                    }, {
                    value: 2,
                    label: '折叠床'
                    }]
                }, {
                    value: 2,
                    label: '书桌',
                    children: [{
                    value: 1,
                    label: '木制书桌'
                    }, {
                    value: 2,
                    label: '合金书桌'
                    }]
                }]
                }, 
                {
                value: 3,
                label: '衣服',
                children: [{
                    value: 1,
                    label: '上衣',
                    children: [{
                    value: 1,
                    label: 'T恤'
                    }, {
                    value: 2,
                    label: '衬衫'
                    }, {
                    value: 3,
                    label: '卫衣'
                    }]
                }, {
                    value: 2,
                    label: '下装',
                    children: [{
                    value: 1,
                    label: '牛仔裤'
                    }, {
                    value: 2,
                    label: '棉裤'
                    }]
                }]
                }, 
            ],
            activeTag:'first',
            firstTableData:[],
            secondTableData:[],
            addAttrDialogVisible:false,
            editAttrDialogVisible:false,
            attrId:'',
            input1:''
        }
    },
    created(){

    },
    methods:{
        handleGoodsKindChange(){
            console.log(this.goods_kind)
            this.firstData()
            this.secondData()
        },
        handleTagClick(){

        },
        firstData(){
            switch(this.goods_kind[0]){
                case 1: 
                this.firstTableData=[{id:1,name:'主体-商品名称'},{id:2,name:'整机功耗'},{id:3,name:'屏幕尺寸'},{id:4,name:'系统版本'}]
                break;
                case 2: 
                this.firstTableData=[{id:1,name:'主体-商品名称'},{id:2,name:'主体材质'},{id:3,name:'家具尺寸'},{id:4,name:'是否组装'}]
                break;
                case 3: 
                this.firstTableData=[{id:1,name:'主体-商品名称'},{id:2,name:'主体材质'},{id:3,name:'大小尺码'},{id:4,name:'颜色款式'}]
                break;
            }
        },
        secondData(){
            switch(this.goods_kind[0]){
                case 1: 
                this.secondTableData=[{id:1,name:'版式'},{id:2,name:'颜色'},{id:3,name:'屏幕尺寸'}]
                break;
                case 2: 
                this.secondTableData=[{id:1,name:'版式'},{id:2,name:'材质'}]
                break;
                case 3: 
                this.secondTableData=[{id:1,name:'版式'},{id:2,name:'主体材质'},{id:3,name:'大小尺码'}]
                break;
            }
        },
        edit(id){
            this.attrId=id
            this.activeTag=='first'? 
            this.input1=this.firstTableData[id-1].name
            :this.input1=this.secondTableData[id-1].name
            this.editAttrDialogVisible=true
        },
      //角色删除
        del(Id){
            this.$confirm('此操作将删除该参数/属性, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'error',
                message: '您没有权限!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        addAttrDialog(){
            this.addAttrDialogVisible=false
            this.activeTag=='first'? 
            this.firstTableData.push({id:this.firstTableData.length+1,name:this.input1})
            : this.secondTableData.push({id:this.secondTableData.length+1,name:this.input1})
            this.input1=''
            this.$message.success("添加参数成功")
        },
        editAttrDialog(){
            this.editAttrDialogVisible=false
            this.activeTag=='first'? 
            this.firstTableData[this.attrId-1].name=this.input1
            : this.secondTableData[this.attrId-1].name=this.input1
            this.input1=''
            this.$message.success("编辑参数成功")
        }
    },
    computed:{

    }

}
</script>

<style>

</style>