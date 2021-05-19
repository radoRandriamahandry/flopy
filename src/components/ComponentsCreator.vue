<template>
  <div class="w-1/2 p-5 mx-auto border border-gray-400 rounded-sm">
    <h2 class="text-xl font-semibold text-center border-b border-gray-200">
      Create your component
    </h2>
    <component :is="selectedComponent" class="mt-5"></component>
  </div>
</template>

<script>
import { computed } from "vue"
// import TextInput from "./forms/TextInput.vue"
const TextInput = () => import("./forms/TextInput.vue")

export default {
  // components: {
  //   TextInput,
  // },
  setup() {
    const selectedComponent = computed(() => {
      TextInput()
      return "TextInput"
    })

    return { selectedComponent }
  },
}
</script>
