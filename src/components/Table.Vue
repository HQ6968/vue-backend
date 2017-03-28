<template>
<div>
  
	<el-form :inline="true"  class="demo-form-inline">
	  <el-form-item label="审批人">
	    <el-input  placeholder="审批人"></el-input>
	  </el-form-item>
	  <el-form-item label="活动区域">
	    <el-select  placeholder="活动区域">
	      <el-option label="区域一" value="shanghai"></el-option>
	      <el-option label="区域二" value="beijing"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" >查询</el-button>
	  </el-form-item>
	</el-form>

	<el-table
      v-loading.body="loading"
      :data="tableData"
      highlight-current-row
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="catid"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="updated_at"
        label="更新时间">
      </el-table-column>

      <el-table-column label="操作">
        <template scope="scope">
     
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
         
        </template>
      </el-table-column>

    </el-table>
    
    <el-pagination
	      layout="prev, pager, next"
	      :total="total"
	      :page-size="pageSize"
	      @current-change="setPageData"
	      >
	</el-pagination>
</div>
</template>

  <script>
  import co from 'co'
    export default {
      mounted(){
      	let _this = this ;	
      	this.setPageData(1) ;
      },
      data() {
        return {
          tableData: [],
          total:0,
          loading:true,
          pageSize:10 ,
          dialigShow:true
        }
      },
      methods:{
      	pageChange(index){
      		this.setPageData(index) ;
      	},
      	setPageData(page){
      		var _this = this ;
      		co(function* (){
	      		let res =  yield _this.$http.get('/open-php-api/cms/contents?per-page=10&page='+page) ;
	      		_this.loading = false ;
	      		_this.tableData = res.data.items ;
	      		_this.total = res.data._meta.totalCount ;
	      		_this.pageSize = res.data._meta.perPage ;
	      	})		
      	},
        handleEdit(){},
        handleDelete(){},
      }
    }
  </script>


