<template>
  <div class="hello">
    <h1>{{ this.$store.state.app.title }}</h1>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  title: 'Index',
  mounted () {
    setTimeout(() => {
      // 直接触发mutation
      this.$store.commit('CHANGE_TITLE', 'mutation')
      // 触发action
      this.$store.dispatch('changeTitle', 'dispatch')
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './index.less';
</style>
