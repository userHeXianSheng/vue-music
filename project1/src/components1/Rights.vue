<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button @click="userAdd" type="primary" style="margin-top:16px">添加角色</el-button>
    <el-card class="box-card">
      <el-table
        :data="rolelist"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" class="demo-table-expand">
                <el-row style="border-bottom:1px solid">
                <el-col :span="6" :offset="4">
                    <div class="grid-content bg-purple-dark">
                        <el-tag closable v-if="props.row.right[0]" @close="tagClose(props.row.id,0)">用户及权限管理</el-tag>
                    </div>
                </el-col>
                <el-col :span="14">
                  <div class="grid-content bg-purple-dark">
                      <el-tag type="success" closable v-if="props.row.right[3]" @close="tagClose(props.row.id,3)">用户增删</el-tag>
                      <el-tag type="success" closable v-if="props.row.right[4]" @close="tagClose(props.row.id,4)">权限增删</el-tag>
                      <el-tag type="success" closable v-if="props.row.right[5]" @close="tagClose(props.row.id,5)">角色增删</el-tag>
                  </div>
                </el-col>

                </el-row>
                <el-row style="border-bottom:1px solid">
                <el-col :span="6" :offset="4">
                    <div class="grid-content bg-purple-dark">
                        <el-tag closable v-if="props.row.right[1]" @close="tagClose(props.row.id,1)">商品管理</el-tag>
                    </div>
                </el-col>
                <el-col :span="14">
                  <div class="grid-content bg-purple-dark">
                      <el-tag type="success" closable v-if="props.row.right[6]" @close="tagClose(props.row.id,6)" >商品增删</el-tag>
                  </div>
                </el-col>
                </el-row>

                <el-row style="border-bottom:1px solid">
                <el-col :span="6" :offset="4">
                    <div class="grid-content bg-purple-dark">
                        <el-tag closable v-if="props.row.right[2]" @close="tagClose(props.row.id,2)">订单管理</el-tag>
                    </div>
                </el-col>
                <el-col :span="14">
                  <div class="grid-content bg-purple-dark">
                      <el-tag closable type="success" v-if="props.row.right[7]" @close="tagClose(props.row.id,7)">订单增删</el-tag>
                      <el-tag closable type="success" v-if="props.row.right[8]" @close="tagClose(props.row.id,8)">订单下载</el-tag>
                  </div>
                </el-col>
                </el-row>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="id"
          prop="id">
        </el-table-column>
        <el-table-column
          label="角色"
          prop="role">
        </el-table-column>
        <el-table-column
          label="角色描述"
          prop="title">
        </el-table-column>
          <el-table-column label="操作">
            <template v-slot="{row}">
              <div>
                <el-button  type="primary" icon="el-icon-edit" size="mini" @click="edit(row.id)"></el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(row.id)"></el-button>
                <el-button type="warning" icon="el-icon-s-help" size="mini" @click="rightsChange(row.id)"></el-button>
              </div>
            </template>
          </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加角色对话框 -->
    <el-dialog @close="userAddDialogClose" title="添加角色" :visible.sync="userAddDialog" width="60%">
        角色名称:<el-input v-model="roleName" placeholder="请输入角色名称" ></el-input>
        角色描述:<el-input v-model="roleDes" placeholder="请输入角色描述" ></el-input>
        <span slot="footer" class="dialog-footer">
        <el-button @click="userAddDialogClose" style="margin-top:16px">取 消</el-button>
        <el-button type="primary" @click="addRole">确 定</el-button>
        </span>
    </el-dialog>
    <!-- 编辑角色对话框 -->
    <el-dialog @close="userEditDialogClose" title="修改角色" :visible.sync="userEditDialog" width="50%">
        角色名称:<el-input v-model="roleName" placeholder="请输入角色名称"></el-input>
        角色描述:<el-input v-model="roleDes" placeholder="请输入角色描述"></el-input>
        <span slot="footer" class="dialog-footer">
        <el-button @click="userEditDialogClose" style="margin-top:20px">取 消</el-button>
        <el-button type="primary" @click="editRole">确 定</el-button>
        </span>
    </el-dialog>
    <!-- 权限管理对话框 -->
    <el-dialog v-if="rightsDialog" title="权限管理" :visible.sync="rightsDialog" width="30%">
        <!-- 权限列表 -->
        <el-tree :data="rights" :default-checked-keys="defrights" :props="defaultProps" node-key="id"
                  ref="rightsTree" highlight-current show-checkbox  default-expand-all>
        </el-tree>
        <span slot="footer" class="dialog-footer">
          <el-button @click="rightsDialog=false">取 消</el-button>
          <el-button type="primary" @click="rightsSet">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data() {
      return {
          rolelist:[
              {id:1,role:'超级管理员',title:'管理各种权限',right:[1,1,1,1,1,1,1,1,1]},
              {id:2,role:'运维',title:'运营维护',right:[0,1,1,0,0,0,1,1,1]},
              {id:3,role:'测试',title:'测试功能',right:[1,0,1,1,1,1,0,1,1]},
              {id:4,role:'开发',title:'开发功能',right:[1,1,0,1,1,1,1,0,0]},
              {id:5,role:'设计',title:'设计功能',right:[1,0,0,1,1,1,0,0,0]},
              {id:6,role:'分析',title:'分析系统需求',right:[0,1,0,0,0,0,1,0,0]},
          ],
          nextId:7,
          userAddDialog:false,  //控制角色添加对话框
          roleName:'',
          roleDes:'',
          userEditDialog:false,  //控制角色edit对话框
          rightsDialog: false, //控制权限管理对话框
          roleId:'',
          rights: [{
          id: 1,
          label: '用户及权限管理',
          children: [{
            id: 4,
            label: '用户增删',
            },
            {id: 5,
            label: '权限增删',
            },
            {
            id: 6,
            label: '角色增删'
          },
            ]
        }, {
          id: 2,
          label: '商品管理',
          children: [{
            id: 7,
            label: '商品增删'
          }]
        }, {
          id: 3,
          label: '订单管理',
          children: [{
            id: 8,
            label: '订单增删'
          }, {
            id: 9,
            label: '订单下载'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        defrights:[], //默认选中的权限
      };
    },
    methods:{
      tagClose(id,index){
        this.rolelist[id-1].right[index]=0
        if(index<3){
        switch(index){
        case 0: 
          this.rolelist[id-1].right[3]=0
          this.rolelist[id-1].right[4]=0
          this.rolelist[id-1].right[5]=0
          break;
        case 1: 
          this.rolelist[id-1].right[6]=0
          break;
        case 2: 
          this.rolelist[id-1].right[7]=0
          this.rolelist[id-1].right[8]=0
          break;
        }
        return
        }
      },
      //角色编辑
      edit(id){
        this.roleId=id
        this.roleName=this.rolelist[id-1].role
        this.roleDes=this.rolelist[id-1].title
        this.userEditDialog=true
      },
      userEditDialogClose(){
        this.userEditDialog=false
      },
      editRole(){
        this.userEditDialog=false
        this.rolelist[this.roleId-1].role=this.roleName
        this.rolelist[this.roleId-1].title=this.roleDes
        this.$message.success("角色编辑成功")
      },
      //角色删除
      del(Id){
        this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
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
      //角色添加
      userAdd(){
        this.roleName=''
        this.roleDes=''
        this.userAddDialog=true
      },
      userAddDialogClose(){
        this.roleName=''
        this.roleDes=''
        this.userAddDialog=false
      },
      addRole(){
        this.userAddDialog=false
        this.rolelist.push({id:this.nextId,role:this.roleName,title:this.roleDes,right:[0,0,0,0,0,0,0,0,0]})
        this.nextId++
        this.$message.success("角色添加成功")
      },
      //权限管理
      rightsChange(id){
        this.roleId=id
        let n=0
        this.defrights=[]
        //console.log(this.defrights)
        for (let i=1;i<10;i++){
          if (this.rolelist[id-1].right[i-1]==1)
              {this.defrights[n]=i
                n++}
        }
        console.log(this.defrights)
        this.rightsDialog=true
      },
      // rightsDialogClose(){
      //   // this.defrights=[]  
      //   // console.log(this.defrights)
      //   this.rightsDialog=false
      // },
      rightsSet(){
        var B=[1,2,3,4,5,6,7,8,9]
        let A =this.$refs.rightsTree.getCheckedKeys()
        for(let x=0;x<A.length;x++){
          B.splice(B.indexOf(A[x]),1)
        }
        for(let i=0;i<A.length;i++){
        this.rolelist[this.roleId-1].right[A[i]-1]=1
        }
        for(let i=0;i<B.length;i++){
        this.rolelist[this.roleId-1].right[B[i]-1]=0
        }
        this.$message.success("修改成功")
        console.log(A,B,this.rolelist[this.roleId-1].right)
        this.rightsDialog=false     
      }
    },
}
</script>

<style lang='less' scoped>

</style>