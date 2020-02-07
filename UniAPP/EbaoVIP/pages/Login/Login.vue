<template>
	<view class="content">
		<!-- LOGO -->
		<view class="logo-box">
			<view class="logo"><image src="../../static/img/login/logo.svg"></image></view>
		</view>
		<!-- LOGO -->

		<!-- 表单测试 -->

		<!-- 表单 -->
		<view class="input-group">
			<input type="text" v-model="account" placeholder="请输入账号/手机号" />
			<input type="password" v-model="password" placeholder="请输入密码" />
		</view>
		<!-- 表单 -->

		<!-- 按钮 -->
		<view class="btn"><button type="primary" @click="Login()">登录</button></view>
		<!-- 按钮 -->

		<!-- 注册账号 忘记密码 -->
		<uni-view class="action-row">
			<uni-navigator class="" url="" @tap="register()">注册账号</uni-navigator>
			<uni-text><span>|</span></uni-text>
			<uni-navigator class="" url="" @tap="forgetpassword()">忘记密码</uni-navigator>
		</uni-view>
		<!-- 注册账号 忘记密码 -->
	</view>
</template>

<script>
const account_cacheKey = 'account';
export default {
	data() {
		return {
			account: '', //用户名
			password: '' //密码
		};
	},
	methods: {
		// abc(){
		// 	//隐藏软键盘
		// 	setTimeout(function() {
		// 		uni.hideKeyboard()
		// 	}, 2000);
		// },
		register(){
			//在起始页面跳转到test.vue页面并传递参数
			uni.navigateTo({
			    url: '/pages/Login/register'
			});
		},
		forgetpassword(){
			//在起始页面跳转到test.vue页面并传递参数
			uni.navigateTo({
			    url: '/pages/Login/forgetpassword'
			});
		},
		Login() {
			//非空验证
			if (this.account == '') {
				uni.showToast({
					title: '请填写账号', //显示内容
					duration: 2000, //显示时间
					icon: 'none', //不显示图标
					position: 'center' //居中显示
				});
				return false;
			}
			if (this.password == '') {
				uni.showToast({
					title: '请填写密码', //显示内容
					duration: 2000, //显示时间
					icon: 'none', //不显示图标
					position: 'center' //居中显示
				});
				return false;
			}

			// 请求参数
			var _self = this;

			_self.account = _self.deCodeAccount(_self.account);
			var RequestData = {
				id: _self.account,
				password: _self.password
			};
			// 请求方法 Login
			var RequestAddress = 'Login';
			//登录接口
			this.Ebao.UniAjax('Login', RequestData).then(
				res => {
					//打印请求返回的数据
					// console.log(JSON.stringify(RequestData));
					console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						//跳转页面
						uni.switchTab({
							url: '/pages/tabBar/workbench/workbench' //跳转到工作台页面
						});
						//缓存登录账号
						uni.setStorageSync(account_cacheKey, _self.account);
						// 从本地缓存中异步获取指定 key 对应的内容。
					} else {
						uni.showToast({
							title: res.data, //显示内容
							duration: 3000, //显示时间
							icon: 'none', //不显示图标
							position: 'center' //居中显示
						});
						return;
					}
				},
				error => {
					console.log(error);
				}
			);
		},
		enCodeAccount: function(account) {
			return account.slice(0, 3) + '******' + account.slice(-2);
		},
		deCodeAccount: function(account) {
			let account_cache = uni.getStorageSync(account_cacheKey);
			if (account_cache && account == this.enCodeAccount(account_cache)) {
				return account_cache;
			}
			return account;
		}
	},
	created() {
		
		var _slef = this;
		let account_cache = uni.getStorageSync(account_cacheKey);
		if (account_cache) {
			this.account = this.enCodeAccount(account_cache);
		}
	}
};
</script>

<style>

.logo-box {
	/* position: relative; */
	height: 220px;
	width: 100%;
	background-color: #4874ad;
}
.logo {
	height: 50%;
	width: 50%;
	margin: auto;
	position: relative;
	top: 65px;
}
.logo image {
	width: 100%;
	height: 100%;
}
.input-group {
	padding: 15px 10px;
}
.input-group input {
	border-bottom: 1px solid #c5ebfb;
	height: 50px;
	padding-left: 15px;
	font-size: 16px;
}
.btn {
	padding: 0px 10px;
	margin-top: 15px;
}
.btn button {
	background-color: #4874ad;
}

.action-row {
	margin-top: 15px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 18px;
}

.action-row navigator {
	color: #007aff;
	padding: 0 10px;
}
</style>
