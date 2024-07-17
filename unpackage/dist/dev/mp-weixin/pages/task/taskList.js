"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      avatarList: [],
      popup: null,
      formData: {
        datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"]
      },
      items: [
        {
          value: "USA",
          name: "美国"
        },
        {
          value: "CHN",
          name: "中国",
          checked: "true"
        },
        {
          value: "BRA",
          name: "巴西"
        },
        {
          value: "JPN",
          name: "日本"
        },
        {
          value: "ENG",
          name: "英国"
        },
        {
          value: "FRA",
          name: "法国"
        }
      ]
    };
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
    luruStorageInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/storage/inStorageNum"
      });
    },
    submit() {
    },
    receiveTask() {
      common_vendor.index.navigateTo({
        url: "/pages/car/carList"
      });
    },
    toDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/task/taskDetail"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_chat2 + _easycom_uni_list2)();
}
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_chat + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.items, (item, k0, i0) => {
      return {
        a: item.value,
        b: item.checked,
        c: common_vendor.o((...args) => $options.receiveTask && $options.receiveTask(...args), item.value),
        d: common_vendor.o($options.toDetail, item.value),
        e: item.value,
        f: "43c5fe20-1-" + i0 + ",43c5fe20-0"
      };
    }),
    b: common_vendor.p({
      title: "",
      note: "",
      time: "2020-02-02 20:20"
    }),
    c: common_vendor.p({
      border: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-43c5fe20"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/task/taskList.vue"]]);
wx.createPage(MiniProgramPage);
