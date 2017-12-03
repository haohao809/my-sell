<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo" :class="{'heighlight': totalCount>0}">
						<i class="icon-shopping_cart"></i>
					</div>
					<div class="num" v-show="totalCount>0">
						{{totalCount}}
					</div>
				</div>
				<div class="price" :class="{'heighlight': totalCount>0}">￥{{totalPrice}}</div>
				<div class="desc">另需配送费￥4元</div>
			</div>
			<div class="content-right">
				<div class="pay" :class='payclass'>{{paydesc}}</div>
			</div>
		</div>
		<div class="ball-container">
			<div v-for='ball in balls'>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			selectFoods:{
				type: Array,
				default(){
					return [
						{
							price: 10,
							count: 1
						}					
					];
				}
			}
		},
		data(){
			return {
				    balls: [
			          {
			            show: false
			          },
			          {
			            show: false
			          },
			          {
			            show: false
			          },
			          {
			            show: false
			          },
			          {
			            show: false
			          }
			        ],
			}
		},
		computed:{
			totalPrice(){
				let total = 0;
				this.selectFoods.forEach((food) =>{
					total += food.price*food.count;
				})
				return total
			},
			totalCount(){
				let count = 0;
				this.selectFoods.forEach((food) =>{
					count += food.count;
				})
				return count;
			},
			paydesc(){
				if(this.totalPrice === 0){
					return '￥20元起送'
				}
				if(this.totalPrice<20){
					let diff = 20 - this.totalPrice;
					return '还差￥' + diff + '元起送'
				}
				return '去结算'
			},
			payclass(){
				if(this.totalPrice<20){
					return 'not-enough'
				}else{
					return 'enough'
				}
			}
		},
		methods:{
			drop(el){
				
			}
		}
	}
</script>

<style lang='scss' scoped>
	.shopcart{
		position: fixed;
		height: 48px;
		width:100%;
		left: 0;
		bottom: 0;
		z-index: 50;
		.content{
			background: #141d27;
			display: flex;
			color: rgba(255,255,255,0.4);
			.content-left{
				flex: 1;
				.logo-wrapper{
					position: relative;
					display: inline-block;
					margin: 0 12px;
					width:56px;
					height:56px;
					border-radius:50%;
					top:-10px;
					background:#141d27;
					padding: 6px;
					vertical-align: top;
					box-sizing: border-box;
					.logo{
						width: 100%;
						height: 100%;
						text-align: center;
						background: #2b343c;
						border-radius:50%;
						.icon-shopping_cart{
							line-height: 44px;
							font-size: 24px;
							color: #80858a;
						}
					}
					.num{
						position:absolute;
						color: #fff;
						background: #F01414;
						width: 24px;
						height: 16px;
						border-radius: 10px;
						text-align: center;
						font-size: 9px;
						top: 0px;
						left: 30px;
						line-height: 16px;
					}
					.highlight{
						color:#fff;
						background: #00A0DC;
					}

				}
				.price{
					line-height: 24px;
					font-size: 16px;
					display: inline-block;
					font-weight: bold;
					margin-top: 12px;
				}
				.heighlight{
					color: #fff;
				}
				.desc{
					display: inline-block;
					line-height: 24px;
					font-size: 10px;
					margin: 12px 0 0 12px
				}

			}
			.content-right{
				width: 105px;
				background: #2b333b;
				.pay{
					font-size:12px;
					height: 48px;
					line-height: 48px;
					text-align: center;
					font-weight: bold;
				}
				.not-enough{
					background: #2b333b;
				}
				.enough{
					color: #fff;
					background: #00B43C;
				}
			}
		}
	}
</style>