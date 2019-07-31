<template>
  <div>
    <div>同步操作</div>
    <el-button @click="handleAddClick(10)" type="primary">+</el-button>
    <el-button @click="handleReduceClick(10)" type="primary">-</el-button>
    <h3>{{$store.state.count}}</h3>
    <div>异步操作</div>
    <el-button @click="handleActionsAdd(10)" type="primary">异+</el-button>
    <el-button @click="handleActionsReduce(10)" type="primary">异-</el-button>
    <h4>{{count}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  methods: {
    handleAddClick (n) {
      this.$store.commit('mutationsAddCount', n)// 派发一个名字叫mutationsAddCount的commit
    },
    handleReduceClick (n) {
      this.$store.commit('mutationsReduceCount', n)
    },
    handleActionsAdd (n) {
      this.$store.dispatch('actionsAddCount', n)// 派发一个名字叫actionsAddCount的action
    },
    handleActionsReduce (n) {
      this.$store.dispatch('actionsReduceCount', n)
    }
  },
  computed: {
    count: function () {
      return this.$store.getters.getterCount
    }
  }
}
</script>

<style>

</style>
