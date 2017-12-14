<template>
  <div id="app">
  	<v-header :seller='seller'></v-header>
  	<div class="tab">
  			<div class="tab-item">
  				<router-link to="/goods">商品</router-link>	
  			</div>
  			<div class="tab-item">
  				<router-link to="/ratings">评论</router-link>	
  			</div>
  			<div class="tab-item">
  				<router-link to="/seller">商家</router-link>	
  			</div>
  	</div>
    <router-view :seller='seller'></router-view>
  </div>
</template>

<script>
	import vHeader from './components/header/header'
	
export default {
  name: 'app',
  components: {
  	vHeader
  },
  data(){
  	 return {
  	 		seller: {},
  	 }
  },
  created(){
  	const url = '/api/seller';
  	this.$http.get(url).then((response) =>{
  			response = response.data;
//			console.log(response);
				if(response.errno === 0){
					 this.seller = response.data;
				}
  	})
  }
  
}
</script>

<style lang='scss' scoped>
	
#app {

}
.tab{
			margin-top: 134px;
			display: flex;
			width: 100%;
			height: 40px;
			line-height: 40px;
			.tab-item{
				flex: 1;
				text-align: center;
				align-items: center;
				a{
					font-size: 14px;
					display: block;
				}
				.router-link-active{
						color:#f01414;
				}

			}
		}
</style>
