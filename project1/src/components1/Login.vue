<template>
  <div>
      <el-dialog
      title="用户登录"
      :visible.sync="dialogVisible"
      width="40%"
      >
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
            <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="Ulogin">登录</el-button>
          </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
data() {
      return {
        dialogVisible: true,
        form: {
          name: '',
          password: '',
        }
      }
    },
methods:{
  Ulogin(){
    if(this.form.name=='admin'&&this.form.password=='123456')
    { localStorage.setItem('token','Bearer xxx')
      this.$router.push('/home')
    }else
     {localStorage.removeItem('token')
     alert('wrong')
     }
  }
}
}
</script>

<style>

</style>