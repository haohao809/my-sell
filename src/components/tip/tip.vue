<template>
	<div class="tip" v-show='tipFlag'>
		<h1>支付{{price}}元</h1>
		<div class="option">
			<span class="tip-item border" >确定</span>
			<span class="tip-item" @click='tipHide'>取消</span>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:{
			price:{
				type: Number,
				default: 0
				
			}
		},
		data(){
			return {
				tipFlag: false
			}
		},
		methods:{
			tipShow(){
				this.tipFlag = true;
			},
			tipHide(){
				this.tipFlag = false;
				this.$emit('hide');
			}
		}
	}
</script>

<style lang='scss' scoped>
	.tip{
		width:180px;
		background: #FFF;
		border-radius: 5px;
		h1{
			text-align: center;
			height: 30px;
			line-height: 30px;
			border-bottom: 1px solid #7E8C8D;
			padding: 3px;
		}
		.option{
			text-align: center;
				.tip-item{
					height: 30px;
					line-height: 30px;
					text-align: center;
					display: inline-block;
					width: 40%;
					padding: 3px;
				}
				.border{
					border-right: 1px solid #7E8C8D;
				}
		}

	}
</style>