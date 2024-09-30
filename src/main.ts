import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  createApp(App).mount("#app");
});
