"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      avatarList: [],
      popup: null,
      formData: {
        datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"]
      },
      carList: [],
      statusList: ["空闲", "运输中", "废弃"]
    };
  },
  onShow(options) {
    this.queryCarListFn();
  },
  methods: {
    resetPassword() {
      this.$refs.popup.open("bottom");
    },
    toCreateCar() {
      common_vendor.index.navigateTo({
        url: "/pages/car/createCar"
      });
    },
    editCarFn(data) {
      common_vendor.index.navigateTo({
        url: "/pages/car/createCar?carId=" + data.id + "&type=edit"
      });
    },
    luruStorageInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/storage/inStorageNum"
      });
    },
    submit() {
    },
    callCar() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "17346736734",
        success: (result) => {
        },
        fail: (error) => {
        }
      });
    },
    queryCarListFn() {
      request_api.queryCarList({}).then((res) => {
        if (res.code !== 200) {
          common_vendor.index.showToast({
            icon: "error",
            title: res.message,
            duration: 2e3
          });
          return;
        }
        this.carList = res.data.list.filter((v) => v.status !== 1);
      });
    },
    deleteCarFn(data) {
      request_api.delCar(data.id).then((res) => {
        if (res.code !== 200) {
          common_vendor.index.showToast({
            icon: "error",
            title: res.message,
            duration: 2e3
          });
          return;
        }
        common_vendor.index.showToast({
          title: `删除成功`,
          icon: "none"
        });
        this.queryCarListFn();
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
    a: common_vendor.o($options.toCreateCar),
    b: common_vendor.p({
      text: "添加车辆",
      type: "primary"
    }),
    c: common_vendor.f($data.carList, (item, k0, i0) => {
      return {
        a: item.value,
        b: item.checked,
        c: common_vendor.t(item.number),
        d: common_vendor.t(item.capacity),
        e: common_vendor.t($data.statusList[item.status]),
        f: common_vendor.o(($event) => $options.deleteCarFn(item), item.value),
        g: common_vendor.o(($event) => $options.editCarFn(item), item.value),
        h: common_vendor.o((...args) => $options.callCar && $options.callCar(...args), item.value),
        i: item.value,
        j: "7a783d6f-2-" + i0 + ",7a783d6f-1"
      };
    }),
    d: common_vendor.p({
      title: "",
      note: "",
      time: "2020-02-02 20:20"
    }),
    e: common_vendor.p({
      border: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a783d6f"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/car/carList.vue"]]);
wx.createPage(MiniProgramPage);
