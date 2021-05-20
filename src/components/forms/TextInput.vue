<template>
  <div class="w-full">
    <label class="block">{{ component.label }}</label>
    <div class="mt-1">
      <input type="text" class="" @change="handleChange" />
    </div>
  </div>
</template>

<script>
// Props : Label placeholder default-value
import state from "../../store/state.js"
import { test } from "../../store/test.js"
export default {
  props: {
    component: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    console.log(test)
    const { components } = state()

    const handleChange = () => {
      console.log("some change on ", props.component.id)
      console.log(components.value)
      // console.log(current)
    }

    return { handleChange }
  },
}
</script>

<style></style>
