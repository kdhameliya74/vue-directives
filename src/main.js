import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("price-format", {
  bind: (el, binding, vNode) => {
    if (binding.value && Object.keys(binding.value).length > 0) {
      const format = new Intl.NumberFormat(binding.value.locale || "en-IN", {
        style: "currency",
        currency: binding.value.currency || "INR"
      }).format(parseFloat(binding.value.price));
      el.innerHTML = format;
    } else {
      el.innerHTML = "";
    }
  }
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
