<script setup lang="ts">
import { inject } from '@vue/runtime-core'
import { debounce } from 'lodash'
import { holdStateKey } from '../interface/apis'
const { modelValue } = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const useHoldState = inject(holdStateKey)
const emits = defineEmits(['update:modelValue', 'focus'])

const onInput = debounce((e: any) => {
  emits('focus')
  emits('update:modelValue', e.target.value ?? '')
}, 1000)
</script>
<template>
  <div class="search-body-warp">
    <img class="search-body__icon" src="@/assets/search-icon.png" />
    <input
      :value="modelValue"
      :class="[
        'search-body',
        useHoldState === 'error'
          ? 'search-body__tips--error'
          : 'search-body__tips--active'
      ]"
      placeholder="Search technologgies we use DC..."
      @input="onInput"
    />
  </div>
</template>
<style lang="less">
.search-body__tips--error {
  &:focus,
  &:active {
    outline: none;
    border: 3px solid #ed2e7e;
  }
}
.search-body__tips--active {
  &:focus,
  &:active {
    outline: none;
    border: 3px solid #6833ff;
  }
}
.search-body-warp {
  width: 100%;
  height: 74px;
  position: relative;
  background: #f2f4f8;
  border-radius: 12px;

  display: flex;
}
.search-body {
  padding: 24px;
  padding-left: 60px;

  background-color: transparent;
  border: 3px solid #f2f4f8;
  border-radius: 12px;

  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;

  width: 100%;
  &:focus,
  &:active {
    outline: none;
  }
}
.search-body__icon {
  width: 24px;
  height: 24px;

  position: absolute;
  top: 24px;
  left: 24px;
}
</style>
