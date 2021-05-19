<template>
  <component :is="selectedComponent" :label="label" class="mt-5"></component>
</template>

<script>
import { computed } from "vue"
// import TextInput from "./forms/TextInput.vue"
const TextInput = () => import("./forms/TextInput.vue")

export default {
  // Props
  props: {
    label: {
      type: String,
      default: "",
      required: false,
    },
  },
  setup() {
    const selectedComponent = computed(() => {
      TextInput()
      return "TextInput"
    })

    return { selectedComponent }
  },
}
</script>
