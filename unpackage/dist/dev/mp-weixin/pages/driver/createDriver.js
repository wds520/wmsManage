"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      // 表单数据
      formData: {
        name: "",
        phone: ""
      },
      driverInfo: {},
      rules: {
        // 对name字段进行必填验证
        name: {
          rules: [
            {
              required: true,
              errorMessage: "请输入名字"
            }
          ]
        },
        phone: {
          rules: [{
            required: true,
            errorMessage: "请输入手机号"
          }]
        }
      }
    };
  },
  onLoad(options) {
    if (options.type === "edit") {
      this.driverInfo = options;
      this.queryDriverDetailFn();
    }
  },
  methods: {
    queryDriverDetailFn() {
      request_api.queryDriverDetail(this.driverInfo.driverId).then((res) => {
        if (res.code !== 200) {
          common_vendor.index.showToast({
            icon: "error",
            title: res.message,
            duration: 2e3
          });
          return;
        }
        this.formData = res.data;
      });
    },
    // 触发提交表单
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("表单数据信息：", res);
        if (this.driverInfo.type === "edit") {
          return request_api.editDriver({
            ...res,
            id: this.driverInfo.driverId
          }).then((res2) => {
            if (res2.code !== 200) {
              common_vendor.index.showToast({
                icon: "error",
                title: res2.message,
                duration: 2e3
              });
              return;
            }
            common_vendor.index.showToast({
              title: "修改成功",
              duration: 2e3
            });
          });
        }
        request_api.addDriver(res).then((res1) => {
          if (res1.code !== 200) {
            common_vendor.index.showToast({
              icon: "error",
              title: res1.message,
              duration: 2e3
            });
            return;
          }
          common_vendor.index.showToast({
            title: `创建成功`,
            icon: "none"
          });
          common_vendor.index.navigateBack({ delta: 1 });
        });
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    },
    change() {
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.name = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "请输入名字",
      modelValue: $data.formData.name
    }),
    c: common_vendor.p({
      label: "名字",
      name: "name"
    }),
    d: common_vendor.o(($event) => $data.formData.phone = $event),
    e: common_vendor.p({
      type: "number",
      placeholder: "请输入手机号",
      modelValue: $data.formData.phone
    }),
    f: common_vendor.p({
      label: "手机号",
      name: "phone"
    }),
    g: common_vendor.sr("form", "bf935581-0"),
    h: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bf935581"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/driver/createDriver.vue"]]);
wx.createPage(MiniProgramPage);
