"use strict";
const common_vendor = require("../common/vendor.js");
const request_api = require("../request/api.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        userName: "",
        password: ""
      },
      rules: {
        // 对name字段进行必填验证
        userName: {
          rules: [
            {
              required: true,
              errorMessage: "请输入姓名"
            }
          ]
        },
        // 对email字段进行必填验证
        password: {
          rules: [{
            required: true,
            errorMessage: "请输入密码"
          }]
        }
      },
      loginFormRef: null
    };
  },
  onLoad() {
    var _a;
    console.log("onload", common_vendor.index.getStorageInfoSync("token"));
    if (((_a = common_vendor.index.getStorageInfoSync("token")) == null ? void 0 : _a.currentSize) !== 0) {
      common_vendor.index.navigateTo({
        url: "/pages/index/index",
        success: () => {
          console.log("跳转成功");
        },
        error: () => {
          console.log("调整失败");
        }
      });
    }
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
    },
    submitForm() {
      this.$refs.loginFormRef.validate().then((res) => {
        console.log(res);
        request_api.login(res).then((res2) => {
          console.log(res2, "res");
          if (res2.code !== 200) {
            common_vendor.index.showToast({
              icon: "error",
              title: res2.message,
              duration: 2e3
            });
          } else {
            const token = res2.data.token;
            console.log(token, "token");
            common_vendor.index.setStorageSync("token", token);
            request_api.getUserInfo().then((res3) => {
              common_vendor.index.setStorageSync("userInfo", res3.data);
              common_vendor.index.navigateTo({
                url: "/pages/index/index",
                success: () => {
                  console.log("跳转成功");
                },
                error: () => {
                  console.log("调整失败");
                }
              });
            }).catch((err) => {
              common_vendor.index.showToast({
                title: "获取用户信息失败，请重试",
                duration: 2e3
              });
            });
          }
        }).catch((err) => {
          common_vendor.index.showToast({
            title: "登录失败，请重试",
            duration: 2e3
          });
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.userName = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "请输入用户名",
      modelValue: $data.formData.userName
    }),
    c: common_vendor.p({
      label: "用户名",
      name: "userName"
    }),
    d: common_vendor.o(($event) => $data.formData.password = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "请输入密码",
      modelValue: $data.formData.password
    }),
    f: common_vendor.p({
      label: "密码",
      name: "password"
    }),
    g: common_vendor.sr("loginFormRef", "e8ce220f-0"),
    h: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    i: common_vendor.o((...args) => $options.submitForm && $options.submitForm(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e8ce220f"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/login.vue"]]);
wx.createPage(MiniProgramPage);
