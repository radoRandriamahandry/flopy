import { ref } from "@vue/reactivity"

const components = ref([])

const state = () => {
  const pushComponent = (component) => {
    components.value.push(component)
  }

  return { components, pushComponent }
}

export default state
