<template>
  <img :src="imgUrl" />
</template>

<script>
import examplePng from "@assets/image/example.png";
import { ref } from "vue";
export default {
  setup() {
    const imgUrl = ref("");
    imgUrl.value = examplePng;
    return {
      imgUrl,
    };
  },
};
</script>
