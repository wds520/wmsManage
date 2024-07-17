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
      stockList: [],
      stockListSelect: [],
      warehouseInfo: {},
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
    stockList(nv) {
      this.stockListSelect = nv.map((item) => {
        return {
          value: item.id,
          text: item.name
        };
      });
    }
  },
  onLoad(options) {
    this.warehouseInfo = options;
    this.queryData();
  },
  methods: {
    queryData() {
      request_api.queryStock({ warehouseId: this.warehouseInfo.warehouseId }).then((res) => {
        if (res.code === 200) {
          this.stockList = res.data.list.filter((v) => v.status !== 1);
        }
      });
    },
    luruStorageInfo(data) {
      var _a;
      common_vendor.index.navigateTo({
        url: "/pages/good/goodsDetail?warehouseId=" + ((_a = this.warehouseInfo) == null ? void 0 : _a.warehouseId) + "&stockId=" + ((data == null ? void 0 : data.id) ? data == null ? void 0 : data.id : "") + "&stockName=" + (data == null ? void 0 : data.name) + "&quantity=" + (data == null ? void 0 : data.quantity)
      });
    },
    deleteStock(item) {
      request_api.delStock(item.id).then((res) => {
        common_vendor.index.showToast({
          title: `删除成功`,
          icon: "none"
        });
        this.queryData();
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
    a: common_vendor.o($options.luruStorageInfo),
    b: common_vendor.p({
      text: "录入货物",
      type: "primary"
    }),
    c: common_vendor.f($data.stockList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.quantity),
        c: common_vendor.o(($event) => $options.luruStorageInfo(item), item.id),
        d: common_vendor.o(($event) => $options.deleteStock(item), item.id),
        e: item.id,
        f: "752a838c-2-" + i0 + ",752a838c-1"
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
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-752a838c"], ["__file", "/Users/wds/Documents/接单/仓库管理/project/wmsManage/pages/good/goodsList.vue"]]);
wx.createPage(MiniProgramPage);
