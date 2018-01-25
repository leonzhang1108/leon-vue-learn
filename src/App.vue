<template>
  <Layout class="app-wrapper">
    <Sider hide-trigger>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './styles/theme.less';
html,
body,
.app-wrapper {
  height: 100%;
}
</style>
