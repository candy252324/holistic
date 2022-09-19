<template>
  <div class="box">
    <p>{{ str }}</p>
    <button @click="rvStr">切换</button>
    <Hello></Hello>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Hello from "./components/hello.vue";
import { reverseStr } from "@utils/str";

// const p = new Promise((resolve, reject) => {
//   resolve("hahahhah");
// });

// p.then((res) => console.log(res));

// const t = () => {
//   console.log("kkkk");
// };

// // t()

// var arr = [3, 5, 6, 8, 19];
// // [3, 5, 6, 8, 19].some(item => item > 10)
// arr.some((item) => item > 10);

export default {
  name: "App",
  components: {
    Hello,
  },
  setup() {
    let str = ref("abcdefg");
    const rvStr = () => {
      str.value = reverseStr(str.value);
    };
    return {
      str,
      rvStr,
    };
  },
};
</script>

<style scoped  lang="less">
.box {
  background: yellow;
  width: 300px;
  height: 400px;
  transform: scale(0.9);
  display: flex;
  p {
    background: red;
  }
}
</style>