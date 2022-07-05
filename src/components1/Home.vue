<template>
<el-container>
  <el-header>
    <span>后台管理界面</span>
      <el-button type="info" size="mini" style="float:right;" @click="logout">退出登录</el-button>
  </el-header>
  <el-container>
    <el-aside style="width:200px">
        <el-row class="tac">
        <el-col>
          <el-menu default-active="1">
            <el-menu-item index="1">
              <i class="el-icon-user"></i>
              <router-link to='/home/user'>用 户 管 理 </router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-s-check"></i>
              <router-link to='/home/rights'>权 限 管 理 </router-link>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-goods"></i> 商 品 管 理 </template>
              <el-menu-item index="3-1"><router-link to='/home/goods-attr'>商品参数管理 </router-link></el-menu-item>
              <el-menu-item index="3-2"><router-link to='/home/goods-list'>商品列表 </router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-s-order"></i>
              <router-link to='/home/goods-order'>订 单 管 理 </router-link>
            </el-menu-item>
            <el-menu-item index="">
              <i class="el-icon-setting"></i>
              <router-link to='/home/setting'>系 统 设 置 </router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
        </el-row>
        <!-- <ul class="list-group list-group-flush">
            <li class="list-group-item"><router-link to='/home/user'>用 户 管 理 </router-link></li>
            <li class="list-group-item"><router-link to='/home/rights'>权 限 管 理 </router-link></li>
            <li class="list-group-item"><router-link to='/home/goods'>商 品 管 理 </router-link></li>
            <li class="list-group-item"><router-link to='/home/d'>订 单 管 理 </router-link></li>
            <li class="list-group-item"><router-link to='/home/e'>系 统 设 置 </router-link></li>
        </ul> -->
    </el-aside>
    <el-main>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
data(){
    return {
      
    }
},
methods:{
    logout(){
        localStorage.removeItem('token')
        this.$router.push('/login')
    },
},
}
</script>

<style lang='less' scoped >
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font:40px bold;
  }
    .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
    .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

</style>