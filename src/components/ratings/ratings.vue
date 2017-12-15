<template>
	<scroll class="ratings" :data='ratings' ref="ratings">
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
						<star :score='seller.serviceScore' size="36"></star>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class='text'>商品评分</span>
						<star :score='seller.foodScore' size="36"></star>
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
			<div class="tab-wrapper">
				<ratingTab :count='count' @selectTab='selectTab' @showContent='showContent'></ratingTab>
			</div>
			<div class="rating-wrapper">
			<ul>
				<li v-for='(rate,index) in ratings' class="rate-item" v-show='needShow(rate)'>
					<div class="avatar">
						<img :src="rate.avatar" width="28" height="28" />
					</div>
					<div class="content">
						<h1 class="name">{{rate.username}}</h1>
						<span class='time'>{{rate.rateTime|format}}</span>
						<div class="star-wrapper">
							<star :score='rate.score' size="24"></star>
							<span class="delivery" v-show='rate.deliveryTime'>{{rate.deliveryTime}}分钟</span>
						</div>
						<p class="text">{{rate.text}}</p>
						<div class="recommend" v-show="rate.recommend && rate.recommend.length">
							<i class='icon-thumb_up'></i>
							<span class="item" v-for='item in rate.recommend'>{{item}}</span>
						</div>
					</div>

					
				</li>
			</ul>
		</div>
		</div>

	</scroll>
</template>

<script>
	import ratingTab from '@/components/ratingtab/ratingtab'
	import star from '@/components/star/star'
	import Scroll from '@/components/scroll/scroll'
	export default{
		components:{
			ratingTab,
			star,
			Scroll
		},
		props:{
			seller: Object
		},
		data(){
			return {
				count:{
					all: 0,
					recommend: 0,
					whine: 0
				},
				ratings: [],
				rateType: 2,
				onlyContent: true
			}
		},
		filters:{
			format(value){
				if(!value) return;
				let formatTime = new Date(value);
				return formatTime.toLocaleString();
			}
		},
		created(){
			console.log(this.seller);
			let  url = '/api/ratings';
			this.$http.get(url).then((response) =>{
				response = response.data;
//				console.log(response);
				if(response.errno === 0){
					let ratingsArr = response.data;
					this.ratings = ratingsArr;
					this.count.all = ratingsArr.length;
					let goodrating = 0;
					let badrating = 0
					ratingsArr.map((item)=>{
						if(item.rateType===0){
							goodrating++;
						}else{
							badrating++;
						}
					})
					this.count.recommend = goodrating;
					this.count.whine = badrating;
				}
			})
		},
		methods:{
			selectTab(value){
//				console.log(value);
				this.rateType = value;
				this.$nextTick(()=>{
					this.$refs.ratings.refresh()
				})
			},
			//根据选择的tab和显示内容，显示对应的评论
			needShow(rate){
				if(this.onlyContent &&! rate.text){
					return false;
				}
//				console.log(rate.rateType);
				if(this.rateType === 2){
					return true;
				}else{
					return rate.rateType === this.rateType;
				}
				
				
			},
			showContent(){
				this.onlyContent = !this.onlyContent;
				this.$nextTick(()=>{
					this.$refs.ratings.refresh()
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
.ratings{
	position: absolute;
	top:174px;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
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
				color: #93999f
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
	.tab-wrapper{
		margin: 0 18px;
	}
	.rating-wrapper{
		margin: 0 18px;
		.rate-item{
			display: flex;
        	padding: 18px 0;
        	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        	position: relative;
			.avatar img{
				border-radius: 50%;
			}
			.content{
				position: relative;
				flex: 1;
				margin-left: 12px;
				.name{
					font-size: 10px;
				}
				.time{
					font-size: 10px;
					position: absolute;
					right: 18px;
					color: #93999f;
					top: 0;
				}
				.star-wrapper{
					.delivery{
						font-size: 10px;
						color: #93999f;
					}
				}
				.text{
					font-size: 10px;
					margin-top: 5px;
					line-height: 18px;
				}
				.recommend{
					.icon-thumb_up{
						color: #00a0dc;
						font-size: 9px;
					}
					.item{
						font-size: 10px;
						border: 1px solid rgba(7,17,27,0.1);
						display: inline-block;
						margin: 3px;
						padding: 3px 5px;
						color: #93999f;
						background: #fff;
					}
				}
				
			}
		}

	}
	
}

</style>