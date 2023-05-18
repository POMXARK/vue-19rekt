<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to PrimeVue example" />
    <hr />
    <DynamicButton />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DynamicButton from './components/DynamicButton.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    DynamicButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
