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
		z-index: 80;
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
	}
</style>