<template>
  <div class="carousel">
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img class="img-item" :src="item.view">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCarousel',
  data () {
    return {
      imgList: [
        {id: 0, view: require('../../../assets/img/carousel-one.jpg')},
        {id: 1, view: require('../../../assets/img/carousel-two.jpg')},
        {id: 2, view: require('../../../assets/img/carousel-three.jpg')}
      ]
    }
  }
}
</script>

<style>

.el-carousel__item h3 {
  text-align: center;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__container{
  height: 200px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.img-item{
  width: 100%;
  height: 100%;
}
</style>
