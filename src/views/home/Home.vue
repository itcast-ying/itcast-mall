<template>
  <div>
      <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
      <home-swiper :banners='banners'></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'


//调用接口函数
import {getHomeMultidata} from 'network/home'


export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      //保存数据,以免被销毁
      banners:[],
      recommends:[]
      // results:null
    }
  },
  created() {
    //组件创建后请求数据异步操作
    //1.请求多个数据
      getHomeMultidata().then(res=>{
        //获取轮播图和其他数据
        this.banners=res.data.data.banner.list
        this.recommends=res.data.data.recommend.list
      })
  },
};
</script>

<style scoped>
    .home-nav {
      background-color: var(--color-tint);
    }
</style>