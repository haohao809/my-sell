<template>
<div>	
	<div class="shopcart" >
		<div class="content" @click='toggleList'>
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
			<div class="content-right" @click.stop.prevent="pay">
				<div class="pay" :class='payclass'>{{paydesc}}</div>
			</div>
		</div>
		<div class="ball-container">
			<div v-for='ball in balls'>
				<transition name='drop' @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
					<div class="ball" v-show='ball.show'>
						<div class="inner inner-hook"></div>
					</div>
				</transition>
			</div>
		</div>
			<transition name='fold'>
			<div class="shopcart-list" v-show='listShow'>
				<div class="list-header">
					<h1 class='title'>购物车</h1>
					<span class="empty" @click="empty">清空</span>
				</div>
				<div class="list-content">
					<ul>
						<li v-for='item in selectFoods' class="food">
							<span class="name">{{item.name}}</span>
							<span class="price">￥{{item.price*item.count}}</span>
							<div class="cartcontrol-wrapper">
								<cartcontral @add="addFood" :food='item'></cartcontral>
							</div>
						</li>
					</ul>
				</div>				
			</div>
			</transition>
	</div>
	<transition name='fade'>
		<div class="mask" v-show='maskShow'></div>
	</transition>
	<div class="tip-wrapper">
		<tip :price='totalPrice' ref='tip' @hide='hideMask'></tip>
	</div>
</div>
</template>

<script>
	import cartcontral from '@/components/cartcontral/cartcontral'
	import tip from '@/components/tip/tip'
	export default{
		components:{
			cartcontral,
			tip
		},
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
			        dropBalls: [],
			        fold: true,
			        maskShow: false
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
			totalCount() {
				let count = 0;
				console.log(this.selectFoods);
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
			},
			listShow(){
				if(!this.totalCount){
					this.fold = true;
					this.maskShow = false;
					return false;
				}
				let show = !this.fold;
				return show;
			}
		},
		methods:{
			drop(el){
				for(let i=0; i< this.balls.length;i++){
					let ball = this.balls[i];
					if(!ball.show){
						ball.show=true;
						ball.el = el;
						this.dropBalls.push(ball);
						return;
					}
				}
			},
			addFood(target){
				this.drop(target);
			},
			beforeDrop(el){
				let count = this.balls.length;
				while(count--){
					let ball = this.balls[count];
					if(ball.show) {
						let rect = ball.el.getBoundingClientRect();
						let x = rect.left -32;
						let y = -(window.innerHeight - rect.top -22);
						el.style.display = '';
						el.style.webkitTransform = `translate3d(0,${y}px,0)`;
						el.style.transform = `translate3d(0,${y}px,0)`;
						let inner = el.getElementsByClassName('inner-hook')[0];
						inner.style.transform = `translate3d(${x}px,0,0)`;						
					}
				}
			},
			dropping(el,done){
				let rf = el.offsetHeight;
				this.$nextTick(()=>{
					el.style.transform = 'translate3d(0,0,0)';
					el.style.webkitTransform = 'translate3d(0,0,0)';
					let inner = el.getElementsByClassName('inner-hook')[0];
					inner.style.webkitTransform = 'translate3d(0,0,0)';
					inner.style.transform = 'translate3d(0,0,0)';
					el.addEventListener('transitionend', done);
				})
			},
			afterDrop(el){
				let ball = this.dropBalls.shift();
				if(ball){
					ball.show = false;
					el.style.display = 'none';
				}
			},
			toggleList(){
				if(!this.totalCount){
					return;
				}
				this.maskShow = this.fold;
				this.fold = !this.fold;
				
			},
			empty(){
//				console.log(this.selectFoods);
				this.selectFoods.forEach((food) => {
			          food.count = 0;
			  });
			},
			pay(){
				if(this.totalPrice >= 20){
					this.$refs.tip.tipShow();
					this.maskShow = true;
				}
			},
			hideMask(){
				this.maskShow = false;
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
		.ball-container{
			.ball{
				position: fixed;
				left: 32px;
        		bottom: 22px;
        		z-index: 200;
        		transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        		.inner{
        			width: 16px;
          			height: 16px;
          			border-radius: 50%;
          			background: rgb(0, 160, 220);
          			transition: all 0.4s linear;
        		}
			}
		}

		.shopcart-list{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: -1;
			transform: translate3d(0,-100%,0);
			&.fold-enter-active, &.fold-leave-active{
				transition: all  0.5s;
			}
			&.fold-enter, &.fold-leave-to{
				transform: translate3d(0,0,0);
			}
			.list-header{
				height: 40px;
				line-height: 40px;
				background: #f3f5f7;
				padding: 0 18px;
				.title{
					float: left;
				}
				.empty{
					float: right;
					color: #00a0dc;
					font-size: 12px;
				}
			}
			.list-content{
				max-height: 217px;
				overflow: hidden;
				background: #FFF;
				padding: 0 18px;
				.food{
					position: relative;
					background: #fff;
					padding: 12px 0;
					.name{
						line-height: 24px;
						font-size: 14px;
   						 color: #07111b
					}
					.price{
						font-size: 14px;
						line-height: 24px;
						color:#f01414;
						font-weight: bold;
						position: absolute;
						right: 90px;
					}
					.cartcontrol-wrapper{
						display: inline-block;
						position: absolute;
						right: 0px;
						top: 7px;
					}
				}
			}
		 }
	}
	.mask{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 40;
		opacity: 1;
		background: rgba(7,17,27,0.6);
		&.fade-enter-active, &.fade-leave-active{
			transition: all  0.5s;
		}
		&.fade-enter, &.fade-leave-to{
			opacity: 0;
			background: rgba(7, 17, 27, 0)
		}
	}
	.tip-wrapper{
		position: absolute;
		top: 50%;
		left:50%;
		transform: translate(-50%,-50%);
		z-index: 50;
	}
</style>