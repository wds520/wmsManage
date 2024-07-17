"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      // 表单数据
      formData: {
        name: "",
        email: ""
      },
      goodsNamesList: [
        { value: "C1F", text: "C1F" },
        { value: "C2F", text: "C2F" },
        { value: "C3F", text: "C3F" }
      ],
      items: [
        {
          value: 0,
          name: "出库",
          checked: true
        },
        {
          value: 1,
          name: "入库"
        }
      ],
      stockInfo: {},
      pageType: "addStock",
      rules: {
        // 对name字段进行必填验证
        name: {
          rules: [
            {
              required: true,
              errorMessage: "请输入货物名称"
            }
          ]
        },
        // 对email字段进行必填验证
        quantity: {
          rules: [{
            required: true,
            errorMessage: "请输入正确的货物容量"
          }]
        }
      }
    };
  },
  onLoad(options) {
    console.log(options, "opitons");
    this.stockInfo = options;
    if (options.stockId && options.stockId !== "undefined") {
      this.formData.name = options.stockName;
      this.formData.quantity = options.quantity;
      this.pageType = "editStock";
    } else {
      this.pageType = "addStock";
    }
    this.$forceUpdate();
  },
  methods: {
    // 触发提交表单
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("表单数据信息：", res);
        if (this.pageType === "addStock") {
          request_api.addStock({
            ...res,
            warehouseId: this.stockInfo.warehouseId
          }).then((res2) => {
            common_vendor.index.showToast({
              title: `录入成功`,
              icon: "none"
            });
          });
        } else {
          request_api.editStock({
            ...res,
            warehouseId: this.stockInfo.warehouseId,
            id: this.stockInfo.stockId
          }).then((res2) => {
            common_vendor.index.showToast({
              title: `更新成功`,
              icon: "none"
            });
          });
        }
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_data_select2 + _easycom_uni_forms_item2 + _easycom_uni_easyinput2 + _easycom_uni_forms2)();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_data_select + _easycom_uni_forms_item + _easycom_uni_easyinput + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.name = $event),
    b: common_vendor.p({
      localdata: $data.goodsNamesList,
      disabled: $data.pageType === "editStock",
      modelValue: $data.formData.name
    }),
    c: common_vendor.p({
      label: "货物名称",
      name: "name"
    }),
    d: common_vendor.o(($event) => $data.formData.quantity = $event),
    e: common_vendor.p({
      type: "number",
      placeholder: "请输入货物容量",
      modelValue: $data.formData.quantity
    }),
    f: common_vendor.p({
      label: "货物容量",
      name: "quantity"
    }),
    g: common_vendor.sr("form", "a2c6cd40-0"),
    h: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a2c6cd40"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/good/goodsDetail.vue"]]);
wx.createPage(MiniProgramPage);
