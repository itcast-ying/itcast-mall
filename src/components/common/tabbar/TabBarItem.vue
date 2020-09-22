<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isAcive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //复杂的属性就往计算属性那传
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed: {
    isAcive(){
      //当前活跃的组件 是当前路径的组件  ！==-1
      return this.$route.path.indexOf(this.path) !==-1;
    },
    activeStyle(){
      //是不是当前路径 是就传入红色 不是就空  this.当前提取的
      return this.isAcive? {color:this.activeColor} : {}
    }
  },
  methods: {
      itemClick(){
        this.$router.push(this.path)
      }
    }
};
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 16px;
  margin-bottom: 2px;
}
#tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>