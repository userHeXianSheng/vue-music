<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card style="margin-top:16px">
        <el-button type="primary" @click="addGoods">添加商品</el-button>
        <!-- 列表 -->
        <el-table :data="GoodsData" style="width: 100%;margin-top:16px" stripe border highlight-current-row>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column prop="name" label="商品名称" width="500"> </el-table-column>
            <el-table-column prop="price" label="商品价格" width="80"> </el-table-column>
            <el-table-column prop="weight" label="商品重量" width="80"> </el-table-column>
            <el-table-column label="操作">
                    <template v-slot="{row}">
                        <el-button  type="primary" icon="el-icon-edit" size="mini" @click="edit(row.id)">编辑</el-button>
                        <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(row.id)">删除</el-button>
                    </template>
            </el-table-column>`
        </el-table>
    </el-card>
    <!-- 编辑商品对话框 -->
    <el-dialog title="编辑商品" :visible.sync="editGoodsDialogVisible" width="60%">
        <el-form ref="goodsForm" :model="GoodsInfo" label-width="80px">
            <el-form-item label="商品名称">
                <el-input v-model="GoodsInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input v-model="GoodsInfo.price"></el-input>
            </el-form-item>
            <el-form-item label="商品重量">
                <el-input v-model="GoodsInfo.weight"></el-input>
            </el-form-item>
        </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button @click="editGoodsDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editGoods">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
import Bus from './Bus.js'
export default {
    data(){
        return{
            GoodsData:[
                {id:1,name:'小天鹅(LittleSwan)波轮洗衣机全自动 10KG大容量波轮 以旧换新 健康除螨洗 免清洗 不锈钢内桶TB100VC123B',price:'1999',weight:'24kg'},
                {id:2,name:'草原宏宝 国产原切 内蒙羔羊肉串 净重500g/袋(4瘦1肥,20串) 冷冻 BBQ烧烤 地标认证',price:'200',weight:'2kg'},
                {id:3,name:'惠普（HP）DJ 4825彩色无线喷墨一体机 大印量低成本学生打印微信打印（打印 复印 扫描）2720/2775升级款',price:'633',weight:'10kg'},
                {id:4,name:'长虹 CHANGHONG 12升家用智能恒温燃气热水器触摸屏定时低水压启动6重安防 恒温天然气热水器 机械防冻 12H2',price:'1322',weight:'8kg'},
                {id:5,name:'索尼（SONY）KD-65X80K 65英寸 全面屏 4K超高清HDR 安卓智能电视 X1芯片 特丽魅彩Pro X80J升级款',price:'4300',weight:'10kg'},
                {id:6,name:'美的(Midea) 1.5匹空调风尊时尚版新一级变频冷暖壁挂式空调挂机大风口 智能家电以旧换新KFR-35GW/N8MXC1',price:'2999',weight:'8kg'},
                {id:7,name:'致典 北欧实木床双人床1.8米 原木 北美进口黑胡桃木床 现代简约实木环保卧室家具实木床原木家具 1.8米实木床 FAS级北美黑胡桃木原木',price:'1666',weight:'12kg'},
                {id:8,name:'拜格 炒锅铁锅32CM 无涂层精铁炒锅锅具平底电磁炉燃气灶通用 BG1432',price:'444',weight:'2kg'},
                {id:9,name:'vivo iQOO Neo5 SE 8GB+128GB 岩晶白 骁龙870 144Hz竞速屏 55W闪充 双模5G全网通手机 iqooneo5se',price:'2333',weight:'400g'},
            ],
            editGoodsDialogVisible:false,
            //要编辑的商品信息
            goodsId:'',
            GoodsInfo:{
                name:'',
                price:'',
                weight:'',
            },
        }
    },
    created(){
        Bus.$on('AddGoods',val =>{this.GoodsData.push({id:this.GoodsData.length+1,...val})})
        console.log(this.GoodsData)
    },
    methods:{
        addGoods(){
            this.$router.push('/home/goods-add')
        },
        edit(id){
            this.goodsId=id
            this.GoodsInfo.name=this.GoodsData[id-1].name
            this.GoodsInfo.price=this.GoodsData[id-1].price
            this.GoodsInfo.weight=this.GoodsData[id-1].weight
            this.editGoodsDialogVisible=true
        },
        editGoods(){
            this.editGoodsDialogVisible=false
            this.GoodsData[this.goodsId-1].name=this.GoodsInfo.name
            this.GoodsData[this.goodsId-1].price=this.GoodsInfo.price
            this.GoodsData[this.goodsId-1].weight=this.GoodsInfo.weight
            this.$message.success('编辑成功')
        },
        del(id){
            this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
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
    },
}
</script>

<style>

</style>