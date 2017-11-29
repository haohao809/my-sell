<template>
	<div class="good">
		<div class="menu-wrapper">
			<ul>
				<li v-for='(item,index) in goods' class="menu-item">
					<span class="text">
						{{item.name}}
					</span>
				</li>
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
		data(){
			return {
				goods: []
			}
		},
		created(){
			const url = '/api/goods';
			this.$http.get(url).then((response) =>{
				response = response.data;
//				console.log(response);
				if(response.errno === 0){
					console.log(response.data);
					this.goods = response.data;
				}
			})
			.catch((error) =>{
				console.log(error);
			})
	}
}
</script>

<style lang='scss' scoped>
	.good{
		display:flex;
		position: absolute;
		top: 174px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
		.menu-wrapper{
			width: 80px;
			background: #f3f5f7;
			.menu-item{
				height: 54px;
				width: 56px;
				.text{
					font-size: 12px;
					vertical-align: middle;
					display: inline-block;
					width: 56px;
				}
			}
		}
		
		
	}
</style>