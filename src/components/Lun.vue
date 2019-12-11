<template>
	<div class="swiper">
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div v-for="item in lunData" class="swiper-slide">
		    	<img :src="item.imageUrl" />
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: "lun-comp",
		data: function(){
			return {
				lunData: []
			}
		},
		mounted: function() {
			this.getLunData();
		},
		methods: {
			getLunData: function() {
				var that = this;
				// 调用ajax接口
				axios.get('/v4/api/billboard/home?__t=1510192699833')
				  .then(function (response) {
				    console.log(response);
				    that.lunData = response.data.data.billboards;

				    that.$nextTick(function(){
						var mySwiper = new Swiper('.swiper-container', {
						      autoplay: {
						        delay: 2500,
						        disableOnInteraction: false,
						        direction : 'vertical',
						      },
						      loop: true
						})
				    })
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
		}
	}
</script>

<style scoped>
	.swiper {

	}
</style>