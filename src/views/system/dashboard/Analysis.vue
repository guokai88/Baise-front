<template>
  <div class="page-header-index-wide bg" style="background-color: #03050C">
    
  </div>
</template>

<script>
  import moment from 'moment'
  import { reactive } from 'vue'
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
        rankList: {},

        searchData: {},

        barData: [],

        //
        pieScale: [],
        pieData: [],
        sourceData: [],
        pieStyle: {
          stroke: '#fff',
          lineWidth: 1
        },
        totalSales: {} ,
        totalDownload: 0,
        totalQuestion: 0,
        totalLogin: {},
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
  .dv-dig-flop {
    width: 150px;
    height: 30px;
  }
  .centerRight2 {
    padding: 16px;
    padding-top: 20px;
    height: 340px;
    border-radius: 5px;
    .bg-color-black {
      height: 480px - 30px;
      border-radius: 10px;
    }
    .text {
      color: #c3cbde;
    }
    .body-box {
      .dv-scr-board {
        height: 260px;
      }
    }
  }
  .centerRight1 {
    padding: 16px;
    padding-top: 20px;
    height: 340px;
    border-radius: 5px;
    .bg-color-black1 {
      height: 480px - 30px;
      border-radius: 10px;
    }
    .text1 {
      color: #c3cbde;
    }
    .body-box1 {
      .dv-scr-board1 {
        height: 260px;
      }
    }
  }
  .d-flex {
    display: flex;
  }
  .bg {
    width: 100%;
    height: 100%;
    padding: 16px 16px 10px 16px;
    box-sizing: border-box;
    background-image: url("../../../assets/img/pageBg.png");
    background-size: cover;
    background-position: center center;
  }
  .ant-tabs {
    color: #c3cbde
  }
</style>
