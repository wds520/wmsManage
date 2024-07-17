// 引入 request 文件
import request from './index.js'
 console.log(request,'request')
// 获取用户信息
export const getUserInfo = (data) => {
	return request({
		url: '/api/user/getUserInfo',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 注册用户
export const registerUser = (data) => {
	return request({
		url: '/api/user/register',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 登录
export const login = (data) => {
	return request({
		url: '/api/user/login',
		method: 'post',
		data,
        header: {} // 自定义
	})
}




// 仓库

// 添加仓库
export const addWareHouse = (data) => {
	return request({
		url: '/api/warehouse/add',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 查询仓库列表
export const queryWareHouseList = (data) => {
	return request({
		url: '/api/warehouse/queryList',
		method: 'post',
		data,
        header: {} // 自定义
	})
}




// 任务

// 添加任务
export const addTask = (data) => {
	return request({
		url: '/api/task/add',
		method: 'post',
		data,
        header: {} // 自定义
	})
}



// 货物

// 添加货物
export const addStock = (data) => {
	return request({
		url: '/api/stock/add',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 查询货物
export const queryStock = (data) => {
	return request({
		url: '/api/stock/queryList',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 编辑货物
export const editStock = (data) => {
	return request({
		url: '/api/stock/update',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 删除货物
export const delStock = (id) => {
	return request({
		url: `/api/stock/delete/${id}`,
		method: 'delete',
        header: {} // 自定义
	})
}





// 进出库

// 进库
export const moveStockInHouse = (data) => {
	return request({
		url: '/api/stockMovements/add',
		method: 'post',
		data,
        header: {} // 自定义
	})
}





//  车辆

// 添加车辆
export const addCar = (data) => {
	return request({
		url: '/api/car/add',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 查询车辆列表
export const queryCarList = (data) => {
	return request({
		url: '/api/car/queryList',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 删除车辆
export const delCar = (id) => {
	return request({
		url: `/api/car/delete/${id}`,
		method: 'delete',
        header: {} // 自定义
	})
}

// 编辑车辆
export const editCar = (data) => {
	return request({
		url: '/api/car/update',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 查询车辆详情
export const queryCarDetail = (id) => {
	return request({
		url: `/api/car/query/${id}`,
		method: 'get',
        header: {} // 自定义
	})
}



// 司机

// 添加司机
export const addDriver = (data) => {
	return request({
		url: '/api/driver/add',
		method: 'post',
		data,
        header: {} // 自定义
	})
}
// 查询司机列表
export const queryDriverList = (data) => {
	return request({
		url: '/api/driver/queryList',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 删除司机
export const delDriver = (id) => {
	return request({
		url: `/api/driver/delete/${id}`,
		method: 'delete',
        header: {} // 自定义
	})
}

// 编辑司机
export const editDriver = (data) => {
	return request({
		url: '/api/driver/update',
		method: 'post',
		data,
        header: {} // 自定义
	})
}

// 查询司机详情
export const queryDriverDetail = (id) => {
	return request({
		url: `/api/driver/query/${id}`,
		method: 'get',
        header: {} // 自定义
	})
}
