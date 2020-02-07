//开发环境
var url = "http://new.mis.ebao.vip/api/app"; //请求地址
var appkey = "ee3b52dc-fdf9-e811-80c6-d44501148823"; //APPKEY

//测试环境
// var url = "http://test-mis.ebao.vip/api/app";//测试版MIS地址
// var appkey = "b725fded-70b2-e811-8c61-70106faecea0";//APPKEY

//正式环境
// var url = "http://mis.ebao.vip/api/app";//正式版MIS地址
// var appkey = "b725fded-70b2-e811-8c61-70106faecea0";//APPKEY

// 判断设备
function JudgementDevice() {
	// mode: mode, //根据设备来判断 安卓返回2 IOS返回1 其他情况和报错都是默认2
	switch (uni.getSystemInfoSync().platform) {
		case 'android':
			console.log('运行Android上');
			return 2;
			break;
		case 'ios':
			console.log('运行iOS上');
			return 1;
			break;
		default:
			console.log('运行在开发者工具上');
			return 2;
			break;
	}
}

// 从本地缓存中异步获取指定 key 对应的内容。
var DeviceID;
uni.getStorage({
	key: 'deviceid',
	success: function(res) {
		DeviceID = res.data; //DeviceID赋值
	},
	fail: function(e) { //接口调用失败的回调函数
		if (e.data == '') {
			//获取DeviceID 保存到本地
			var PhoneData = {
				Name: plus.os.name,
				Vendor: plus.device.vendor,
				Model: plus.device.model,
				Version: plus.os.version,
				UUID: plus.device.uuid
			};
			uni.request({
				url: url, //请求地址
				data: JSON.stringify(PhoneData),
				method: 'POST',
				timeout: 100000,
				dataType: 'json',
				async: true,
				header: {
					appkey: appkey,
					mode: JudgementDevice(),
					method: 'getdeviceid'
				},
				success: res => {
					DeviceID = res.data.DeviceID; //获取DeviceID
					//保存到缓存
					uni.setStorage({
						key: 'deviceid',
						data: DeviceID,
						success: function() {
							// console.log('DeviceID保存本地成功');
						}
					});
					
				}
			});
		}
	}
});

//登录的AJAX
const UniAjax = (RequestAddress, RequestData) => {
	let httpDefaultOpts = {
		url: url,
		data: JSON.stringify(RequestData),
		method: 'POST',
		timeout: 100000,
		dataType: 'json',
		async: true,
		header: {
			appkey: appkey, //已定义好
			deviceid: DeviceID, //根据ajax获取
			// deviceid: GetDeviceID(), //根据ajax获取
			misuid: null, //登录成功的回调函数
			token: null, //登录成功的回调函数
			mode: JudgementDevice(), //根据设备来判断 安卓返回2 IOS返回1 其他情况和报错都是默认2
			method: RequestAddress, //自定义
		},
	}
	console.log(JSON.stringify(httpDefaultOpts));

	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
};

export default {
	url, //请求地址
	appkey, //appkey
	UniAjax, //登录ajax
	JudgementDevice //判断设备
}
