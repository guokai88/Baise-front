<template>
  <div class="page-header-index-wide">
    
  </div>
</template>

<script>
import moment from 'moment'
import { mixinDevice } from '@/utils/mixin'

const DataSet = require('@antv/data-set')

export default {
  name: 'Analysis',
  mixins: [mixinDevice],
  components: {
  },
  data () {
    return {
      loading: true,
      rankList: [],

      // 搜索用户数
      searchUserData: [],
      searchUserScale: [],
      searchTableColumns: [
        {
          dataIndex: 'keyword',
          title: '类型'
        },
        {
          dataIndex: 'count',
          title: '问题数'
        },
        {
          dataIndex: 'range',
          title: '周涨幅',
          align: 'right',
          sorter: (a, b) => a.range - b.range,
          scopedSlots: { customRender: 'range' }
        }
      ],
      searchData: [],

      barData: [],
      barData2: [],

      //
      pieScale: [],
      pieData: [],
      sourceData: [],
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      totalSales: 0,
      totalDownload: 0,
      totalQuestion: 0,
      totalLogin: 0,
      questionMonthList: [],
      questionTypeList: [],
      totalWeekQuestion: 0,
      typeData: []
    }
  },
  created () {
    const typeOption = this.$options
    this.typeData = typeOption.filters['dictData']('question_type')
    this.init()
    setTimeout(() => {
      this.loading = !this.loading
    }, 1000)
  },
  methods: {
    async init() {

    }
  }
}
</script>

<style lang="less" scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      margin-right: 24px;

      a {
        margin-left: 24px;
      }
    }
  }

  .antd-pro-pages-dashboard-analysis-twoColLayout {
    position: relative;
    display: flex;
    display: block;
    flex-flow: row wrap;
  }

  .antd-pro-pages-dashboard-analysis-salesCard {
    height: calc(100% - 24px);
    /deep/ .ant-card-head {
      position: relative;
    }
  }

  .dashboard-analysis-iconGroup {
    i {
      margin-left: 16px;
      color: rgba(0,0,0,.45);
      cursor: pointer;
      transition: color .32s;
      color: black;
    }
  }
  .analysis-salesTypeRadio {
    position: absolute;
    right: 54px;
    bottom: 12px;
  }
</style>
