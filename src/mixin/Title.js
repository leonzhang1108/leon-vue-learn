export default {
  mounted () {
    const { title } = this.$options
    document.title = title || 'leon learn vue'
  }
}
