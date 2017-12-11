<template>
	<div class="ratings">
		<div class="ratings-content">
			<div class="overview">
				<div class="over-left">
					<h1 class='score'>{{seller.score}}</h1>
					<div class="title">
						综合评分
					</div>
					<div class="compare">
						高于周边商家{{seller.rankRate}}%
					</div>
				</div>
				<div class="over-right">
					<div class="score-wrapper">
						<span class='text'>服务态度</span>
						<star></star>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class='text'>商品评分</span>
						<star></star>
						<span class="score">{{seller.foodScore}}</span>
					</div>
					<div class="delivery">
						<span class='text'>送达时间</span>
						<span class="delivery-time">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
			<div class="split">
				
			</div>
			<ratingTab></ratingTab>
		</div>
		<div class="rating-wrapper">
			
		</div>
	</div>
</template>

<script>
	import ratingTab from '@/components/ratingtab/ratingtab'
	import star from '@/components/star/star'
	export default{
		components:{
			ratingTab,
			star
		},
		props:{
			seller: Object
		},
		created(){
			console.log(this.seller);
		}
	}
</script>

<style lang='scss' scoped>
.ratings{
	.overview{
		display: flex;
		padding: 18px 0;
		.over-left{
			text-align: center;
			border-right: 1px solid rgba(7,17,27,0.1);
			padding-right: 5px;
			.score{
				font-size:24px;
				margin-bottom: 6px;
				color: #f90;
			}
			.title{
				font-size: 12px;
				margin-bottom: 6px;
				color: #07111b;
			}
			.compare{
				font-size: 10px;
				color: #93999f;
				padding-left: 5px;
			}
		}
		.over-right{
			padding-left: 5px;
			flex: 1;
			.score-wrapper,.delivery{
				margin-bottom: 8px;
				.score{
					font-size: 12px;
					color: #f90;
				}
				
			}
			.text{
				font-size: 10px;
			}
			.delivery-time{
				font-size: 12px;
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