<script setup lang="ts" name="MyTest">
import { storeToRefs } from 'pinia'
import logo from '@/assets/logo.png'
import { useCountStore } from '@/store'
const countStore = useCountStore()

// 通过计算属性
const countComputed = computed(() => countStore.count)

// 通过 storeToRefs api 结构
const { doubleCount } = storeToRefs(countStore)
</script>

<template>
  <div class="w-[500px] p-[50px] text-center m-auto">
    <div class="flex items-center flex-col">
      <img :src="logo" class="h-[50px] w-[50px] rounded-full" alt="">
      <h2>自用脚手架</h2>
    </div>
    <div class="index">
      <span>当前数值{{ countComputed }}</span>
      <br>
      <span>双倍数值{{ doubleCount }}</span>
      <br>
      <button class="w-full bg-[#824545]" @click="countStore.countAdd">
        +1
      </button>
      <button class="w-full bg-sky-500" @click="countStore.countReduce">
        -1
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
