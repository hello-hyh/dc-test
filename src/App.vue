<script setup lang="ts">
import { ref } from '@vue/reactivity'
import Search from './components/search.vue'
import Badge from './components/badge.vue'
import { getSearchs } from './apis/search'
import { computed, provide, watchEffect } from 'vue'
import Card from './components/card.vue'
import Loading from './components/loading.vue'
import { holdStateKey, IHoldState } from './interface/apis'
const badgeList = ref(['Languages', 'Build', 'Design', 'Cloud'])
const inputVal = ref('')
const resultList = ref([])
let holdState = ref<IHoldState>('empty')
const isErr = computed(() => holdState.value === 'error')
provide(holdStateKey, holdState)
watchEffect(async () => {
  try {
    // throw new Error()
    const { data } = await getSearchs({ search: inputVal.value })
    resultList.value = data
    holdState.value = resultList.value.length == 0 ? 'empty' : 'nonempty'
  } catch (e) {
    holdState.value = 'error'
    // console.log(holdState.value)
  }
})
</script>

<template>
  <div class="app-channel-warp">
    <div class="app-channel">
      <Search
        v-model="inputVal"
        @focus="() => (holdState = 'loading')"
      ></Search>
      <div class="app-tab">
        <Badge
          :is-selectd="b === inputVal"
          v-for="b in badgeList"
          :key="`_${b}`"
          :text="b"
          @on-select="t => (inputVal = t)"
        ></Badge>
      </div>
      <div class="app-result">
        <Loading>
          <Card v-for="r in resultList" :result-info="r"></Card>
        </Loading>
      </div>
    </div>
    <div class="app-tips">
      <p :class="['app-tips__text', isErr ? 'app-tips__text--error' : '']">
        {{
          holdState === 'loading'
            ? 'Searching ...'
            : holdState === 'nonempty'
            ? `${resultList.length} results`
            : holdState === 'empty'
            ? 'No result'
            : 'Something wrong happened but this is not your fault : )'
        }}
      </p>
    </div>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  .app-channel-warp {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 20px;

    box-shadow: 0px 30px 60px -30px rgba(0, 0, 0, 0.25),
      0px 50px 100px -20px rgba(50, 50, 93, 0.25);
    .app-channel {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;

      width: 599px;
      height: 600px;
    }
    .app-tab {
      margin: 20px 0;
      width: 100%;
      display: flex;
    }
    .app-result {
      width: 100%;
      height: 100%;
      overflow: auto;
      .app-result--hold {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }
    }
    .app-tips {
      padding: 15px 24px;
      border-top: 1px solid #f2f4f8;
      .app-tips__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #999faa;
      }
      .app-tips__text--error {
        color: #ed2e7e;
      }
    }
  }
}
</style>
