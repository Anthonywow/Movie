<template>
    <div class="wrapper" ref="wrapperwill">
        <ul class="willShowing">
            <li class="willShowing-li" v-for="(item,index) in willsubjects" :key="index" @click="introductionBtn(item)">
                <div class="poster" :style="{backgroundImage:'url('+item.images.large+')'}"></div>
                <div class="content">
                    <h3>{{item.title}}</h3>
                    <p>类型：<em v-for="(items,index) in item.genres" :key="index">{{items}}  </em></p>
                    <p>导演：<em v-for="(items,index) in item.directors" :key="index">{{items.name}}  </em></p>
                    <p>主演：<em v-for="(items,index) in item.casts" :key="index">{{items.name}}  </em></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'HomeListwill',
  props: {
    willsubjects: Array
  },
  methods: {
    // 查看电影详情
    introductionBtn (item) {
      // this.$router.replace({name:'introduction'}); // ,params:{movieID:item.id}
      this.$router.replace({name: 'Introduction', params: {movieID: item.id}})
    }
  },
  mounted () {
    const options = {
      click: true,
      tap: true,
      scrollbar: true
    }
    this.scroll = new Bscroll(this.$refs.wrapperwill, options)
    console.log(this.scroll)
  }
}
</script>

<style>
.willShowing{
    margin: 0 0;
}

.willShowing-li{
    padding: 15px;
    border-bottom: 0.13125rem solid #e5e5e5;
}
</style>
