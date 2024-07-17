"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      avatarList: [],
      popup: null,
      carPopup: null,
      formData: {
        datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"]
      },
      applyFormData: {
        actualArrivalTime: "",
        estimatedArrivalTime: "",
        stockQuantity: "",
        warehouseTo: ""
      },
      wareHouseList: [],
      wareHouseListSelect: [],
      tobaccoList: [
        {
          value: "C1F",
          text: "C1F"
        }
      ],
      curWarehouseInfo: {},
      applyTaskPopupRef: null,
      applyTaskrules: {
        // 对name字段进行必填验证
        stockQuantity: {
          rules: [
            {
              required: true,
              errorMessage: "请输入装载量"
            }
          ]
        },
        warehouseTo: {
          rules: [
            {
              required: true,
              errorMessage: "请输入目的地仓库"
            }
          ]
        },
        actualArrivalTime: {
          rules: [
            {
              required: true,
              errorMessage: "请输入预计出发时间"
            }
          ]
        },
        estimatedArrivalTime: {
          rules: [
            {
              required: true,
              errorMessage: "请输入预计到达时间"
            }
          ]
        }
      }
    };
  },
  watch: {
    wareHouseList(nv) {
      this.wareHouseListSelect = nv.map((item) => {
        return {
          value: item.id,
          text: item.name
        };
      });
    }
  },
  onLoad(options) {
    request_api.queryWareHouseList().then((res) => {
      if (res.code === 200) {
        this.wareHouseList = res.data.list;
      }
    });
  },
  methods: {
    resetPassword() {
      this.$refs.popup.open("bottom");
    },
    handleCreateNewUserBtnClick() {
      common_vendor.index.navigateTo({
        url: "/pages/storage/createStorage"
      });
    },
    luruStorageInfo(data) {
      common_vendor.index.navigateTo({
        url: "/pages/storage/inStorageNum?warehouseId=" + data.id
      });
    },
    seeGoodsList(data) {
      common_vendor.index.navigateTo({
        url: "/pages/good/goodsList?warehouseId=" + data.id
      });
    },
    handleNeedCar(item) {
      this.curWarehouseInfo = item;
      this.$refs.carPopup.open("bottom");
    },
    submit() {
    },
    applyTaskSubmit() {
      this.$refs.applyTaskPopupRef.validate().then((res) => {
        console.log("表单数据信息：", res);
        request_api.addTask({
          ...res,
          warehouseFrom: this.curWarehouseInfo.id,
          status: 1
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_uni_tag2 + _easycom_uni_list_chat2 + _easycom_uni_list2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_popup2 + _easycom_uni_easyinput2 + _easycom_uni_data_select2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_list_chat + _easycom_uni_list + _easycom_uni_datetime_picker + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_popup + _easycom_uni_easyinput + _easycom_uni_data_select)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleCreateNewUserBtnClick),
    b: common_vendor.p({
      text: "创建新库房",
      type: "primary"
    }),
    c: common_vendor.f($data.wareHouseList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.maxCapacity),
        c: common_vendor.o(($event) => $options.handleNeedCar(item), item.id),
        d: common_vendor.o(($event) => $options.luruStorageInfo(item), item.id),
        e: common_vendor.o(($event) => $options.seeGoodsList(item), item.id),
        f: common_vendor.o((...args) => $options.resetPassword && $options.resetPassword(...args), item.id),
        g: item.id,
        h: "f33b4728-2-" + i0 + ",f33b4728-1"
      };
    }),
    d: common_vendor.p({
      title: "",
      note: "",
      thumb: '"总库容： 234"',
      time: "2020-02-02 20:20"
    }),
    e: common_vendor.p({
      border: true
    }),
    f: common_vendor.o(($event) => _ctx.datetimerange = $event),
    g: common_vendor.p({
      type: "datetimerange",
      rangeSeparator: "至",
      modelValue: _ctx.datetimerange
    }),
    h: common_vendor.p({
      label: "",
      name: "datetimerange"
    }),
    i: common_vendor.sr("form", "f33b4728-4,f33b4728-3"),
    j: common_vendor.p({
      modelValue: $data.formData
    }),
    k: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    l: common_vendor.sr("popup", "f33b4728-3"),
    m: common_vendor.p({
      type: "bottom",
      ["border-radius"]: "10px 10px 0 0"
    }),
    n: common_vendor.o(($event) => $data.applyFormData.stockQuantity = $event),
    o: common_vendor.p({
      type: "text",
      placeholder: "请输入单车装载量",
      modelValue: $data.applyFormData.stockQuantity
    }),
    p: common_vendor.p({
      label: "装载量",
      name: "stockQuantity"
    }),
    q: common_vendor.o(_ctx.change),
    r: common_vendor.o(($event) => $data.applyFormData.name = $event),
    s: common_vendor.p({
      localdata: $data.tobaccoList,
      modelValue: $data.applyFormData.name
    }),
    t: common_vendor.p({
      label: "烟叶等级",
      name: "name"
    }),
    v: common_vendor.o(_ctx.change),
    w: common_vendor.o(($event) => $data.applyFormData.warehouseTo = $event),
    x: common_vendor.p({
      localdata: $data.wareHouseListSelect,
      modelValue: $data.applyFormData.warehouseTo
    }),
    y: common_vendor.p({
      label: "目的地仓库",
      name: "warehouseTo"
    }),
    z: common_vendor.o(_ctx.changeLog),
    A: common_vendor.o(($event) => $data.applyFormData.actualArrivalTime = $event),
    B: common_vendor.p({
      type: "datetime",
      modelValue: $data.applyFormData.actualArrivalTime
    }),
    C: common_vendor.p({
      label: "预计出发时间",
      name: "actualArrivalTime"
    }),
    D: common_vendor.o(_ctx.changeLog),
    E: common_vendor.o(($event) => $data.applyFormData.estimatedArrivalTime = $event),
    F: common_vendor.p({
      type: "datetime",
      modelValue: $data.applyFormData.estimatedArrivalTime
    }),
    G: common_vendor.p({
      label: "预计到达时间",
      name: "estimatedArrivalTime"
    }),
    H: common_vendor.sr("applyTaskPopupRef", "f33b4728-8,f33b4728-7"),
    I: common_vendor.p({
      modelValue: $data.applyFormData,
      rules: $data.applyTaskrules
    }),
    J: common_vendor.o((...args) => $options.applyTaskSubmit && $options.applyTaskSubmit(...args)),
    K: common_vendor.sr("carPopup", "f33b4728-7"),
    L: common_vendor.p({
      type: "bottom",
      ["border-radius"]: "10px 10px 0 0"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f33b4728"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/storage/StorageList.vue"]]);
wx.createPage(MiniProgramPage);
