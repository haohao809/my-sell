<template>
  <div id="app">
  	<v-header></v-header>
  	<div class="tab">
  			<div class="tab-item">
  					商品
  			</div>
  			<div class="tab-item">
  					评论
  			</div>
  			<div class="tab-item">
  					商家
  			</div>
  	</div>
    <router-view/>
  </div>
</template>

<script>
	import vHeader from './components/header/header'
	
export default {
  name: 'app',
  components: {
  	vHeader
  }
  
}
</script>

<style lang='scss'>
	
#app {

}
.tab{
			margin-top: 134px;
		}
</style>
