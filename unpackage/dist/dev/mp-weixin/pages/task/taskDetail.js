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
        url: "pages/task/taskDetail"
      });
    },
    uploadLocationImg() {
      common_vendor.index.chooseMedia({
        count: 9,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success(res) {
          console.log(res.tempFiles);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.uploadLocationImg && $options.uploadLocationImg(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a7c2ede4"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/task/taskDetail.vue"]]);
wx.createPage(MiniProgramPage);
