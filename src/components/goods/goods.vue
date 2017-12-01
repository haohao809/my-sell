<template>
	<div class="good">
		<scroll class="menu-wrapper" :data='goods'>
			<ul>
				<li v-for='(item,index) in goods' class="menu-item" :class="{'current' :currentindex === index}">
					<span class="text">
						<span v-show='item.type>0' class="icon" :class="classMap[item.type]"></span>{{item.name}}
					</span>
				</li>
			</ul>
		</scroll>
		<scroll class="foods-wrapper" :probeType='probeType1' :data='goods'>
			<ul>
				<li v-for='(item,index) in goods'>
					<h1 class='title'>{{item.name}}</h1>
					<ul>
						<li v-for = 'food in item.foods' class='food-item'>
							<div class="icon">
								<img width="57" height="57" :src='food.icon' />
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}份</span>
									<span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span>
									<span class="old" v-show='food.oldPrice'>￥{{food.oldPrice}}</span>
								</div>
								<div class="cartcontral-wrapper">
									<cartcontral :food='food'></cartcontral>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</scroll>
		<div>
			
		</div>
	</div>
</template>

<script>
	import Scroll from '@/components/scroll/scroll'
	import Shopcart from '@/components/shopcart/shopcart'
	import cartcontral from '@/components/cartcontral/cartcontral'
	export default{
		data(){
			return {
				goods: [],
				currentindex: 0,
				classMap:[],
				probeType1: 3
			}
		},
		components: {
			Scroll,
			Shopcart,
			cartcontral
		},
		created(){
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
			const url = '/api/goods';
			this.$http.get(url).then((response) =>{
				response = response.data;
//				console.log(response);
				if(response.errno === 0){
					console.log(response.data);
					this.goods = response.data;
				}
			})
			.catch((error) =>{
				console.log(error);
			})
	}
}
</script>

<style lang='scss' scoped>
	.good{
		display:flex;
		position: absolute;
		top: 174px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
		.menu-wrapper{
			width: 80px;
			background: #f3f5f7;
			.menu-item{
				height: 54px;
				width: 56px;
				padding: 0 12px;
				line-height: 14px;
				display: table;
				.text{
					font-size: 12px;
					display: table-cell;
					vertical-align: middle;
					width: 56px;
					.icon{
						display: inline-block;
						vertical-align: top;
						width: 12px;
						height: 12px;
						margin-right: 2px;
						background-size: 12px 12px;
					}
					.special{
						background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzEyMkUyN0Q1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzEyMkUyN0U1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMTIyRTI3QjUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMTIyRTI3QzUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pskd84kAAATBSURBVHjarFZtTJtVFH76DS2lfLQULQQnY2xukglu/hCzIRISNVOj84eKITpdsgQSY8zcYpYYF+cSNydGliXTaOKS/diELDATp4MMthFGcCIMNwKhyPhuoUAp0C+fe19ogU6NyU5y0/vee8859zznOedWhbrCUgBVHHbcXxnlqFTRwQAnmTHboQAQDgIqNaDWrdnzcy+0tKflguqfnAyKXasyVykGQ4tU0sOoS4BOpYE3OI+AWI9IGCadGWoanwl4+RmmqtDlhVTatQ5SeQUsLl0Leo1eua1vBIdz98BZfB4/bf8cRk0cEPAB/hme9uCrLe+hZ+dZ1D7+GR5NXA94B5V9EZmIKiqLUZf+WWRaNuL4IxX4Y6YPVr0FFq0JRdZ8BOncoDMiUZsAHyOy6iywG5Lxgr0QF0abkawxYLejFB92V8MroloBqXYlrnriucv+pBzf/lUvl72BeSz4xvBU+g58v/UQXYWQrk+KqB3OfQc2Q6o0NLzgwqddJwB9ciSSqANiaDMoit0z/ciIS5PzRK0RVTTc4P4dVb1n+G3Cy45i5Jmz5f61yU5cGW+Fl0m/NtVJiyYlJzERMHkhkTDKRnMWNpkfiuxUrNuN6cAcPmqppEY8Mk0PRhycctbi0p3TgPlhSQ4FHrW0h6WZ8qHSwa5PkV/7u0+iur9GzicWp7CrbT9uzTpRsr4MxetejRgXsi1pE3Zmv4Geknp8nXcQZjJPMnFVBILTTNRWwQjKmeEGvP7A03I+yeRfHG3Bz08cR37yFgSprCW+k0xmPG/78Ya34fZ7kaZPhD3OinPDl9Ew0sg8WCT1tZEIeLjAkotmdweGiKst6yW5k8R6OJBThkZ3Ow50fYEgYfCzLhbo+M2sF3GQUamY+H2dx3Bh6FfcFSzSJUaKT3EgwoIGlbe+xBxvYyQFM+KVJNvImE827MHpgTq0jl6lsllhCGuiL21b5Mwr6UW4Pd2LsYk2+EUusFy+dYVT/LWAScxlHRzKKccOawHzYSEUGswG53DT04sckwO3vQNwGGwwM6oQYTURVjNZtlLym8rxG51IqgKeKItoKIVGX3OUrFLwEIrnb3yAE5srUZ7xLDFuRLfnT5hIx8eSN6MoNV+eqx+7jgaOO3PDBCPqNFrXxO266wZqRpvgZKsQ1azUgQmeuSGc57oQceOjfWfx/tV3cdJZE1H/hhAe6zgCr2gnpHKsA7WBuVZhb8dRhvkWLk+0L3UonmdO2l03MciKLrVtR09xLZCcJ/eWJY1nYHQo+QyH7uFAMIlNbdw3DDfDNKij6CXw1kNT3fhh6JLsrKecP0JL/LPi0v/zUVjTX8NKNarCzH603MOiwtlvjvR8h9apLubiOTifqYFRRL2McGyrXhvBallWEB1VOmPo03MjqB1pwjSrO5U5EzWyLAth//9xoOJD48Pd+QlcHG/BonxMeJQ4h4lvWUsFCppFBU/LjvOLqw11I1dkN4i1VFfoEWRZBROX0w0pMoqRBTcrNxB7B65lm7JYC3HsU/0IBGaX6BlexXLhgLUNY4wBFp58BkV31MTH3Es+r4xAMkbQMta4EJ8AepwjKzb9xn/hRliBbMXDcw/jQlzCwV6OavFA3+e/LS6OfX8LMADW/rWE+F3eIAAAAABJRU5ErkJggg==');
					}
					.discount{
						background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDUxMzhFRUM1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDUxMzhFRUQ1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTEzOEVFQTUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTEzOEVFQjUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pox67+QAAARASURBVHjarFZbbBRVGP5mdvbS3e52t7Td2lDaIG2kSAtBIVHjBRMhhFBJMDU+EY3B8KCJvhiffODReCFqTPDBKAYvCTFqxCgB0lBjQhQUFlIs1KIi272wu3Rvs7MzfmdmOzPb1oQmnPS02/+c8//f//3f+c9KeOPnbQAOcsZxZ0eS80WFvw5x9jYtGQZQ55T4WZatv0ZjTVrClW5Y656mxTbOD3kaHQv3+xQZoRYFitdjBZsPWtGAWyqg1hlYshwXa+ayrPD/asPujBUigNrknZt23R1DYu8wxp8ewqN9BFKo4sHeCPZt6cEj96xANOwHUkWgrGFtdwif7FyDH/ashZ/AUGJAyQ6iKovSJSgP9/VF/Obc0BnEqXwV98db8dZjq8wt755NYuJyBluHOvH8+k776MTe9dhxOIFZkaFXNm1OABFU8E4EOZFqY8RDXnjvakWqXLNtL4x0Yf/GOGTziIF8pY6pXAVfTd1EVWRRc847AVQd8agfoyNxPLQybJtf3dyDZ9Z14Oy/RbOOAsexP/N4ffwa8nWdLBmYq2oo8DwqBOFXLPTGwgCajqjfg5fu60Zni9c2z5D/C9mKmYlBtBL5/WwyjV9/mwXaAw61PEt1NEThFFq2P1E1k5kKhg+dw8unZmzz27/cwM6DZ/DeuSQFYh0cag9i5UAM61j4/u5WbF4dxflnR3Bk1wBiAQap6UtQ1Bh1KiPHlOdHiv8LVG7xvUbaXqGivJRplXXzUv9eyvPejiC+vJzF0fOz1p0gIGXRBaNRNxzT/g1xPLwqAtWF6qNECj9eTGF0OI4xylaMk9cKOHD6L5y8MUeqPLZUZbf/FhanLebHtv422/ZATysGWfysK6vjMwUcOTGD71ns+XH6+i2cIHJDb77Rio28qmNsUxzvbO1HRCCwneWx/fAFjG10WlUswPU2P3+cfeYZCqGprdgZiHS0OqZ5odzOxfh8Mot6uoQul7I0w7jtjufUgI4TmTK+5mURWT7BFhEkZQHRY6jt3rDP3npdtANZvq0AslvH6TkVo58m8MHvSfq0eCzViDYawCb2HNM590xMk/uAZ5kZUG7RkA8Vj2bS4WmoYE7VEIv4sIXtQoyPL6WRvVm2lLKsANT7mp4wvtk92CStIB09NdBOwDKmWKMDP/1N9KxHXV8mReT7KmtwMV1GV9DrYk5iF+3jhdLx3Ld/oMgg8zL0ueRo3uAliq+4a5Atqnj8i0s4+uQgVlOGx6ZzOH4lhzdJ3fg/BYxTAAj57O6bYrGv5KqYJGXfXc3R22LaJL7J4rZE7JbN7ujzyQiy7eYEWsl6hEzOWxRH40Qr6AtzJll40SzNPc1J5JWmLBrvqsr+ruqadcBjydRccx9m7ynxCS2JJ1S8AYq80LnJoqhBapFZ9HNxS8X7+n+PvQmG+wT3wrm01LcBZAT6fZzviwf6Dn9tyYhe+Z8AAwA383zjPVFQZwAAAABJRU5ErkJggg==');
					}
				}
			}
			.current{
					background: #fff;
					z-index: 10;
					margin-top: -1px;
			}

		}
		.foods-wrapper{
			flex: 1;
			.title{
				font-size: 12px;
				height: 26px;
				line-height: 26px;
				background: #f3f5f7;
				color:#93999f;
				padding-left: 12px;
				border-left: 2px solid #d9dde1
			}
			.food-item{
				display: flex;
				margin: 18px;
				position: relative;
				padding-bottom: 18px;
				.icon{
					margin-right: 10px;
				}
				.content{
					flex: 1;
					.name{
						height: 14px;
						line-height: 14px;
						font-size: 14px;
						color: #07111b;
						margin: 2px 0 8px 0;
					}
					.desc{
						font-size: 10px;
						color: #93999f;
						margin-bottom: 8px;
					}
					.extra{
						font-size: 10px;
						color: #93999f;
					}
					.price{
						font-weight: bold;
						line-height: 24px;
						.now{
							color: red;
							font-size: 14px;
							margin-right: 8px
						}
						.old{
							font-size: 10px;
							color: #93999f;
							text-decoration: line-through;
						}
					}
					.cartcontral-wrapper{
						position: absolute;
						right: 0;
						bottom: 12px;
					}
				}
			}
		}
		
	}
</style>