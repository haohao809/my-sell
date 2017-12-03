<template>
	<div class="cartcontral">
		<transition name='move'>
			<div class="cart-decrease" v-show="food.count>0" @click="decrease">
				<span class="inner icon-remove_circle_outline"></span>
			</div>
		</transition>
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
			addcart(event){
				console.log(this.food.count)
				if(!this.food.count){
					Vue.set(this.food,'count',1);
					console.log(this.food);
				}else{
					this.food.count++;
				}
				this.$emit('add',event.target)
			},
			decrease(event){
				if(this.food.count){
					this.food.count--;
				}else{
					this.food.count = 0;
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
			transform:translate3d(0,0,0);
			.inner{
				line-height: 24px;
				font-size: 24px;
				color: #00a0dc;
				transition:all 0.4s linear;
				transform: rotate(0);
				display: inline-block;
			}

		}
		.move-enter-active,.move-leave-active{
					transition: all 0.4s linear;
				}
		.move-enter, .move-leave-to{
					opacity: 0;
					transform: translate3d(24px,0,0);
					.inner{
						transform: rotate(180deg);
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