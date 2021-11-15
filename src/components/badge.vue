<script setup lang="ts">
import Badge from '@/assets/badge.png'
import BadgeSelected from '@/assets/badge-selected.png'
const { text } = defineProps({
  text: String,
  isSelectd: Boolean
})
const emits = defineEmits(['onSelect'])
const onClick = () => {
  emits('onSelect', text)
}
</script>
<template>
  <div :class="['badge', isSelectd ? 'badge--selected' : '']" @click="onClick">
    <img :src="isSelectd ? BadgeSelected : Badge" class="badge-icon" />
    <span class="badge-text"> {{ text }}</span>
  </div>
</template>

<style lang="less">
.badge {
  width: max-content;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  background: #f2f4f8;

  cursor: pointer;

  .badge-text {
    color: #6833ff;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }
  .badge-icon {
    width: 18px;
    height: 18px;
  }
  .badge-icon + .badge-text {
    margin-left: 9px;
  }
}
.badge--selected {
  background: #6833ff;
  .badge-text {
    color: #fff;
  }
}
.badge + .badge {
  margin-left: 16px;
}
</style>
