<template>
  <AppWrapper>
    <router-view/>
  </AppWrapper>
</template>

<script>
import AppWrapper from '@/components/AppWrapper'

export default {
  name: 'App',
  components: {
    AppWrapper
  }
}
</script>

<style lang="less">
@import './styles/theme.less';
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
