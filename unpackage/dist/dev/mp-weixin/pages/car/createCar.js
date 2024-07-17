"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      // 表单数据
      formData: {
        number: "",
        email: "",
        capacity: "",
        currentLocation: "",
        type: 1,
        status: 0
      },
      range: [
        { value: "0", text: "小型车" },
        { value: "1", text: "中型车" },
        { value: "2", text: "大型车" }
      ],
      range1: [
        { value: "0", text: "空闲" },
        { value: "1", text: "运输中" },
        { value: "2", text: "废弃" }
      ],
      carInfo: {},
      rules: {
        // 对name字段进行必填验证
        number: {
          rules: [
            {
              required: true,
              errorMessage: "请输入车牌号"
            }
          ]
        },
        capacity: {
          rules: [{
            required: true,
            errorMessage: "请输入车辆载重量"
          }]
        }
      }
    };
  },
  onLoad(options) {
    if (options.type === "edit") {
      this.carInfo = options;
      this.queryCarDetailFn();
    }
  },
  methods: {
    queryCarDetailFn() {
      request_api.queryCarDetail(this.carInfo.carId).then((res) => {
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
        if (this.carInfo.type === "edit") {
          return request_api.editCar({
            ...res,
            id: this.carInfo.carId
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
        request_api.addCar(res).then((res1) => {
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
    a: common_vendor.o(($event) => $data.formData.number = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "请输入车牌号",
      modelValue: $data.formData.number
    }),
    c: common_vendor.p({
      label: "车牌号",
      name: "number"
    }),
    d: common_vendor.o(($event) => $data.formData.currentLocation = $event),
    e: common_vendor.p({
      type: "text",
      placeholder: "请输入当前位置",
      modelValue: $data.formData.currentLocation
    }),
    f: common_vendor.p({
      label: "当前位置",
      name: "currentLocation"
    }),
    g: common_vendor.o(($event) => $data.formData.capacity = $event),
    h: common_vendor.p({
      type: "text",
      placeholder: "请输入车辆载重量",
      modelValue: $data.formData.capacity
    }),
    i: common_vendor.p({
      label: "载重量",
      name: "capacity"
    }),
    j: common_vendor.o($options.change),
    k: common_vendor.o(($event) => $data.formData.type = $event),
    l: common_vendor.p({
      localdata: $data.range,
      modelValue: $data.formData.type
    }),
    m: common_vendor.p({
      label: "车辆类型",
      name: "type"
    }),
    n: common_vendor.o($options.change),
    o: common_vendor.o(($event) => $data.formData.status = $event),
    p: common_vendor.p({
      localdata: $data.range1,
      modelValue: $data.formData.status
    }),
    q: common_vendor.p({
      label: "车辆状态",
      name: "status"
    }),
    r: common_vendor.sr("form", "a4482cf3-0"),
    s: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    t: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a4482cf3"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/car/createCar.vue"]]);
wx.createPage(MiniProgramPage);
