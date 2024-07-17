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
      driverList: [],
      statusList: ["空闲", "运输中", "废弃"]
    };
  },
  onShow(options) {
    this.queryDriverListFn();
  },
  methods: {
    resetPassword() {
      this.$refs.popup.open("bottom");
    },
    toCreateDriver() {
      common_vendor.index.navigateTo({
        url: "/pages/driver/createDriver"
      });
    },
    editCarFn(data) {
      common_vendor.index.navigateTo({
        url: "/pages/driver/createDriver?driverId=" + data.id + "&type=edit"
      });
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
    queryDriverListFn() {
      request_api.queryDriverList({}).then((res) => {
        if (res.code !== 200) {
          common_vendor.index.showToast({
            icon: "error",
            title: res.message,
            duration: 2e3
          });
          return;
        }
        this.driverList = res.data.list.filter((v) => v.status !== 1);
      });
    },
    deleteDriverFn(data) {
      request_api.delDriver(data.id).then((res) => {
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
        this.queryDriverListFn();
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
    a: common_vendor.o($options.toCreateDriver),
    b: common_vendor.p({
      text: "添加司机",
      type: "primary"
    }),
    c: common_vendor.f($data.driverList, (item, k0, i0) => {
      return {
        a: item.value,
        b: item.checked,
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.phone),
        e: common_vendor.o(($event) => $options.deleteDriverFn(item), item.value),
        f: common_vendor.o(($event) => $options.editCarFn(item), item.value),
        g: item.value,
        h: "a7989ea2-2-" + i0 + ",a7989ea2-1"
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a7989ea2"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/driver/driverList.vue"]]);
wx.createPage(MiniProgramPage);
