"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      // 表单数据
      formData: {
        stockId: "",
        email: "",
        stockQuantity: "",
        movementType: 1
      },
      stockList: [],
      items: [
        {
          value: 1,
          name: "出库",
          checked: true
        },
        {
          value: 0,
          name: "入库"
        }
      ],
      warehouseInfo: {},
      pageType: "addStock",
      rules: {
        // 对name字段进行必填验证
        stockId: {
          rules: [
            {
              required: true,
              errorMessage: "请选择货物"
            }
          ]
        },
        // 对email字段进行必填验证
        quantity: {
          rules: [{
            required: true,
            errorMessage: "请输入正确的货物容量"
          }]
        },
        stockQuantity: {
          rules: [{
            required: true,
            errorMessage: "请输入正确的货物数量"
          }]
        }
      }
    };
  },
  onLoad(options) {
    console.log(options, "opitons");
    this.warehouseInfo = options;
    this.queryData();
    this.$forceUpdate();
  },
  methods: {
    radioChange(item) {
      console.log("🚀 ~ radioChange ~ item:", item);
      this.formData.movementType = item.detail.value;
    },
    queryData() {
      request_api.queryStock({ warehouseId: this.warehouseInfo.warehouseId }).then((res) => {
        console.log(res, "res");
        if (res.code === 200) {
          this.stockList = res.data.list.filter((v) => v.status !== 1).map((v) => {
            return {
              ...v,
              value: v.id,
              text: v.name
            };
          });
        }
      });
    },
    // 触发提交表单
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("表单数据信息：", res);
        const stockInfo = this.stockList.find((v) => v.id === res.stockId);
        request_api.moveStockInHouse({
          ...res,
          stockName: stockInfo.name,
          stockId: stockInfo.id,
          warehouseId: this.warehouseInfo.warehouseId,
          stockQuantity: Number(res.stockQuantity)
          // movementType: this.items.find(v => v.checked).value
        }).then((res1) => {
          if (res1.code !== 200) {
            common_vendor.index.showToast({
              icon: "error",
              title: res1.message,
              duration: 2e3
            });
            return;
          }
          common_vendor.index.showToast({
            title: res.movementType == 0 ? "入库成功" : "出库成功",
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
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_datetime_picker2 + _easycom_uni_forms_item2 + _easycom_uni_data_select2 + _easycom_uni_easyinput2 + _easycom_uni_forms2)();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_datetime_picker + _easycom_uni_forms_item + _easycom_uni_data_select + _easycom_uni_easyinput + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.movementDate = $event),
    b: common_vendor.p({
      type: "datetime",
      rangeSeparator: "至",
      modelValue: $data.formData.movementDate
    }),
    c: common_vendor.p({
      label: "出入库时间",
      name: "movementDate"
    }),
    d: common_vendor.o(($event) => $data.formData.stockId = $event),
    e: common_vendor.p({
      localdata: $data.stockList,
      modelValue: $data.formData.stockId
    }),
    f: common_vendor.p({
      label: "货物名称",
      name: "stockId"
    }),
    g: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.value,
        b: item.checked,
        c: common_vendor.t(item.name),
        d: item.value
      };
    }),
    h: common_vendor.o((...args) => $options.radioChange && $options.radioChange(...args)),
    i: common_vendor.p({
      label: "类型",
      name: "movementType"
    }),
    j: common_vendor.o(($event) => $data.formData.stockQuantity = $event),
    k: common_vendor.p({
      type: "number",
      placeholder: "请输入货物数量",
      modelValue: $data.formData.stockQuantity
    }),
    l: common_vendor.p({
      label: "货物数量",
      name: "stockQuantity"
    }),
    m: common_vendor.sr("form", "d515a64e-0"),
    n: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    o: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d515a64e"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/storage/inStorageNum.vue"]]);
wx.createPage(MiniProgramPage);
