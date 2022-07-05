<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品添加</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card style="margin-top:16px">
        <el-alert title="添加商品信息" type="info" center show-icon :closable="false"></el-alert>
        <!-- 进度条 -->
        <el-steps :active="activeStep-0" finish-status="success" align-center style="margin-top:16px">
            <el-step title="基本信息"></el-step>
            <el-step title="商品参数"></el-step>
            <el-step title="商品属性"></el-step>
            <el-step title="商品图片"></el-step>
            <el-step title="商品内容"></el-step>
        </el-steps>
        <!-- 标签页 -->
        <el-form ref="addFormRes" v-if="flag" :model="addForm" :rules="addFormRules" label-position="top" label-width="80px" >
        <el-tabs v-model="activeStep" :before-leave="check" tabPosition="left" style="margin-top:16px">
            <el-tab-pane label="基本信息" name="0">
                <el-form-item label="商品名称" prop="name">
                <el-input v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop="price">
                <el-input v-model="addForm.price" type="number" min="0"></el-input>
                </el-form-item>
                <el-form-item label="商品重量" prop="weight">
                <el-input v-model="addForm.weight" type="number" min="0"></el-input>
                </el-form-item>
                <el-form-item label="商品数量" prop="num">
                <el-input v-model="addForm.num"  type="number" min="0"></el-input>
                </el-form-item>
                <el-form-item label="商品分类" :required="true">
                <div class="block">
                <el-cascader v-model="goods_kind" :options="goods_kind_options" :props="{ expandTrigger: 'hover' }" @change="handleGoodsKindChange"></el-cascader>
                </div>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="商品参数" name="1">
                <el-form-item  v-for="item in firstTableData" :key="item.id" :label="item.name">
                    <el-input v-model="item.val"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="商品属性" name="2">
                <el-form-item  v-for="item in secondTableData" :key="item.id" :label="item.name">
                    <el-checkbox-group v-model="item.attr">
                        <el-checkbox v-for="(a,i) in item.attr" :key="i" :label="a" border style="margin-right:6px"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="商品图片" name="3">
                <el-upload action="#" list-type="picture-card" :auto-upload="false" style="margin-top:16px">
                    <i slot="default" class="el-icon-plus"></i>
                    <div v-if="file.url" slot="file" slot-scope="{file}">
                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                    <span class="el-upload-list__item-actions">
                        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                        <i class="el-icon-zoom-in"></i>
                        </span>
                        <span class="el-upload-list__item-delete" @click="handlePictureCardRemove(file)">
                        <i class="el-icon-delete"></i>
                        </span>
                    </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="previewDialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-tab-pane>
            <el-tab-pane label="商品内容" name="4">
                <el-button type="primary" @click="AddGoods">添加商品</el-button>
                <quill-editor v-model="content" style="height:230px;margin-top:16px"></quill-editor>
            </el-tab-pane>
        </el-tabs>
        </el-form>
    </el-card>
  </div>
</template>

<script>
import Bus from './Bus.js'

export default {
    data(){
        return{
            flag:true,
            activeStep:'0',
            addForm:{
                name:'',
                price:'',
                weight:'',
                num:'',
            },
            addFormRules:{
            name: [{ required: true, message: '请输入商品名称', trigger: 'blur' },
                { min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur' }],
            price: [{ required: true, message: '请输入商品价格', trigger: 'blur' },],
            weight: [{ required: true, message: '请输入商品重量', trigger: 'blur' },],
            num: [{ required: true, message: '请输入商品数量', trigger: 'blur' },],
            },
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
            //存放选中分类的商品属性和参数
            firstTableData:[],
            secondTableData:[],
            //图片
            dialogImageUrl: '',
            previewDialogVisible: false,
            ImageList:[],
            //富文本编辑器
            content: '请输入内容',
            
        }
    },
    methods:{
        handleGoodsKindChange(){
        // console.log(this.goods_kind)
            this.firstData()
            this.secondData()
        },
        check(activeName, oldActiveName){
            // console.log(activeName)
            // console.log(oldActiveName)
            if(this.goods_kind.length!=3){
                this.$message.warning("请先选中商品分类")
                return false
            }
        },
        firstData(){
            switch(this.goods_kind[0]){
                case 1: 
                this.firstTableData=[{id:1,name:'整机功耗',val:'45w'},{id:2,name:'屏幕尺寸',val:'1080*1920'},{id:3,name:'系统版本',val:'windows10'}]
                break;
                case 2: 
                this.firstTableData=[{id:1,name:'主体材质',val:'实心红木'},{id:2,name:'家具尺寸',val:'6m*8m'},{id:3,name:'是否组装',val:'是'}]
                break;
                case 3: 
                this.firstTableData=[{id:1,name:'主体材质',val:'棉麻混纺'},{id:2,name:'大小尺码',val:'L'},{id:3,name:'颜色款式',val:'少女粉'}]
                break;
            }
        },
        secondData(){
            switch(this.goods_kind[0]){
                case 1: 
                this.secondTableData=[{id:1,name:'版式',attr:['液晶屏幕星空黑','液晶屏幕炫酷银','液晶屏幕低调灰']},{id:2,name:'屏幕尺寸',attr:['1080*1980','720*1080']}]
                break;
                case 2: 
                this.secondTableData=[{id:1,name:'版式',attr:['可组装木制结构','可折叠合金']},{id:2,name:'材质',attr:['实心红木','卡其杨木','简约白色合成木料']}]
                break;
                case 3: 
                this.secondTableData=[{id:1,name:'版式',attr:['宽松','合体','修身']},{id:2,name:'主体材质',attr:['棉麻混纺','冰丝面料']}]
                break;
            }
        },

        handlePictureCardPreview(file){
            this.dialogImageUrl = file.url;
            this.previewDialogVisible = true;
        },
        handlePictureCardRemove(file){
            file.url=''
        },
        AddGoods(){
            this.$refs.addFormRes.validate((valid) => {
            if (valid) {
                const goods={name:this.addForm.name,price:this.addForm.price,weight:this.addForm.weight}
                Bus.$emit('AddGoods',goods) //传商品信息到商品列表组件
                this.$router.push('/home/goods-list')
                this.$message.success('添加商品成功')
                    this.activeStep='0'
                    this.firstTableData=[]
                    this.secondTableData=[]
                    this.goods_kind=[0,0,0]
                    this.flag=false
                    this.$nextTick(()=>{
                        this.goods_kind=[]
                        this.flag=true
                    })
                    this.$refs.addFormRes.resetFields()
            } 
            else {
            this.$message.error('请完善数据')
                return false;
            }
            });
        }
    }
}
</script>

<style>

</style>