import {createApp,h} from "vue";

import App from "./App.vue";

console.log(App);

const AppConfig = {
    render() {
        return h(App);
    }
};
createApp(AppConfig).mount("#app");