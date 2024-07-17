"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui"
    };
  },
  onLoad() {
    console.log("onload");
  },
  methods: {
    jumpPage(pageUrl) {
      common_vendor.index.navigateTo({
        url: pageUrl,
        success: () => {
          console.log("跳转成功");
        },
        error: () => {
          console.log("调整失败");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.jumpPage("/pages/user/userList")),
    b: common_vendor.o(($event) => $options.jumpPage("/pages/storage/StorageList")),
    c: common_vendor.o(($event) => $options.jumpPage("/pages/good/goodsList")),
    d: common_vendor.o(($event) => $options.jumpPage("/pages/car/carList")),
    e: common_vendor.o(($event) => $options.jumpPage("/pages/driver/driverList")),
    f: common_vendor.o(($event) => $options.jumpPage("/pages/task/taskList")),
    g: common_vendor.o(($event) => $options.jumpPage("/pages/task/taskDetail"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
