<template>
  <div class="movie-list">
    <div class="tab-navbar">
      <div class="min-navbar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="正在上映" name="now-up"></el-tab-pane>
          <el-tab-pane label="即将上映" name="will-up"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="userBtn"><i class="iconfont icon-my"></i></div>
    </div>
    <!-- <div class="tab-container">
      hhhhhhhhhhhhh
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      activeName: 'now-up'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
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
.userBtn{
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
