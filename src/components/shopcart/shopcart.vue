<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo">
						<i class="icon-shopping_cart"></i>
					</div>
				</div>
				<div class="price">￥</div>
				<div class="desc">另需配送费￥4元</div>
			</div>
			<div class="content-right">
				<div class="pay"></div>
			</div>
		</div>
	</div>
</template>

<script>
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
						line-height: 24px;
						font-size: 24px;
						color: #80858a;
					}
					}

				}

			}
			.content-right{
				width: 105px;
			}
		}
	}
</style>