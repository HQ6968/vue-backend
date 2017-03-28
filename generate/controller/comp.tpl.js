module.exports.parse = function (params) {
let id = params.short.id || params.params[1].toLowerCase() ;
let code = `<template>
  <div id="${id}">

  </div>
</template>

<script>
export default {
  name:"${id}",
  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style>

</style>`
return code ;
}