<template>
  <div :class="prefixCls">
    <div class="chart-wrapper" :style="{ height: 46 }">
      <v-chart :force-fit="true" :height="100" :data="dataSource" :scale="scale" :padding="[36, 0, 18, 0]">
        <v-tooltip />
        <v-smooth-line position="x*y" :size="2" />
        <v-smooth-area position="x*y" />
      </v-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniSmoothArea',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-smooth-area'
    },
    scale: {
      type: [Object, Array],
      required: true
    },
    dataSource: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      height: 100,
      list: []
    }
  }
}
</script>

<style lang="less" scoped>
  @import "smooth.area.less";
</style>
