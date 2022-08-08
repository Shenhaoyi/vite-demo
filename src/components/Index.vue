<template>
  <div class="test test2" :class="{ mt5: true }"></div>
  <div class="test test2" ml10px :class="['mt10px']"></div>
  <div class="i-ep-search" shen></div>
  <img :src="logo" />
  <div class="test3"></div>
</template>

<script lang="ts" setup>
import logo from '@/assets/logo.png';
</script>

<style lang="less" scoped>
.test2 {
  .test2();
}

.test3 {
  width: 400px;
  height: 400px;
  background: url('@/assets/logo.png') no-repeat;
}
</style>
