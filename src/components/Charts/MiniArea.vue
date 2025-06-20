<template>
  <div class="antv-chart-mini">
    <div class="chart-wrapper" :style="{ height: 46 }">
      <v-chart :force-fit="true" :height="height" :data="data" :padding="[36, 0, 18, 0]">
        <v-tooltip />
        <v-smooth-area position="x*y" />
      </v-chart>
    </div>
  </div>
</template>

<script>
import {
  countApplicationDownloadTotalListByDateFormat
} from '@/api/modular/main/otaapplication/otaApplicationManage'

export default {
  name: 'MiniArea',
  data () {
    return {
      data: [],
      tooltip: [],
      scale: [],
      height: 100,
      beginDay: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init() {
      const beginDay = await countApplicationDownloadTotalListByDateFormat({ 'dateFormat': '%Y-%m-%d' }).then((res) => { return res.data })

      let maxNum = 0

      for (let i = 0; i < 12; i++) {
        if (beginDay[i].totalDownload > maxNum) {
          maxNum = beginDay[i].totalDownload + 6
        }
        this.data.push({
          x: beginDay[i].createDate,
          y: beginDay[i].totalDownload
        })
      }

      this.tooltip = [
        'x*y',
        (x, y) => ({
          name: x,
          value: y
        })
      ]
      this.scale = [{
        dataKey: 'x',
        min: 2
      }, {
        dataKey: 'y',
        title: '时间',
        min: 0,
        max: maxNum
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  @import "chart";
</style>
