"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      avatarList: [{
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
      }, {
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
      }, {
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
      }]
    };
  },
  methods: {
    resetPassword() {
      common_vendor.index.showToast({
        title: `用户XXX的密码已重置为初始密码：123456`,
        icon: "none"
      });
    },
    handleCreateNewUserBtnClick() {
      common_vendor.index.navigateTo({
        url: "/pages/user/createUser"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_tag2 + _easycom_uni_list_chat2 + _easycom_uni_list2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_list_chat + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleCreateNewUserBtnClick),
    b: common_vendor.p({
      text: "创建新用户",
      type: "primary"
    }),
    c: common_vendor.o((...args) => $options.resetPassword && $options.resetPassword(...args)),
    d: common_vendor.p({
      title: "三级管理员1",
      ["avatar-list"]: $data.avatarList,
      note: "",
      time: "2020-02-02 20:20"
    }),
    e: common_vendor.o((...args) => $options.resetPassword && $options.resetPassword(...args)),
    f: common_vendor.p({
      title: "三级管理员2",
      ["avatar-list"]: $data.avatarList,
      note: "",
      time: "2020-02-02 20:20"
    }),
    g: common_vendor.o((...args) => $options.resetPassword && $options.resetPassword(...args)),
    h: common_vendor.p({
      title: "三级管理员3",
      ["avatar-list"]: $data.avatarList,
      note: "",
      time: "2020-02-02 20:20"
    }),
    i: common_vendor.o((...args) => $options.resetPassword && $options.resetPassword(...args)),
    j: common_vendor.p({
      title: "三级管理员4",
      ["avatar-list"]: $data.avatarList,
      note: "",
      time: "2020-02-02 20:20"
    }),
    k: common_vendor.p({
      border: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f5b1c712"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/user/userList.vue"]]);
wx.createPage(MiniProgramPage);
