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
			<div class="count">
				
			</div>
		</div>

	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.header{
		position: fixed;
		width: 100%;
		color: #fff;
		background: rgba(7,17,27,0.5);
		height: 134px;
		top: 0;
		.content{
			position: relative;
			padding: 24px 12px 18px 24px;
			
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
							background: url(brand@2x.png) 30px 18px;
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
							background: url(decrease_1@2x.png);
						}
					}		
			}

		}
	}
	
</style>
