<template>
  <div class="nav">
    <header>
        <h2>Nav</h2>
    </header>
    <main class="col-md-4">
        <ul >
        <li ><router-link to="/todolist">to-do-list</router-link></li>
        <li ><router-link to="/shop">shop</router-link></li>
        <li ><router-link to="/top">top</router-link></li>
        <li ><router-link to="/home" style="color:red">后台管理界面</router-link></li>
        </ul> 
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
  margin-top: 80px;
  padding: 0;
  width: 200px;
  background-color: #c9c9c9;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  border-bottom: 1px solid #5a5a5a ;
  text-decoration: none;
  font-size: 20px;
}

/* 鼠标悬停时改变链接颜色 */
li a:hover {
  background-color: #555;
  color: white;
}
</style>