<template>
  <el-container class="app-wrapper">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <AppMenu/>
      </el-aside>
      <el-container>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import AppMenu from '@/components/AppMenu'
export default {
  name: 'AppWrapper',
  components: {
    AppMenu
  }
}
</script>
<style lang="less">
@import './index.less';
</style>
