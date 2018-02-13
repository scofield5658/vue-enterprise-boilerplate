<template>
  <div class="wrapper">
    <div>Home1</div>
    <div>{{ userId }}</div>
  </div>
</template>

<script>
import dependencies from 'vue-enterprise-dependency-finogeeks'
const vuex = dependencies.vuex.default
const { mapState } = vuex
export default {
  name: 'home1',
  computed: {
    ...mapState({
      userId: state => state.home.userId
    }),
  }
}
</script>

<style>
.wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
