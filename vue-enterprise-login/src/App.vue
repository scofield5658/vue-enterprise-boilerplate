<template>
  <div class="wrapper">
    <comp1 />
    <button @click.stop="handleLogin(1)">login 1</button>
    <button @click.stop="handleLogin(2)">login 2</button>
    <comp2 />
  </div>
</template>

<script>
import DemoLib from 'vue-enterprise-lib'
const Comp1 = DemoLib.Comp1
const Comp2 = DemoLib.Comp2
export default {
  name: 'login',
  components: { Comp1, Comp2 },
  methods: {
    handleLogin (type) {
      this.$store.dispatch('setUserInfo', {
        userId: 'test'
      })
      this.$router.replace({ name: `home${type}` })
    }
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
