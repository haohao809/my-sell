<template>
	<transition name='move'>
	<Scroll class="food" v-show='showFlag' ref='scroll'>
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
				 <span class="old" v-show='food.oldPrice'>￥{{food.oldPrice}}</span>
				</div>
				<div class="cartcontrol-wrapper">
					<cartcontral  :food='food' @add='addfood' ref='cart'></cartcontral>
				</div>
				<div class="buy" @click.stop.prevent='addCartFirst' v-show="!food.count || food.count===0">
						加入购物车
				</div>
			</div>
			<div class="split">
				
			</div>
			<div class="desc">
				<h1>商品信息</h1>
				<span class='food-info'>{{food.info}}</span>
			</div>
			<div class="split">
				
			</div>
			<div class="rating">
				<h1>商品评价</h1>
				<ratingtab @showContent='showContent' @selectTab='selectTab' :text='text' :count='count'></ratingtab>
				<div class="ratng-wrapper">
					<ul v-show="food.ratings && food.ratings.length">
						<li v-show='needShow(rate)' v-for='rate in food.ratings' class='rate-item'>
							<div class="rate-time">
								{{setTime(rate.rateTime)}}
							</div>
							<div class="user">
								<span>{{rate.username}}</span>
								<img :src="rate.avatar" width="12" height="12"/>
							</div>
							<p class="text">
								<span :class="{'icon-thumb_up':rate.rateType===0,'icon-thumb_down':rate.rateType===1}"></span>	
							{{rate.text}}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Scroll>
	</transition>
</template>

<script>
	import cartcontral from '@/components/cartcontral/cartcontral'
	import Vue from 'vue'
	import Scroll from '@/components/scroll/scroll'
	import ratingtab from '@/components/ratingtab/ratingtab'
	export default{
		components:{
			cartcontral,
			Scroll,
			ratingtab
		},
		props:{
			food:{
				type: Object
			}
		},
		data(){
			return {
				showFlag: false,
				cartShow: true,
				onlyContent: true,
				tab: 2,
				text:{
					all: '全部',
					recommend: '推荐',
					whine: '吐槽'
				},
				count:{
					all: 3,
					recommend: 2,
					whine: 1
				}
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
			},
			addCartFirst(event){
//				if (!event._constructed) {
//		          return;
//		        }
				this.cartShow = false;
				 console.log(event.target);
				 //先emit,后执行count=1
				 this.$emit('add', event.target);
				 Vue.set(this.food,'count',1)
//				 this.$refs.cart.addcart(event); //不能执行这个，这个顺序先将target不显示，再执行emit 消失的target
			},
			addfood(val){
				this.$emit('add',val);
			},
			setTime(time){
				let timeS = new Date(time);
				timeS = timeS.toLocaleString()
				return timeS;
			},
			needShow(rate){
//				console.log(this.onlyContent);
//				console.log(this.tab);
				if(this.onlyContent && !rate.text){
					return false;
				}
				if(this.tab === 2){
					return true;
				}else {
					return rate.rateType === this.tab;
				}
			},
			showContent(){
				this.onlyContent = ! this.onlyContent;
				this.$nextTick(() => {
		          this.$refs.scroll.refresh();
		        });
			},
			selectTab(type){
				this.tab = type;
				this.$nextTick(() => {
		          this.$refs.scroll.refresh();
		        });
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
		z-index: 30;
		background: #fff;
		width: 100%;
		transform: translate3d(0,0,0);
		&.move-enter-active,&.move-leave-active{
			transition: all 0.2s linear;
		}
		&.move-enter,&.move-leave-to{
			transform: translate3d(100%,0,0);
		}
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
			.cartcontrol-wrapper{
				position: absolute;
				right: 12px;
				bottom: 12px;
			}
			.buy{
				font-size: 10px;
				background: #00A0DC;
				color: #fff;
				line-height: 24px;
				height: 24px;
				padding: 0 12px;
				border-radius: 10px;
				position:absolute;
				right: 18px;
				bottom: 18px;
				z-index: 10;
			}
		}
		.split{
			width: 100%;
			height: 16px;
			border-bottom: 1px solid rgba(7,17,27,0.1);
			border-top: 1px solid rgba(7,17,27,0.1);
			background: #f3f5f7;
		}
		.desc{
			padding: 15px;
			h1{
				font-size: 14px;
				padding-bottom: 5px;
			}
			.food-info{
				font-size: 10px;
				height: 24px;
				line-height: 24px;
			}
		}
		.rating{
			padding: 15px;
			h1{
				font-size: 14px;
				padding-bottom: 5px;
			}
			.ratng-wrapper{
				padding: 0 18px;
				.rate-item{
					padding: 16px 0;
					position: relative;
					border-bottom: 1px solid rgba(77, 85, 93, 0.2);
					.rate-time{
						font-size: 10px;
						color: #93999f;
					}
					.user{
						font-size:10px;
						position: absolute;
						right: 5px;
						top: 16px;
						color: #93999f;
						img{
							border-radius: 50%;
						}
					}
					.text{
						margin-top: 6px;
						line-height: 16px;
						font-size: 12px;
						.icon-thumb_up, .icon-thumb_down{
							
							margin-right: 4px;
							line-height: 16px;
						}
						.icon-thumb_up{
							color: rgb(0, 160, 220)
						}
						.icon-thumb_down{
							color: rgb(147, 153, 159)
						}
					}
				}
			}
		}
	}
</style>