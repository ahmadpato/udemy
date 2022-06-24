<template>
	<nav class="navbar navbar-light justify-content-between pt-3" fixed="top" style="background-color: #fff;">
		<a class="navbar-brand" @click="$router.push('/')">Movie.io</a>
		<form class="form-inline">
			<div v-if="$route.path == '/'">
				<input class="form-control mr-sm-2" v-model="search" type="Search" placeholder="Find movie..."/>
			</div>
		</form>
	</nav>		
</template>

<script>
	export default {
		data() {
			return {
				search: "",
			};
		},
		watch: {
			search() {
				this.$store.dispatch("search", this.search);
			},
		},
	};
</script>

<style lang='scss' scoped>
	
</style>