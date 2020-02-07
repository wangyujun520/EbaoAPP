<template>
	<view class="content">
		<uni-navigator class="" url="" @tap="OutLogin">退出登录</uni-navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			OutLogin(){
				uni.reLaunch({
				    url: '/pages/Login/Login'//退出登录
				});
			}
		}
	}
</script>

<style>
</style>
