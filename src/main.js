/*
=========================================================
* Vite Soft UI Dashboard - v1.0.0
=========================================================
* Product Page: https://creative-tim.com/product/vite-soft-ui-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
* Licensed under MIT (https://github.com/creativetimofficial/vite-soft-ui-dashboard/blob/556f77210e261adc3ec12197dab1471a1295afd8/LICENSE.md)
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* react index.js와 유사한 것으로 보임 */

// 앱 생성
import { createApp } from "vue";
// App 파일
import App from "./App.vue";
// 전역 store
import store from "./store";
// 앱 router
import router from "./router";
// CSS
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
// JS 및 보조 CSS 호출
import SoftUIDashboard from "./soft-ui-dashboard";

/* 앱 생성과 사용 객체 혹은 파일들, 그리고 마운트할 #app === <div id=app>...</div> */
createApp(App).use(store).use(router).use(SoftUIDashboard).mount("#app");
