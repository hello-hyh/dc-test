<script lang="ts" setup>
import { inject } from 'vue'
import { holdStateKey } from '../interface/apis'

const useHoldState = inject(holdStateKey)
</script>
<template>
  <div class="hold" v-if="useHoldState !== 'nonempty'">
    <img
      v-if="useHoldState === 'loading'"
      class="load__img"
      src="@/assets/loading.png"
    />
    <img v-if="useHoldState === 'empty'" src="@/assets/no-result.png" />
    <img v-if="useHoldState === 'error'" src="@/assets/error.png" />
  </div>
  <slot v-else></slot>
</template>
<style lang="less">
.hold {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .hold__mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
}
.load__img {
  -webkit-animation: round_animate 3s linear infinite;
  animation: round_animate 3s linear infinite;
}
@keyframes round_animate {
  to {
    transform: rotate(1turn);
  }
}
</style>
