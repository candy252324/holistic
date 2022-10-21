<template>
  <div class="box2">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const text = ref('box2')
    return {
      text,
    }
  },
}
</script>

<style lang="less" scoped>
.box2 {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid @warning-color;
  display: flex;
  justify-content: center;
  align-items: center;
  color: @warning-color;
  margin: 5px;
}
</style>
