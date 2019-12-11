<template>
	<div class="films">
		<div>电影列表</div>
		<ul>
			<li v-for="item in films">
				<router-link :to="{name:'Detail', params:{fid: item.id}, query: {abc: 123}}">
					<h3>{{item.name}}</h3>
					<img :src="item.cover.origin" />
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: "film-list",
		data: function() {
			return {
				films: []
			}
		},
		mounted: function() {
			this.getFilms();
		},
		methods: {
			getFilms: function() {
				var that = this;
				axios.get("/v4/api/film/now-playing?__t=1510192699843&page=1&count=5")
				.then(function(res){
					console.log(res);
					that.films = res.data.data.films;
				})
			}
		}
	}
</script>

<style scoped>
	.films {

	}
</style>