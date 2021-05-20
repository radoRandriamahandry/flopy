<template>
  <div class="mt-5">
    <component :is="selectedComponent" :component="component"></component>
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
    component: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(props.component.id)

    // Import and assign the component dynamically
    const selectedComponent = computed(() => {
      ;() => {
        return [props.component.name]()
      }
      return props.component.name
    })

    return { selectedComponent }
  },
}
</script>
