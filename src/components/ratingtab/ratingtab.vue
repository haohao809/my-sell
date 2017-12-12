<template>
<div class="rateType">
		<span class="block positive" :class='{"active": select===2}' @click='all'>
			{{text.all}}<span>{{count.all}}</span>
		</span>
		<span class="block positive" :class='{"active": select===0}' @click="recommend">
			{{text.recommend}}<span>{{count.recommend}}</span>
		</span>
		<span class='block negative' :class='{"deactive": select===1}' @click="whine">
			{{text.whine}}<span>{{count.whine}}</span>
		</span>
		<p class="desc" :class='{on: toggle}' @click="toggleContent">
			<i class="icon-check_circle"></i>
			<span class="text">只看有内容评价</span>
		</p>
	</div>
</template>

<script>
	export default{
		props:{
			text: {
				type: Object,
				default() {
					return{
						all: '全部',
						recommend: '满意',
						whine: '不满意'
					}

				}
			},
			count: {
				type: Object,
				default(){
					return{
						all: 0,
						recommend: 0,
						whine: 0
					}
				}
			}
		},
		data(){
			return {
				select: 2,
				toggle: true
			}
		},
		methods:{
			all(){
				this.select = 2;
				this.$emit('selectTab', this.select);
			},
			recommend(){
				this.select = 0;
				this.$emit('selectTab', this.select);
			},
			whine(){
				this.select = 1;
				this.$emit('selectTab', this.select);
			},
			toggleContent(){
				this.toggle = !this.toggle;
				this.$emit('showContent');
			}
		},
	}
</script>

<style lang='scss'>
	.rateType{
		padding: 18px 0;
		font-size: 12px;
		.block{
			display: inline-block;
			width: 50px;
			height: 30px;
			background: rgba(0,160,220,0.2);
			text-align: center;
			line-height: 30px;
			color: #4d555d;
			margin-right: 8px;
		}
		.negative{
			background:rgba(77,85,93,0.2)
		}
		.active{
			color: #fff;
			background: #00a0dc;
		}
		.deactive{
			color: #fff;
			background: #4d555d;
		}
		.desc{
			margin-top: 10px;
			padding: 12px 0px;
			color: #93999f;
			border-top: 1px solid rgba(7,17,27,0.1);
			border-bottom: 1px solid rgba(7,17,27,0.1);
			.icon-check_circle{
				display: inline-block;
				font-size: 24px;
				vertical-align: top;
			}
			.text{
				height: 24px;
				line-height: 24px;
				display: inline-block;
			}
		}
		.on{
			.icon-check_circle{
				color: #00c850;
			}
			
		}
	}
</style>