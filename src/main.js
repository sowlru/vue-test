/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import plugins from "@/plugins";

const app = createApp(App)
app.use(ElementPlus);
app.use(plugins)
app.mount("#app");
