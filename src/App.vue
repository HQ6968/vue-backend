<template>
  <div id="app">
    <!-- <el-dialog title="收货地址" v-model="dialogShow">
      <div :is="Comp"></div>
    </el-dialog> -->
        <div class="nav">
      <div class="nav-brand">我的后台1423</div> 
      <div class="nav-menu">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          
          <el-submenu index="4">
              <template slot="title">huqi</template>
              <el-menu-item index="2-1">安全退出</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>  

    <div class="menu-left">
       <LeftMenu/>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu'
import Table from '@/components/Table'
import   {loadCategorys}   from '@/store/action'
import { mapActions } from 'vuex'
import co from 'co'

export default {
  created(){
    let _this = this 
    
    //console.log(this.$store.dispatch('loadCategorys1'));

    co(function*(){
       let cats = yield yield _this.loadCategorys1(1) ;
       console.log(cats);
    })
  },

  name: 'app',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        dialogShow:true,
        Comp:Table
      };
    },
    methods: {
      ...mapActions([
        'loadCategorys',
        'loadCategorys1',
      ]),
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      test(){
        this.$notify({title:'sadfasdf' , message:'fffff'})
      }
    },
    components:{
      LeftMenu,
      //MForm
    }
}
</script>

<style>

  html,body { 
    margin:0 ; 
    padding:0 ;
    height: 100%;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .nav{
    height: 60px ;    
    position: fixed;
    right: 0;
    left: 0;
    position: relative;
    z-index: 99;
  }
  .nav-menu{float: right;}
  .nav-brand{float: left;line-height: 60px ; color: white; margin-left: 10px}
  .menu-left{
        position: absolute;
        top: 60px;
        bottom: 0;
        left: 0;
        padding-top: 3px;
        width: 199px;
        z-index: 99;
        overflow: auto;
        background-color: rgba(238,238,238,0.98);
        border-right: 1px solid #e5e5e5;
  }

  .main{
      position: absolute;
      top: 60px;
      right: 0;
      bottom: 0;
      left: 199px;
      overflow: hidden;
      z-index: 1;
      background-color: #fff;
      padding: 20px 10px;
      overflow: scroll;
  }
  
  .menu-left a{color: white ; text-decoration: none;}
</style>
