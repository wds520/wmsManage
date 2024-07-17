"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      // 表单数据
      formData: {
        name: "",
        maxCapacity: "",
        address: ""
      },
      storageLevelList: [
        {
          value: 1,
          text: "一级"
        },
        {
          value: 2,
          text: "二级"
        },
        {
          value: 3,
          text: "三级"
        }
      ],
      rules: {
        // 对name字段进行必填验证
        name: {
          rules: [
            {
              required: true,
              errorMessage: "请输入库房名称"
            },
            {
              minLength: 2,
              maxLength: 16,
              errorMessage: "库房名称长度在 {minLength} 到 {maxLength} 个字符"
            }
          ]
        },
        // 对email字段进行必填验证
        email: {
          rules: [{
            format: "password",
            errorMessage: "请输入正确的总库容"
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
        request_api.addWareHouse(res).then((res2) => {
          common_vendor.index.showToast({
            title: res2.message,
            icon: "none"
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
    a: common_vendor.o(($event) => $data.formData.name = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "请输入库房名称",
      modelValue: $data.formData.name
    }),
    c: common_vendor.p({
      label: "库房名称",
      name: "name"
    }),
    d: common_vendor.o(($event) => $data.formData.maxCapacity = $event),
    e: common_vendor.p({
      type: "number",
      placeholder: "请输入总库容",
      modelValue: $data.formData.maxCapacity
    }),
    f: common_vendor.p({
      label: "总库容",
      name: "maxCapacity"
    }),
    g: common_vendor.o(($event) => $data.formData.address = $event),
    h: common_vendor.p({
      type: "text",
      placeholder: "请输入仓库地址",
      modelValue: $data.formData.address
    }),
    i: common_vendor.p({
      label: "仓库地址",
      name: "address"
    }),
    j: common_vendor.o(_ctx.change),
    k: common_vendor.o(($event) => $data.formData.type = $event),
    l: common_vendor.p({
      localdata: $data.storageLevelList,
      modelValue: $data.formData.type
    }),
    m: common_vendor.p({
      label: "仓库等级",
      name: "type"
    }),
    n: common_vendor.o(($event) => $data.formData.usedSpace = $event),
    o: common_vendor.p({
      type: "text",
      placeholder: "请输入已使用空间",
      modelValue: $data.formData.usedSpace
    }),
    p: common_vendor.p({
      label: "已使用空间",
      name: "usedSpace"
    }),
    q: common_vendor.sr("form", "92cb43bc-0"),
    r: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    s: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-92cb43bc"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/storage/createStorage.vue"]]);
wx.createPage(MiniProgramPage);
