import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";

let gid = "G-9BG0XNLQHR";
if (window.location.pathname.includes("touch_wood")) {
  console.log(window.location.pathname);
  gid = "G-D530PNCFKC";
}
console.log(gid);
createApp(App)
  .use(VueGtag, {
    config: { id: gid },
  })
  .mount("#app");
