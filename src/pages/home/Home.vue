<template>
  <div class="movie-list">
    <div class="tab-navbar">
      <div class="min-navbar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="正在上映" name="now-up">
            <div class="wrapper" ref="wrapper">
              <div>
                <home-carousel></home-carousel>
                <home-listnow :nowsubjects="nowsubjects"></home-listnow>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="即将上映" name="will-up">
            <home-listwill :willsubjects="willsubjects"></home-listwill>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="userBtn"><i class="iconfont icon-my"></i></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import HomeCarousel from './component/Carousel'
import HomeListnow from './component/Listnow'
import HomeListwill from './component/Listwill'
export default {
  name: 'Home',
  components: {
    HomeCarousel,
    HomeListnow,
    HomeListwill
  },
  data () {
    return {
      nowsubjects: [],
      willsubjects: [],
      activeName: 'now-up'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    getMovieNowList () {
      axios.get('api/v2/movie/in_theaters?count=15&apikey=0b2bdeda43b5688921839c8ecb20399b')
        .then(this.getMovieNowSucc)
    },
    getMovieWillList () {
      axios.get('api/v2/movie/coming_soon?count=15&apikey=0b2bdeda43b5688921839c8ecb20399b')
        .then(this.getMovieWillSucc)
    },
    getMovieNowSucc (res) {
      console.log(res.data.subjects)
      this.nowsubjects = res.data.subjects
    },
    getMovieWillSucc (res) {
      // this.total = res.data.total
      // this.subjects = res.data.subjects
      this.willsubjects = res.data.subjects
    }
  },
  mounted () {
    const options = {
      click: true,
      tap: true
    }
    this.getMovieNowList()
    this.getMovieWillList()
    this.scroll = new Bscroll(this.$refs.wrapper, options)
    // console.log(this.scroll)
  }
}
</script>

<style>
.tab-navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
.el-tabs__nav{
  width: 100%;
}
.el-tabs__item{
  text-align: center;
  width: 50%;
  padding: 0;
}
.el-tabs__nav{
  width: 85%;
}
.el-tabs__header{
  margin: 0 0 5px;
  height: 45px;
}
.userBtn{
  position: absolute;
  top: 8px;
  right: 8px;
}
.wrapper{
  height: 780px;
}
</style>
