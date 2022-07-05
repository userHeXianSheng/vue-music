<template>
  <div>
    <!-- 搜索框 -->
    <el-input style="width: 60%;margin-bottom:10px;" placeholder="请输入用户名" clearable @clear="clearSearch" v-model="input1"></el-input>
     <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    <el-button type="primary" style="margin-top:10px" @click='dialogVisible=true'>添加用户</el-button>
    <!-- 用户列表 -->
    <el-table :data="searchlist" stripe border >
      <el-table-column prop="id" label="id" ></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="phone" label="phone"></el-table-column>
      <el-table-column prop="role" label="role"></el-table-column>
      <el-table-column label="state" >
        <template slot-scope="scope">
        <el-switch
          v-model="scope.row.state"
          active-color="#13ce66">
        </el-switch>
      </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="{row}">
          <div>
            <el-button  type="primary" icon="el-icon-edit" size="mini" @click='editUser(row.id)'></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="Delete(row.id)"></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[ 2, 3]"
        :page-size="3"
        layout="total, sizes, prev, pager, next, jumper"
        :total="6">
      </el-pagination>
    </div> -->
    <!-- 编辑用户表单 -->
    <el-dialog title="编辑用户" :visible.sync="EditVisible" width="40%">
        <el-form ref="Editform" :model="Editform" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="name">
            <el-input v-model.trim="Editform.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
            <el-input v-model.trim="Editform.phone"></el-input>
            </el-form-item>
            <el-form-item label="角色" prop="role">
              <el-select v-model="Editform.role" placeholder="请选择角色">
                <el-option label="超级管理员" value="超级管理员"></el-option>
                <el-option label="运维测试" value="运维测试"></el-option>
                <el-option label="普通用户" value="普通用户"></el-option>
              </el-select>
            </el-form-item>
        </el-form>    
        <span slot="footer" class="dialog-footer">
            <el-button @click ='unedit'>取 消</el-button>
            <el-button type="primary" @click="edit">确 定</el-button>
        </span>
    </el-dialog>
    <!-- 添加用户表单 -->
    <el-dialog title="添加新用户" :visible.sync="dialogVisible" :show-close="false" width="40%">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="name">
            <el-input v-model.trim="form.name"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
            <el-input v-model.trim="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="角色" prop="role">
              <el-select v-model="form.role" placeholder="请选择角色">
                <el-option label="超级管理员" value="超级管理员"></el-option>
                <el-option label="运维测试" value="运维测试"></el-option>
                <el-option label="普通用户" value="普通用户"></el-option>
              </el-select>
            </el-form-item>
        </el-form>    
        <span slot="footer" class="dialog-footer">
            <el-button @click ='uodo'>取 消</el-button>
            <el-button type="primary" @click="add">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
data(){
    var validatePass = (rule, value, callback) => {
        if (value.length < 4) {
          callback(new Error('short'));
        } else if (value.length >11 ) {
          callback(new Error('long'));
        } else {
          callback();
        }
      };

    return{
      //搜索框输入
        input1:'',
        //存储查询结果
        searchlist:[
        {id:1,name:'zhang',phone:'180333',role:'超级管理员',state:true},
        {id:2,name:'he',phone:'160222',role:'普通用户',state:false},
        {id:3,name:'wang',phone:'197211',role:'测试运维',state:true},
        {id:4,name:'ming',phone:'187366',role:'普通用户',state:false},
        {id:5,name:'yang',phone:'186666',role:'测试运维',state:true},
        {id:6,name:'jun',phone:'155558',role:'普通用户',state:true}],
         ulist:[
        {id:1,name:'zhang',phone:'180333',role:'超级管理员',state:true},
        {id:2,name:'he',phone:'160222',role:'普通用户',state:false},
        {id:3,name:'wang',phone:'197211',role:'测试运维',state:true},
        {id:4,name:'ming',phone:'187366',role:'普通用户',state:false},
        {id:5,name:'yang',phone:'186666',role:'测试运维',state:true},
        {id:6,name:'jun',phone:'155558',role:'普通用户',state:true}],
        //currentPage: 1,
         //对话框是否可见
         EditVisible:false,
         dialogVisible: false,
         //表单数据
         Editform:{},
         form: {
          name: '',
          phone: '',
          role: '',
        },
         rules: {
          name: [
            { required: true, message: '请输入用户姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入电话', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          role: [
            { required: true,trigger: 'blur' }
          ],
         }

    }
},
created(){
    //this.init()
},
methods:{
  //   /*
  //   async init(){
  //       const {data: res} = await this.$http.get('/api/users')
  //       if (res.status !==0) return console.log('用户数据请求失败')
  //       this.ulist = res.data
  //   }
  //   */
   search(){
    var r =new RegExp(this.input1 +'[a-z]*[0-9]*');
     this.searchlist= this.ulist.filter(item => item.name.search(r)!=-1)
    //  console.log(r,this.searchlist)
   },
   clearSearch(){
    this.search()
   },
   editUser(id){
     this.EditVisible=true
     this.Editform = this.ulist.find(item => item.id==id)
     console.log(this.Editform)
   },
   uodo(){
       this.$refs.form.resetFields()
       this.dialogVisible = false
   },
   unedit(){
      this.$refs.Editform.resetFields()
      this.EditVisible = false
   },
   edit(){
       this.$refs.Editform.validate((valid)=>{
           if(valid==true){
               this.ulist[this.Editform.id-1]={id:this.Editform.id,
                                name:this.Editform.name,
                                phone:this.Editform.phone,
                                role:this.Editform.role,
                                state:this.Editform.state}              
              console.log(this.ulist)
               this.unedit()
               this.$message.success('编辑成功,更新失败');
               }
            else  return
       })     
   },
   add(){
       console.log(this.form)
       this.$refs.form.validate((valid)=>{
           if(valid==true){
               this.ulist.push({id:this.ulist.length+1,
                                name:this.form.name,
                                phone:this.form.phone,
                                role:this.form.role,
                                state:true});
               this.uodo()
               this.$message.success('添加成功');
               }
            else  return
       })
   },
   Delete(id){
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const i = this.ulist.findIndex(item =>item.id==id)
          this.ulist.splice(i,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });     
  }
}
}
</script>

<style>

</style>