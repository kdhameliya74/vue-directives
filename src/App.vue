<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <h2>Price format</h2>
    <h3 v-price-format="{ locale: 'de-DE', price: '4500', currency: 'EUR' }" />
    <h3 v-price-format="{ price: '4500' }" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      locale: "en-INR",
      currency: "INR",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
