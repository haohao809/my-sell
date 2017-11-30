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
	import Scroll from '@/components/scroll/scroll'
	import Shopcart from '@/components/shopcart/shopcart'
	export default{
		data(){
			return {
				goods: []
			}
		},
//		components: {
//			Scroll
//		},
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
				padding: 0 12px;
				line-height: 14px;
				display: table;
				.text{
					font-size: 12px;
					display: table-cell;
					vertical-align: middle;
					width: 56px;
				}
			}
		}
		
		
	}
</style>