<template>
	<div class="food" v-show='showFlag'>
		<div class="food-content">
			<div class="image-header">
				<img :src="food.image"/>
				<div class="back" @click='back'>
					<i class='icon-arrow_lift'></i>
				</div>
			</div>
			<div class="content">
				<h1 class='title'>{{food.name}}</h1>
				<div class="detail">
					<span class='sell-count'>月售份{{food.sellCount}}份</span>
					<span calss='rating'>好评率{{food.rating}}%</span>
				</div>
				<div class="price">
				 <span class="now">￥{{food.price}}</span>
				 <span class="old">￥{{food.oldPrice}}</span>
				</div>
				<div class="cartcontrol-wrapper">
					
				</div>
			</div>
			<div class="split">
				
			</div>
			<div class="desc">
				
			</div>
			<div class="split">
				
			</div>
			<div class="rating">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			food:{
				type: Object
			}
		},
		data(){
			return {
				showFlag: false
			}
		},
		watch: {
			food(){
				console.log(this.food);
			}
			
		},
		methods:{
			show(){
				this.showFlag = true;
			},
			back(){
				this.showFlag = false;
			}
		}
	}
</script>

<style lang='scss' scoped>
	.food{
		position: fixed;
		top: 0;
		bottom: 48px;
		left: 0;
		right: 0;
		z-index: 30;
		background: #fff;
		.image-header{
			position: relative;
			width: 100%;
			height: 0;
			padding-top: 100%;
			img{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				
			}
			.back{
				position: absolute;
				top: 10px;
				left: 0;
				.icon-arrow_lift{
					display: block;
					font-size: 20px;
					color: #fff
				}
			}

		}
		.content{
			position: relative;
			padding: 18px;
			.title{
				font-size: 14px;
				line-height: 14px;
				font-weight: bold;
				color: #07111b;
				margin-bottom: 8px;
			}
			.detail{
				font-size: 10px;
				color:#93999f;
				margin-bottom: 10px;
			}
			.price{
				line-height: 14px;
				font-weight: bold;
				font-size: 14px;
				.now{
					color: #f01414;
					font-size: 14px;
				}
				.old{
					color: #93999f;
					font-size: 10px;
					text-decoration: line-through;
				}
			}
		}
		.split{
			width: 100%;
			height: 16px;
			border-bottom: 1px solid rgba(7,17,27,0.1);
			border-top: 1px solid rgba(7,17,27,0.1);
			background: #f3f5f7;
		}
	}
</style>