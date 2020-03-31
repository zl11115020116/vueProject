<template>
	<div class="header">
		<i @click="displayFlag = !displayFlag">菜单</i>
		<h2>电影网</h2>
		<span class="city">{{city}}</span>
		<transition name="css">
			<div class="menu" v-if="displayFlag">
				<ul>
					<li>首页</li>
					<li>影片</li>
					<li>列表</li>		
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "header-comp",
		data: function(){
			return {
				city: "",
				displayFlag: false
			}
		},
		mounted: function() {
			var that = this;
			function myFun(result){
				var cityName = result.name;
				// alert("当前定位城市:"+cityName);
				that.city = cityName;
			}
			var myCity = new BMap.LocalCity();
			myCity.get(myFun);
		}
	}
</script>

<style scoped>
	.header {
		background: #333;
		color: #fff;
		height: 45px;
		line-height: 45px;
	}
	.header i {
		float: left;
	}
	.header h2 {
		display: inline-block;
		margin: 0;
		padding: 0;
	}
	.city {
		float: right;
	}
	.menu {
		z-index: 2;
		width: 80%;
		position: fixed;
		top: 45px;
		height: 100%;
		background: #333;
	}
	.css-enter {
		left: -500px;
		opacity: 0;
	}
	.css-enter-to {
		left: 0;
		opacity: 1;
		transition-duration: 0.6s;
	}

	.css-leave {
		left: 0;
		opacity: 1;
	}
	.css-leave-to {
		left: -800px;
		opacity: 0;
		transition-duration: 0.4s;
	}
</style>