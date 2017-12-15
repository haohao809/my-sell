<template>
	<div class="header">
		<div class="content">
			<div class="imgicon">
				<img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
			</div>
			<div class="text">
				<div class="title">
					<span class="brand"></span>
					<span class="name">锦城南(面馆)</span>
				</div>
				<div class="description">
					<span>饿了吗传送/30分钟送到</span>
				</div>
				<div class="support">
					<span class="icon decrease"></span>
					<span class="tip">在线支付满20减5元</span>
				</div>
			</div>
			<div class="count" @click='showSeller'>
				<span class="num">5个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showSeller">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">
				粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
			</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img width="100%" height="100%" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"/>
		</div>
		<div class="detail" v-show='showMask'>
			<div class="detail-wrapper">
				<div class="detail-main">
					<h1 class="name">锦城南(面馆)</h1>
					<div class="star-wrapper">
						<star :score='seller.score' size='48'></star>
					</div>
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul class="support">
						<li v-for='item in seller.supports' class='suport-item'>
						<span class='icon' :class="classMap[item.type]"></span>
						<span class="text">{{item.description}}</span>
					</li>
					</ul>
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<div class="bulletin">
						<p class="content">{{seller.bulletin}}</p>
					</div>
					<div class="close" @click="hideMask">
						<i class="icon-close"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import star from '@/components/star/star'
		export default {
				props:{
					seller: {
						type: Object
					}
				},
				components:{
					star
				},
				data(){
					return{
						classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
						showMask: false
					}
				},
				created(){
					console.log(this.seller);
				},
				methods:{

					showSeller(){
						this.showMask = true;
					},
					hideMask(){
						this.showMask = false;
					}
				}

		}
</script>

<style lang="scss" scoped>
	.header{
		position: fixed;
		width: 100%;
		color: #fff;
		background: rgba(7,17,27,0.5);
		height: 134px;
		top: 0;
		z-index:1;
		.content{
			position: relative;
			padding: 24px 12px 10px 24px;
			
			.imgicon{
				width: 64px;
				display: inline-block;
			}
			.text{
				margin-left: 16px;	
				display: inline-block;	
				   .title{
						margin: 2px 0 8px 0;
						.brand{
							background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjhCMERGODc0RDYwMTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjhCMERGODg0RDYwMTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OEIwREY4NTRENjAxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OEIwREY4NjRENjAxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpkNE6kAAAOnSURBVHja7Fm/M2NRFL75wSaxsxoKBX8BnYqKjoaSSmFnVHTMFootaOiomNlCp6ShVNHp6FTMrh2aZdaSZCN7v+OdzMl138t9eTEbSc7MneTFyb33O/ec73w3Yr+6usaUUt/06FGNbdd6zMY04B9NALYEOt5EYGE9cdVk1gLc6Jb4ksl8dXH8MDenkqOjKjkwoGKpFH1WvL/3j2Rvr+rY3yffwump22b6+1Vme5u+m+jrU4Wzs9f7WFxU6dVVlRgcJB+VzarizY0zYLB00cWxY29PJYeHS89/j49pBAUo1tlJ7/MHB+pxYUEV7+5ebT61tETAaL7DQ1qH53+YnCSf4tWVesa4vFQfj45K8+J7j/Pz9Iq9Be2HLVltamABGYAgaxsfp9c/MzO+J4tgALBpCAgbgJlBhGV2dmiN7NaWelpefhvAud1dldcjKCOkZdfXo9efDowMIgdSZhV8EFgzmyIDRnq5pJA8naiW8wLcPjVVVlbt09NU97Qvnfp+YN8dS+eNrAJYZA6CL33eJKXjmiFda7gaQ62mVlbKucA7WckjvBdn7ql2Q0irdmMDUetTAsSzrFmZytUQZ/Qa9tpEEIuHPdGEx8B+xgzMgWHixLMZnJoAZpB4xUJBpCX7qYtx3zWt8/bWl/iYOINIKhRgpFBybOxFGOgeiT7Hp0GCQC/Em0CU8TmdulZgcvOYB/6urclPRJg1DXaGr+vpVgQc01Qv+50Eh0XQ95BmCASeZRqzb2JoqCQe4GNTXCZRIUA2EWECQyvidvQmNWyKCQYft0TY5ovAJbQWf5iYoLIwT/XTxUW5dvcCyKVEde6tJVtSenOTfBHISukdCvDT2loplWRkC3rxuMGg7GsyKTZqgqWLiFce0hfy8ffICAFNb2yU/Y3nxXzQ07Y5IwPmGsRCDBgLgi3NHinrtQyEjzAAWNS9JCnMwSkuNTT6rkxvgIUP5qik6OpGadlICqAAFANAUNM5fX006x7pj7TGTaqSNkiqOrY2IW5IiBgsbfscGZHXHaXml4daW+HkxFpC1iujEBp88rI3BxFX/QC21B7dkS2pLgH5+dS0Lbk0evYNEvZMZgAbRi1FsVCAw+hjF19m3pyn4OruV8u77m4aLinEvtyPrZcF76edvKVO/8sJg0iwYZNQQBLcKjgV+TJh+j6fn7+A1vra7JOYx1RHLEyCbmJyrbCl4PyrZaNY6z8PLcAtwO8f8HUT4f0JwJ/xpgnAftdj9p8AAwCeZRLH3XUY/AAAAABJRU5ErkJggg==);
							width:30px;
							height: 18px;
							background-size: 30px 18px;
							display: inline-block;
							vertical-align: top;
						}
						.name{
							line-height: 18px;
							font-weight: bold;
						}
					}
					.description{
						font-size: 12px;
						line-height: 12px;
						margin-bottom: 10px;
					}
					.support{
						font-size: 12px;
						line-height: 12px;
						.decrease{
							background-image: url(decrease_1@2x.png);
							display: inline-block;
							width:12px;
							height: 12px;
							background-size: 12px 12px;
							vertical-align: top;
						}
					}
						
			}
			.count{
				display:inline-block;
				font-size: 12px;
				background: rgba(0,0,0,0.2);
				height: 24px;
				padding: 0 8px;
				vertical-align: middle;
				border-radius: 10px;
				margin-left: 16px;
				.num{
					font-size: 10px;
					display:inline-block;
					padding-top: 6px;
				}
				.icon-keyboard_arrow_right{
			        font-size: 10px;
			        right: 12px;
			        top: 8px;
			        display:inline-block;
				}

			}

		}
		.background{
			position: absolute;
			top: 0;
			left: 0;
			filter: blur(10px);
			width: 100%;
			height: 100%;
			z-index: -1;
		}
		.bulletin-wrapper{
			height: 28px;
			line-height: 28px;
			position: relative;
			overflow: hidden;
			background: rgba(7,17,27,0.2);			
			text-overflow: ellipsis;
			padding: 0 22px 0 12px;
			.bulletin-title{
				display: inline-block;
				background-image: url(bulletin@2x.png);
				width: 22px;
				height: 12px;
				background-size: 22px 12px;
				vertical-align: middle;
			}
			.bulletin-text{
				font-size: 10px;
				margin: 0 4px;
			}
			.icon-keyboard_arrow_right{
				position: absolute;
				font-size: 10px;
				right: 12px;
				top: 8px;
			}
		}
		.detail{
			position: fixed;
			z-index: 100;
			top: 0;	
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 1;
			background: rgba(7,17,27,0.8);
			}
			.detail-wrapper{
				width: 100%;
				min-height: 100%;
				.detail-main{
					margin-top: 64px;
					padding-bottom: 64px;
					.name{
						font-weight: bold;
						text-align: center;
						font-size: 16px;
						line-height: 16px;
					}
					.star-wrapper{
						text-align: center;
						margin-top: 18px;
						padding: 2px 0;
					}
					.title{
						display: flex;
						width: 80%;
						margin: 24px auto;						
					}
					.line{
						flex: 1;
						border-bottom: 1px solid rgba(255,255,255,0.2);
						position: relative;
						top: -6px;
					}
					.text{
						font-size: 14px;
						font-weight: bold;
						padding: 0 12px;
					}
					.support{
						width: 80%;
						margin: 0 auto;
						.suport-item{
							border-top: 1px solid rgba(7,17,27,0.1);
							padding: 0px 12px;
							margin-bottom: 12px;
							.text{
								font-size: 12px;
								color: #FFF;
								font-weight: normal;
								
							}
							.icon{
								display: inline-block;
								width: 16px;
								height: 16px;
								margin-right: 3px;
								background-size: 16px 16px;
								vertical-align: top;
							}
							.decrease{
								background-image: url('decrease_1@2x.png');
							}
							.discount{
								background-image: url('discount_1@2x.png');
							}
							.special{
								background-image: url('special_1@2x.png');
							}
							.invoice{
								background-image: url('invoice_1@2x.png');
							}
							.guarantee{
								background-image: url('guarantee_1@2x.png');
							}
						}
					}
					.bulletin{
						width: 80%;
						margin: 0 auto;
						.content{
							font-size: 12px;
							line-height: 24px;
							padding: 0 12px;
						}
					}
					.close{
						font-size: 32px;
						width: 32px;
						height: 32px;
						margin: 0 auto;
						
					}
				}
			}
		}
	
</style>
