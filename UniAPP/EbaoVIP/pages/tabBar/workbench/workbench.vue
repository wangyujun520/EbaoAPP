<!-- <template>
	<view class="aa">工作台</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onNavigationBarButtonTap(e){//原生头部导航栏图标事件的监听
		if(e.float=="left"){
			console.log("left");
		}else if(e.float=="right"){
			console.log("right");
			
			plus.nativeUI.actionSheet(
				{title:"切换站点",
				cancel:"取消",
				buttons:[
					{
						title:"1"
					},{
						title:"2"
						}
				]},
				function(e){
					console.log("User pressed: "+e.index);
				}
			);
			
		}
		
	}
	
};
</script>

<style></style>
 -->

<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>

		<view class="custom-navbar">
			<view class="center-title">工作台</view>
			<view class="icon iconfont menuico" @click="SwitchSite()">&#xe724;</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>

		<view class="menu-top">
			<view class="list-menu" @click="MenuSkip()">
				<view class="menu-group">
					<view class="group-box">
						<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
						<text class="group-box-text">菜单标题1</text>
						<span class="icon iconfont menuico group-box-span">&#xe673;</span>
					</view>
				</view>
			</view>
			<view class="list-menu">
				<view class="menu-group">
					<view class="group-box">
						<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
						<text class="group-box-text">菜单标题2</text>
						<span class="icon iconfont menuico group-box-span">&#xe673;</span>
					</view>
				</view>
			</view>
			<view class="list-menu">
				<view class="menu-group">
					<view class="group-box">
						<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
						<text class="group-box-text">菜单标题3</text>
						<span class="icon iconfont menuico group-box-span">&#xe673;</span>
					</view>
				</view>
			</view>
		</view>
		
		<view class="menu-body">
			<uni-collapse style="margin-top: 15px;">
				<uni-collapse-item class="list-title" title="菜单标题1" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
					<view class="list-menu" @click="MenuSkip()">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单1</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
					<view class="list-menu">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单2</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
					<view class="list-menu">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单3</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
				</uni-collapse-item>
				
			</uni-collapse>
			
			<uni-collapse style="margin-top: 15px;">
				<uni-collapse-item class="list-title" title="菜单标题2" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
					<view class="list-menu">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单1</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
					<view class="list-menu">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单2</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
					<view class="list-menu">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单3</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
				</uni-collapse-item>
				
				
			</uni-collapse>
			
			<uni-collapse style="margin-top: 15px;">
				<uni-collapse-item class="list-title" title="菜单标题3" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
					<view class="list-menu">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单1</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
					<view class="list-menu">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单2</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
					<view class="list-menu">
						<view class="menu-group">
							<view class="group-box">
								<image class="group-box-img" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="1"></image>
								<text class="group-box-text">菜单3</text>
								<span class="icon iconfont menuico group-box-span">&#xe673;</span>
							</view>
						</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
			
		</view>
		
	</view>
</template>

<script>
import uniCollapse from '@../../components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@../../components/uni-collapse-item/uni-collapse-item.vue';
import uniSection from '@../../components/uni-section/uni-section.vue';

export default {
	components: {
		uniSection,
		uniCollapse,
		uniCollapseItem
	},
	data() {
		const listData = [
			{
				name: '基础用法',
				data: [
					{
						type: false,
						subName: '默认开启',
						open: true,
						content: '折叠内容主体，可自定义内容及样式'
					},
					{
						type: false,
						subName: '折叠内容',
						content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
					},
					{
						type: false,
						subName: '禁用状态',
						disabled: true,
						content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
					}
				]
			},
			{
				name: '添加动画效果',
				data: [
					{
						type: true,
						subName: '动画效果',
						showAnimation: true,
						content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
					}
				]
			}
		];
		return {
			list: listData,
			accordion: [
				{
					id: 0,
					title: '标题文字',
					content: '手风琴效果',
					animation: true
				},
				{
					id: 1,
					title: '标题文字',
					content: '手风琴效果',
					animation: true
				},
				{
					id: 2,
					title: '标题文字',
					content: '手风琴效果',
					animation: true
				}
			],
			extraIcon: {
				color: '#4cd964',
				size: '26',
				type: 'image'
			},
			id: 2
		};
	},
	methods: {
		MenuSkip(){//菜单跳转
			console.log(123)
		},
		change(e) {},
		SwitchSite() {//切换站点
			// console.log(123);
			plus.nativeUI.actionSheet(
				{title:"切换站点",
				cancel:"取消",
				buttons:[
					{
						title:"1"
					},{
						title:"2"
						}
				]},
				function(e){
					console.log("User pressed: "+e.index);
				}
			);
			
		}
	}
};
</script>

<style lang="scss">
// 菜单开始
.list-title .list-menu:nth-of-type(1){
	border-top: 1px solid rgba(187,187,187,0.2);
}
.menu-top{
	.list-menu{
		border-bottom: 1px solid rgba(187,187,187,0.2);background-color: #FFFFFF;padding: 0px 12px 0px 12px;
		.menu-group{
			width: 100%;height: 50px;border: 0px solid red;margin: 0px;line-height: 50px;
			.group-box{
				position: relative;
				.group-box-img{
					width: 28px;height: 28px;position: relative;top: 9px;
				}
				.group-box-text{
					margin-left: 10px;font-size: 16px;
				}
				.group-box-span{
					color: #BBBBBB;position: absolute;right: 0px;top: 0px;font-size: 18px;
				}
			}
		}
	}
}

.menu-body{
	.list-menu{
		border-bottom: 1px solid rgba(187,187,187,0.2);background-color: #FFFFFF;padding: 0px 12px 0px 25px;
		.menu-group{
			width: 100%;height: 50px;border: 0px solid red;margin: 0px;line-height: 50px;
			.group-box{
				position: relative;
				.group-box-img{
					width: 28px;height: 28px;position: relative;top: 9px;
				}
				.group-box-text{
					margin-left: 10px;font-size: 14px;
				}
				.group-box-span{
					color: #BBBBBB;position: absolute;right: 2px;top: 0px;font-size: 16px;
				}
			}
		}
	}
}

// .list-men:active{
// 	background-color: #ccc;
// }
// 菜单结束
	
	
.custom-navbar {
	height: 44px;
	// height: 100upx;
	width: 100%;
	background-color: #4874ad;
	position: fixed;
	z-index: 10;
	// 条件编译 设置离顶部的高度
	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
}
.place {
	background-color: #ffffff;
	height: 44px;
	// height: 100upx;
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
}
.menuico {
	position: absolute;
	right: 15px;
	top: 10px;
	color: #ffffff;
	font-size: 22px;
}
.center-title {
	color: #ffffff;
	text-align: center;
	line-height: 43px;
	// font-weight: 700;
	font-size: 17px;
	border: 0px solid red;
}

/* 头条小程序组件内不能引入字体 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	font-weight: normal;
	font-style: normal;
	src: url('~@/static/uni.ttf') format('truetype');
}

/* #endif */

/* #ifndef APP-NVUE */
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #efeff4;
	min-height: 100%;
	height: auto;
}

view {
	font-size: 14px;
	line-height: inherit;
}

.example {
	padding: 0 15px 15px;
}

.example-info {
	padding: 15px;
	color: #3b4144;
	background: #ffffff;
}

.example-body {
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0;
	font-size: 14px;
	background-color: #ffffff;
}

/* #endif */
.example {
	padding: 0 15px;
}

.example-info {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	padding: 15px;
	color: #3b4144;
	background-color: #ffffff;
	font-size: 14px;
	line-height: 20px;
}

.example-info-text {
	font-size: 14px;
	line-height: 20px;
	color: #3b4144;
}

.example-body {
	flex-direction: column;
	padding: 15px;
	background-color: #ffffff;
}

.word-btn-white {
	font-size: 18px;
	color: #ffffff;
}

.word-btn {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	height: 48px;
	margin: 15px;
	background-color: #007aff;
}

.word-btn--hover {
	background-color: #4ca2ff;
}

.example-body {
	flex-direction: column;
	flex: 1;
}

.content {
	padding: 15px;
	font-size: 14px;
	line-height: 20px;
	background-color: #f9f9f9;
	color: #666;
}

.button {
	font-size: 26rpx;
	line-height: 90rpx;
}
</style>
