<!--
 * @Author: daidai
 * @Date: 2022-03-01 09:16:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-29 15:12:34
 * @FilePath: \web-pc\src\pages\big-screen\components\item-wrap\item-wrap.vue
-->
<template>
  <dv-border-box-8 class="lr_titles" v-if="isShow">
    <div class="item_title" v-if="title !== ''">
      <div class="zuo"></div>
      <span class="title-inner"> &nbsp;&nbsp;{{ title }}&nbsp;&nbsp; </span>
      <div class="you"></div>
    </div>
    <div
      :class="title !== '' ? 'item_title_content' : 'item_title_content_def'"
    >
      <slot></slot>
    </div>
  </dv-border-box-8>
  <div class="lr_titles" v-else="isShow">
    <div class="item_title" v-if="title !== ''">
      <div class="zuo"></div>
      <span class="title-inner"> &nbsp;&nbsp;{{ title }}&nbsp;&nbsp; </span>
      <div class="you"></div>
    </div>
    <div
      :class="title !== '' ? 'item_title_content' : 'item_title_content_def'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: () => "",
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
  created() {},

  mounted() {},
  methods: {},
};
</script>
<style lang='scss'>
$item-title-height: 38px;
$item_title_content-height: calc(100% - 38px);

.lr_titles {
  box-sizing: border-box;

:deep(.border-box-content)  {
    box-sizing: border-box;
    padding: 6px 16px 0px;
  }

  .item_title {
    height: $item-title-height;
    line-height: $item-title-height;
    width: 100%;
    color: #31abe3;
    text-align: center;
    // background: linear-gradient(to right, transparent, #0f0756, transparent);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .zuo,
    .you {
      width: 58px;
      height: 14px;
      background-image: url("../../assets/img/titles/zuo.png");
    }

    .you {
      transform: rotate(180deg);
    }
    .title-inner {
      font-weight: 900;
      letter-spacing: 2px;
      background: linear-gradient(
        92deg,
        #0072ff 0%,
        #00eaff 48.8525390625%,
        #01aaff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .item_title_content {
    height: $item_title_content-height;
  }

  .item_title_content_def {
    width: 100%;
    height: 100%;
  }
}
</style>