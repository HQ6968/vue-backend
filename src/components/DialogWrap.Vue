<template>
  <el-dialog title="收货地址" v-model="dialogTableVisible">
  	<Comp/>
  </el-dialog>
</template>

<script>
import Form from 'Form'
export default {
  name:"dialogwrap",
  data () {
    return {
    	Comp:Form
    }
  },

  methods: {

  }
}
</script>

<style>

</style>