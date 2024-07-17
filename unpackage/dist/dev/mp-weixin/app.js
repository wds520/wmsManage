"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/login.js";
  "./pages/index/index.js";
  "./pages/user/userList.js";
  "./pages/user/createUser.js";
  "./pages/storage/StorageList.js";
  "./pages/storage/createStorage.js";
  "./pages/storage/inStorageNum.js";
  "./pages/car/carList.js";
  "./pages/car/createCar.js";
  "./pages/task/taskList.js";
  "./pages/task/taskDetail.js";
  "./pages/good/goodsList.js";
  "./pages/good/goodsDetail.js";
  "./pages/driver/driverList.js";
  "./pages/driver/createDriver.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
