<template>
    <el-menu theme="dark"  default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="3"><i class="el-icon-menu"></i><router-link to="/table">表格</router-link></el-menu-item>
      <el-menu-item index="4"><i class="el-icon-menu"></i><router-link to="/form">Form</router-link></el-menu-item>

      <el-menu-item index="5"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name:"leftmenu",
  data () {
    return {

    }
  },

  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>

</style>