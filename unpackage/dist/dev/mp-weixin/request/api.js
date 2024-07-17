"use strict";
const request_index = require("./index.js");
console.log(request_index.request, "request");
const getUserInfo = (data) => {
  return request_index.request({
    url: "/api/user/getUserInfo",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const registerUser = (data) => {
  return request_index.request({
    url: "/api/user/register",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const login = (data) => {
  return request_index.request({
    url: "/api/user/login",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const addWareHouse = (data) => {
  return request_index.request({
    url: "/api/warehouse/add",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const queryWareHouseList = (data) => {
  return request_index.request({
    url: "/api/warehouse/queryList",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const addTask = (data) => {
  return request_index.request({
    url: "/api/task/add",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const addStock = (data) => {
  return request_index.request({
    url: "/api/stock/add",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const queryStock = (data) => {
  return request_index.request({
    url: "/api/stock/queryList",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const editStock = (data) => {
  return request_index.request({
    url: "/api/stock/update",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const delStock = (id) => {
  return request_index.request({
    url: `/api/stock/delete/${id}`,
    method: "delete",
    header: {}
    // 自定义
  });
};
const moveStockInHouse = (data) => {
  return request_index.request({
    url: "/api/stockMovements/add",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const addCar = (data) => {
  return request_index.request({
    url: "/api/car/add",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const queryCarList = (data) => {
  return request_index.request({
    url: "/api/car/queryList",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const delCar = (id) => {
  return request_index.request({
    url: `/api/car/delete/${id}`,
    method: "delete",
    header: {}
    // 自定义
  });
};
const editCar = (data) => {
  return request_index.request({
    url: "/api/car/update",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const queryCarDetail = (id) => {
  return request_index.request({
    url: `/api/car/query/${id}`,
    method: "get",
    header: {}
    // 自定义
  });
};
const addDriver = (data) => {
  return request_index.request({
    url: "/api/driver/add",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const queryDriverList = (data) => {
  return request_index.request({
    url: "/api/driver/queryList",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const delDriver = (id) => {
  return request_index.request({
    url: `/api/driver/delete/${id}`,
    method: "delete",
    header: {}
    // 自定义
  });
};
const editDriver = (data) => {
  return request_index.request({
    url: "/api/driver/update",
    method: "post",
    data,
    header: {}
    // 自定义
  });
};
const queryDriverDetail = (id) => {
  return request_index.request({
    url: `/api/driver/query/${id}`,
    method: "get",
    header: {}
    // 自定义
  });
};
exports.addCar = addCar;
exports.addDriver = addDriver;
exports.addStock = addStock;
exports.addTask = addTask;
exports.addWareHouse = addWareHouse;
exports.delCar = delCar;
exports.delDriver = delDriver;
exports.delStock = delStock;
exports.editCar = editCar;
exports.editDriver = editDriver;
exports.editStock = editStock;
exports.getUserInfo = getUserInfo;
exports.login = login;
exports.moveStockInHouse = moveStockInHouse;
exports.queryCarDetail = queryCarDetail;
exports.queryCarList = queryCarList;
exports.queryDriverDetail = queryDriverDetail;
exports.queryDriverList = queryDriverList;
exports.queryStock = queryStock;
exports.queryWareHouseList = queryWareHouseList;
exports.registerUser = registerUser;
