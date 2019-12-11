<template>
	<div>
	    详情页
	    {{this.$route.params.fid}}
	    {{this.$route.query.abc}}
	    <div v-if="film">
		    <img :src="film.poster.origin" />
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		name: "detail",
		data: function() {
			return {
				film: null
			}
		},
		mounted: function() {
			console.log(this);
			this.getDetailData();
		},
		methods: {
			getDetailData: function() {
				var that = this;
				axios.get(`/v4/api/film/${this.$route.params.fid}?__t=1510214343602`)
				.then(function(res){
					console.log(res);
					that.film = res.data.data.film;
				})
			}
		}
	}
</script>
<style></style>