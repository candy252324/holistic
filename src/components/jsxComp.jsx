import { defineComponent } from 'vue'

export default defineComponent({
  props: { name: { type: String, default: '' } },
  setup(props) {
    if ([1, 2, 3].includes(3)) {
      console.log('实例方法')
    }
    return () => <div>jsx组件，{props.name} </div>
  },
})
