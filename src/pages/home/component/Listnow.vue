<template>
    <ul class="getShowing">
        <li class="getShowing-li" v-for="(item,index) in nowsubjects" :key="index" @click="introductionBtn(item)">
            <div class="poster" :style="{backgroundImage:'url('+item.images.large+')'}"></div>
            <div class="content" >
                <h3>{{item.title}}</h3>
                <p>类型：<em v-for="(items,index) in item.genres" :key="index">{{items}}</em></p>
                <p>导演：<em v-for="(items,index) in item.directors" :key="index">{{items.name}}  </em></p>
                <p>主演：<em v-for="(items,index) in item.casts" :key="index">{{items.name}}  </em></p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'HomeListnow',
  props: {
    nowsubjects: Array
  },
  methods: {
    // 查看电影详情
    introductionBtn: function (item) {
      this.$router.replace({name: 'Introduction', params: {movieID: item.id}})
      console.log(item.id)
    }
  },
  mounted () {
    // console.log(this.$refs.wrapper)
  }
}
</script>

<style>
.getShowing{
    margin: 0 0;
}

.poster{
    width: 7.0125rem;
    height: 10.0375rem;
    background-repeat:no-repeat;
    background-size:100% 100%;
    display: inline-block;
}

.content{
    float: right;
    width: calc(100% - 7.0125rem);
}

.content h3{
    font-size: 1.2rem;
    margin-bottom: 50px;
    padding-left: 10px;
}

.content p{
    color: #8a869e;
    font-size: 1rem;
    margin-bottom: 10px;
    padding-left: 10px;
}

.getShowing-li{
    padding: 15px;
    border-bottom: 0.13125rem solid #e5e5e5;
}

.line{
    background-color: #ddd;
    margin-top: 20px;
    height: 0.1px;
}
</style>
