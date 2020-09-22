<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="item-index" class='recommend-item'>
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        padding: 15px 0 30px;
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        border-bottom: 10px #eeeeee solid;
    }
    .recommend {
        flex: 1;
    }
    .recommend-item img {
        width: 90%;
        margin-bottom: 10px;
    }
</style>