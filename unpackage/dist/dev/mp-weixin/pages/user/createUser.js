"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      // 表单数据
      formData: {
        userName: "",
        pwd: "",
        role: ""
      },
      range: [
        { value: 1, text: "系统管理员" },
        { value: 20, text: "中心管理员" },
        { value: 21, text: "查询功能账户" },
        { value: 22, text: "库房保管员" },
        { value: 30, text: "县级(公司)管理员" },
        { value: 31, text: "站点保管员" },
        { value: 40, text: "第三方物流公司" },
        { value: 41, text: "车辆驾驶员" }
      ],
      rules: {
        // 对name字段进行必填验证
        userName: {
          rules: [
            {
              required: true,
              errorMessage: "请输入账号"
            }
            // {
            // 	minLength: 2,
            // 	maxLength: 16,
            // 	errorMessage: '账号长度在 {minLength} 到 {maxLength} 个字符',
            // }
          ]
        },
        role: {
          rules: [{
            required: true,
            errorMessage: "请选择账号类型"
          }]
        },
        // 对email字段进行必填验证
        pwd: {
          rules: [{
            required: true,
            format: "password",
            errorMessage: "请输入正确的密码"
          }]
        }
      }
    };
  },
  methods: {
    /**
     * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
     * @param {String} name 字段名称
     * @param {String} value 表单域的值
     */
    // binddata(name,value){
    // 通过 input 事件设置表单指定 name 的值
    //   this.$refs.form.setValue(name, value)
    // },
    // 触发提交表单
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("表单数据信息：", res);
        request_api.registerUser(res).then((res2) => {
          if (res2.code === 200) {
            common_vendor.index.showToast({
              title: res2.message,
              icon: "none"
            });
          } else {
            common_vendor.index.showToast({
              icon: "error",
              title: res2.message
            });
          }
        }).catch((err) => {
          common_vendor.index.showToast({
            title: "创建账号失败",
            duration: 2e3
          });
        });
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_select2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_select + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.userName = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "请输入账号",
      modelValue: $data.formData.userName
    }),
    c: common_vendor.p({
      label: "账号",
      name: "userName"
    }),
    d: common_vendor.o(_ctx.change),
    e: common_vendor.o(($event) => $data.formData.role = $event),
    f: common_vendor.p({
      localdata: $data.range,
      modelValue: $data.formData.role
    }),
    g: common_vendor.p({
      label: "账号类型",
      name: "role"
    }),
    h: common_vendor.o(($event) => $data.formData.pwd = $event),
    i: common_vendor.p({
      type: "text",
      placeholder: "请输入密码",
      modelValue: $data.formData.pwd
    }),
    j: common_vendor.p({
      label: "密码",
      name: "pwd"
    }),
    k: common_vendor.sr("form", "ced52524-0"),
    l: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    m: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ced52524"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/user/createUser.vue"]]);
wx.createPage(MiniProgramPage);
