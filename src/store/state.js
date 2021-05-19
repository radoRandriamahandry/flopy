const { ref } = require("@vue/reactivity")

const state = () => {
  const components = ref([])

  return { components }
}

export default state
