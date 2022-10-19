<template>
  <div class="wrapper">
    <div class="change-theme-test">
      <Box1 />
      <Box2 />
    </div>

    <div @click="changeTheme">
      <button>换肤</button>
    </div>

    <button @click="dynamicImport">
      动态导入
    </button>
    <component :is="dynamicComp" />
    <jsxComp :name="'cxx'"></jsxComp>
    <tsxComp :name="'cxx2'"></tsxComp>
    <img :src="imgUrl" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Box1 from "./components/box1-comp.vue";
import Box2 from "./components/box2-comp.vue";
import jsxComp from "./components/jsxComp";
import tsxComp from "./components/tsxComp";
import examplePng from "@assets/image/example.png";
import client from "webpack-theme-color-replacer/client";

export default {
  name: "App",
  components: {
    Box1,
    Box2,
    jsxComp,
    tsxComp
  },
  setup() {
    const imgUrl = ref("");
    const dynamicComp = ref(null) as any;
    imgUrl.value = examplePng;

    const dynamicImport = () => {
      import(
        /* webpackChunkName: "count" */ "./components/count-comp.vue"
      ).then((res) => {
        dynamicComp.value = res.default;
      });
    };
    const changeTheme = () => {
      const options = {
        newColors: [
          // ...forElementUI.getElementUISeries(newColor),
          "red",
          "green",
        ],
      };
      return client.changer.changeColor(options).then(() => {
        // do something
      });
    };
    return {
      dynamicComp,
      dynamicImport,
      changeTheme,
      imgUrl,
    };
  },
};
</script>

<style scoped  lang="less">
.wrapper {
  .change-theme-test {
    display: flex;
  }
}
</style>