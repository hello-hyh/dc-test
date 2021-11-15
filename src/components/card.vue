<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import { IResult } from '../interface/apis'

const { resultInfo } = defineProps({
  resultInfo: Object as PropType<IResult>
})
const toClickSite = (url: string | undefined) => {
  window.location.href = url ?? window.location.href
}
</script>
<template>
  <div class="card">
    <img :src="resultInfo?.image" class="card-icon" />
    <div class="card-info">
      <div class="card-info__title">{{ resultInfo?.title }}</div>
      <div class="card-info__desc">
        {{ resultInfo?.description }}
      </div>
    </div>
    <img
      class="card-redirect"
      src="@/assets/redirect-icon.png"
      @click="toClickSite(resultInfo?.url)"
    />
  </div>
</template>
<style lang="less">
.card {
  display: flex;
  flex-direction: row;
  padding: 12px 20px 12px 12px;
  align-items: center;
  border-radius: 12px;
  position: relative;
  &:hover {
    background: #f2f4f8;
    .card-redirect {
      display: inline-flex;
    }
  }
  .card-icon {
    width: 76px;
    height: 76px;
    margin-right: 20px;
  }
  .card-info {
    display: flex;
    flex-flow: column;
    padding: 12px 0;
    width: 450px;
  }
  .card-info__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;

    color: #000000;
  }
  .card-info__desc {
    font-size: 16px;
    line-height: 20px;

    color: #999faa;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
  .card-info__title + .card-info__desc {
    margin-top: 8px;
  }
  .card-redirect {
    width: 26px;
    height: 26px;
    display: none;
    position: absolute;
    top: 36px;
    right: 20px;
  }
}
</style>
