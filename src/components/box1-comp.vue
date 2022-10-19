<template>
  <div class="box1">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const text = ref("box1");
    return {
      text,
    };
  },
};
</script>

<style lang="less" scoped>
.box1 {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid @primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  color: @primary-color;
  margin: 5px;
}
</style>