<template>
  <div class="count">
    <div>{{ str }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const str = ref('count 组件')
    return {
      str,
    }
  },
}
</script>
<style scoped lang="less">
.count {
  background: #4b0;
  color: @primary-color;
}
</style>
