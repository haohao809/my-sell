<template>
	<Scroll class="seller">
		<div class="sell-content">
			<div class="overview">
				<h1 class="name">锦城南(面馆)</h1>
				<div class="desc">
					<star :score='seller.foodScore' size='36'></star>
					<span class='ratingCount'>({{seller.ratingCount}})</span>
					<span class='sellCount'>月售{{seller.sellCount}}单</span>
				</div>
				<div class="favorite" @click="toggle">
					<i class="icon-favorite" :class='{active: !collectFlag}'></i>
					<span class="text">{{collect}}</span>
				</div>
				<div class="mark">
					<span class="minPrice">
						<h2 class="text">起送价</h2>
						<span class="count">{{seller.minPrice}}<span class="unit">元</span></span>
					</span>
					<span class="deliveryPrice">
						<h2 class="text">商家配送</h2>
						<span class="count">{{seller.deliveryPrice}}<span class="unit">元</span></span>
					</span>
					<span class="deliverTime">
						<h2 class="text">平觉配送时间</h2>
						<span class="count">{{seller.deliveryTime}}<span class="unit">分钟</span></span>
					</span>
				</div>
			</div>
			<div class="split"></div>
			<div class="bullenin">
				<h1 class="title">公告及活动</h1>
				<div class="content">
					<p>{{seller.bulletin}}</p>					
				</div>
				<ul>
					<li v-for='item in seller.supports' class='suport-item'>
						<span class='icon' :class="classMap[item.type]"></span>
						<span class="text">{{item.description}}</span>
					</li>
				</ul>
			</div>
			<div class="split"></div>
			<div class="pics">
				<h1 class="title">商品实景</h1>
				<Scroll class="pic-wrapper" direction='horizontal' ref='picScroll' :data='seller.pics' :probeType='probeType' :scrollX='scrollX'>
					<div class="pic-total" ref='pic'>					
						<div class="img-item" v-for='item in seller.pics'>
							<img :src="item" width="120" height="90"/>
						</div>	
					</div>
				</Scroll>
			</div>
			<div class="split"></div>
			<div class="info">
				<h1 class="title">商品信息</h1>
				<div class="sell-info">
					<p v-for='item in seller.infos' class="sell-item">{{item}}</p>
				</div>
			</div>
		</div>
	</Scroll>
</template>

<script>
	import star from '@/components/star/star'
	import Scroll from '@/components/scroll/scroll'
	export default{
		props:{
			seller: {
				type: Object
			}
		},
		components:{
			star,
			Scroll
		},
		data() {
			return {
				classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
				probeType: 2,
				scrollX: true,
				collectFlag: true,
				collect: '收藏',
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.initPics();
			})
		},
		watch:{
			seller(){
				this.$nextTick(()=>{
					this.initPics();
				})
			}
		},
		methods:{
			initPics(){
			if (this.seller.pics) {
					let picWidth =120;
					let margin = 10;
					let picTotalWidth = (picWidth+margin)*this.seller.pics.length - margin;
					this.$refs.pic.style.width = picTotalWidth + 'px';
					this.$refs.picScroll.refresh();
				}
			},
			toggle(){
				this.collectFlag = !this.collectFlag;
				if(this.collectFlag){
					this.collect = '收藏';
				}else{
					this.collect = '已收藏';
				}
			}
		}
		
	}
</script>

<style scoped lang='scss'>
	.seller{
		position: absolute;
		top:174px;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		.overview{
			padding: 18px;
			position: relative;
			.name{
				font-size: 14px;
				margin-bottom: 8px;
				line-height: 14px;
				color:#07111B
			}
			.desc{
				border-bottom: 1px solid rgba(7,17,27,0.1);
				padding-bottom: 10px;
				.ratingCount,.sellCount{
					font-size: 10px;
					color: #93999F
				}
			}
			.favorite{
				position: absolute;
				right: 11px;
				top: 10px;
				text-align: center;
				width: 50px;
				.icon-favorite{
					display: block;
					line-height: 24px;
					height: 24px;
					color: #d4d6d9;
					margin-bottom: 4px;
					font-size: 24px
				}
				.active{
					color:red;
				}
				.text{
					font-size: 12px;
					color: #4d555d;
				}
			}
			.mark{
				padding-top: 18px;
				display: flex;
				.minPrice,.deliveryPrice,.deliverTime{
					text-align: center;
					flex: 1;
					border-right: 1px solid rgba(7, 17, 27, 0.1);
					.text{
						display: inline-block;
						font-size: 10px;
						color: #93999f;
					}
					.count{
						font-size:24px;
						line-height: 24px;
						display: inline-block;	
						width: 100%;					
						.unit{
							font-size: 10px;
						}				
					}
				}
				.deliverTime{
					border-right:none;
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
		.bullenin{
			padding: 18px;
			.title{
				font-size:14px;
				color:#07111b;
				margin-bottom: 8px;
				line-height: 14px;
			}
			.content p{
				font-size: 12px;
				line-height: 24px;
				color:#f01414
			}
			.suport-item{
				line-height: 16px;
				border-top: 1px solid rgba(7,17,27,0.1);
				padding: 16px 12px;
				.text{
					font-size: 12px;
					color: #07111B;
					
				}
				.icon{
					display: inline-block;
					width: 16px;
					height: 16px;
					margin-right: 6px;
					background-size: 16px 16px;
					vertical-align: top;
				}
				.decrease{
					background-image: url('decrease_4@2x.png');
				}
				.discount{
					background-image: url('discount_4@2x.png');
				}
				.special{
					background-image: url('special_4@2x.png');
				}
				.invoice{
					background-image: url('invoice_4@2x.png');
				}
				.guarantee{
					background-image: url('guarantee_4@2x.png');
				}
			}
		}
		.pics{
			padding: 18px;
			width: 100%;
			.title{
				font-size:14px;
				color:#07111b;
				margin-bottom: 8px;
				line-height: 14px;
			}
			.pic-wrapper{				
				width: 100%;
				overflow: hidden;
				.pic-total{
					display: flex;
					.img-item{
						flex: 1;
						margin-right: 10px;
						width: 120px;
            			height: 90px;
					}
				}

			}
		}
		.info{
			padding: 18px;
			.title{
				font-size:14px;
				color:#07111b;
				margin-bottom: 8px;
				line-height: 14px;
			}
			.sell-item{
				line-height: 16px;
				font-size: 12px;
				border-top: 1px solid rgba(7,17,27,0.1);
				padding: 16px 12px;
			}
		}
	}
</style>