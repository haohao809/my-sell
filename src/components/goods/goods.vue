<template>
	<div class="goods">
		<div class="menu-wrapper">
			<ul>
				<li></li>
			</ul>
		</div>
		<div class="foods-wrapper">
			<ul>
				<li></li>
			</ul>
		</div>
		<div>
			
		</div>
	</div>
</template>

<script>
	export default{
		created(){
			const url = '/api/goods';
			this.$http.get(url).then((response) =>{
				response = response.body;
				if(response.errno === 0){
					console.log(response.data)
				}
			})
			.catch((error) =>{
				console.log(error);
			})
	}
}
</script>

<style>
</style>