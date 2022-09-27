import { defineComponent } from "vue"

export default defineComponent({
  props: ["name"],
  setup(props) {
    if ([1, 2, 3].includes(3)) {
      console.log("实例方法")
    }
    const fn = () => { console.log("箭头函数") }

    const p = new Promise(() => {
      console.log(fn)
    })

    const key = 'name'
    const obj = {
      [key]: 'cxx',
    }
    return () => <div>jsx组件，{props.name} </div>
  }
})