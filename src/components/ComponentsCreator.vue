<template>
  <div class="mt-5">
    <component :is="selectedComponent" :label="label"></component>
  </div>
</template>

<script>
import { computed } from "vue"
// import TextInput from "./forms/TextInput.vue"
const TextInput = () => import("./forms/TextInput.vue")
const Checkbox = () => import("./forms/Checkbox.vue")

export default {
  // Props
  props: {
    label: {
      type: String,
      default: "",
      required: false,
    },
    componentType: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup(props) {
    const selectedComponent = computed(() => {
      ;() => {
        return [props.componentType]()
      }

      return props.componentType
    })

    return { selectedComponent }
  },
}
</script>
