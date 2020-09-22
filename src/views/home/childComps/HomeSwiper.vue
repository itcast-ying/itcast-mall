<template>
    <div>
        <swiper>
        <!-- v-for要加key属性作为遍历的唯一标识 -->
        <swiper-item v-for="(item,index) in banners" :key="item-index">
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </swiper-item>
      </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:'HomeSwiper',
    //子传入父数据
    props:{
      banners:{
          type:Array,
          //默认值必须是函数
          default(){
              return []
          }
      }  
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style lang="">
    
</style>