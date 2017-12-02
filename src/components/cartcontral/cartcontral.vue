<template>
	<div class="cartcontral">
		<div class="cart-decrease" v-show="food.count>0">
			<span class="inner icon-remove_circle_outline"></span>
		</div>
		<div class="count" v-show="food.count>0">
			{{food.count}}
		</div>
		<div class="cart-add icon-add_circle" @click="addcart">
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default{
		props:{
			food:{
				type: Object
			}
		},
		methods:{
			addcart(){
				console.log(this.food.count)
				if(!this.food.count){
					Vue.set(this.food,'count',1);
				}else{
					this.food.count++;
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
	.cartcontral{
		font-size: 0;
		.cart-decrease{
			display: inline-block;
			opacity: 1;
			padding: 6px;
			.inner{
				line-height: 24px;
				font-size: 24px;
				color: #00a0dc;
				display: inline-block;
			}

		}
		.count{
			display: inline-block;
			width: 12px;
			font-size: 10px;
			text-align: center;
			line-height: 24px;
			color: #93999f;
			vertical-align: top;
			padding-top: 6px;
		}
		.cart-add{
			line-height: 24px;
			font-size: 24px;
			color: #00a0dc;
			display: inline-block;
			padding: 6px
		}
	}
</style>