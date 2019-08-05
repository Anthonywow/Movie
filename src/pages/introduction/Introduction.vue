<template>
  <div class="introdu-list">
    <!-- 电影详情 -->
    <div class="movieItem">
      <div class="movieItemBg" :style="{backgroundImage:'url('+introlist.images.large+')'}"></div>
      <div class="movierposter-container">
        <img class="movierposter" :src="introlist.images.large">
        <!-- <div class="movierposter" :style="{backgroundImage:'url('+introlist.images.large+')'}"></div> -->
        <div class="movieInfo">
          <h2>{{introlist.title}}</h2>
          <em>{{introlist.aka[introlist.aka.length-1]}}</em>
          <br />
          <br />
          <p><em v-for="(item,index) in introlist.genres" :key="index">{{item}} </em></p>
          <p>{{introlist.pubdate}} 上映</p>
          <p><em v-for="(item,index) in introlist.languages" :key="'i'+index">{{item}} </em>| <em v-for="(item,index) in introlist.durations" :key="'k'+index">{{item}} </em></p>
          <p>{{introlist.wish_count}}人想看</p>
      </div>
      </div>
    </div>
    <!-- 电影简介 -->
    <div class="movieDesc">
        <p>{{introlist.summary}}</p>
        <!-- <div class="naked" @click="nakedBtn">{{naked == false ? '收缩' : '展开'}}</div> -->
    </div>
    <!-- 演员列表 -->
    <div class="movieArtists">
        <h2>演职人员</h2>
        <div class="movieContainer">
            <ul>
                <li v-for="(item,index) in introlist.casts" :key="'l'+index">
                    <img :src="item.avatars.medium" alt="" />
                    <p>{{item.name}}</p>
                    <em v-if="index == 0">导演</em>
                </li>
            </ul>
        </div>
    </div>
    <el-button class="returnBtn" @click="returnBtn()" type="primary">返  回</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Introduction',
  data () {
    return {
      introlist: Object
    }
  },
  // props: {
  //   introlist: Object
  // },
  methods: {
    returnBtn: function () {
      this.$router.replace({name: 'Home'})
    },
    getIntroList () {
      axios.get('api/v2/movie/subject/' + this.$route.params.movieID + '?apikey=0b2bdeda43b5688921839c8ecb20399b')
        .then(this.getIntroListSucc)
    },
    getIntroListSucc (res) {
      this.introlist = JSON.parse(JSON.stringify(res.data))
      console.log(this.introlist)
      console.log(this.introlist.images.large)
    }
  },
  created () {
    console.log('Introduction-----' + this.$route.params.movieID) // 注意这里不是router
    this.getIntroList()
  },
  mounted () {
    // console.log('Introduction-----' + this.$route.params.movieID) // 注意这里不是router
    // this.getIntroList()
  }
}
</script>

<style scoped>
.returnBtn{
  position:fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  border-radius: 0;
}
.movierposter-container{
  width: 100%;
  height: 225px;
  display: flex;
}
.movieItemBg{
  position: absolute;
  width: 100%;
  height: 225px;
  background: #e2e2e2;
  background-size: 3000%;
  background-repeat: no-repeat;
  background-position-y: 40%;
  backface-visibility: hidden;
  z-index:-1;
}
.movieItemBg:after{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.5);
}

.movierposter{
    width: 130px;
    height: 180px;
    margin: 22.5px 18px;
    background-repeat:no-repeat;
    background-size:100% 100%;
    display: inline-block;
}
.movieInfo{
    width:calc(100% - 166px);
    height: 200px;
    margin-top: 25px;
    padding-right: 10px;
    font-size: 16px;
    color: #fff;
    float:right;
}
.movieInfo h2{
  font-size: 20px;
  font-weight: 600;
}
.movieInfo em{
  font-weight: 400;
}
.movieDesc{
  padding: 18px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  text-align: justify;
  border-bottom: 20px solid #F5F5F5;
}
.movieArtists h2{
  font-weight: 600;
  font-size: 22px;
  margin: 10px 18px;
}
.movieContainer{
  overflow-x: scroll;
  margin-left: 18px;
  margin-bottom: 60px;
}
.movieContainer ul li{
  overflow: hidden;
  text-align: center;
  margin-right: 16px;
}
.movieContainer ul{
  overflow: hidden;
  display: flex;
  white-space: nowrap;
}
.movieContainer li > img{
  width: 87px;
}
</style>
