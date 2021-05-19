<template>
  <header>
    <div class="max-w-screen-lg mx-auto">
      <h1 class="py-5 text-2xl font-semibold text-center">Home</h1>
    </div>
  </header>
  <main class="max-w-screen-lg mx-auto">
    <div class="w-1/2 p-5 mx-auto border border-gray-400 rounded-sm">
      <h2 class="text-xl font-semibold text-center border-b border-gray-200">
        Create your component
      </h2>
      <div v-if="components">
        <div v-for="component in components" :key="component.name">
          <ComponentsCreator
            label="Test label"
            :component-type="component.name"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10 space-x-5">
      <button
        class="px-4 py-2 border border-gray-400 rounded-lg"
        @click="createComponent('TextInput')"
      >
        Text input
      </button>
      <button
        class="px-4 py-2 border border-gray-400 rounded-lg"
        @click="createComponent('Checkbox')"
      >
        Checkbox
      </button>
    </div>
  </main>
</template>

<script>
// import { ref } from "vue"
import ComponentsCreator from "../components/ComponentsCreator.vue"
import state from "../store/state.js"

export default {
  components: {
    ComponentsCreator,
  },

  setup() {
    // const components = ref([])
    const { components } = state()

    const createComponent = (value) => {
      const component = {
        name: value,
      }
      components.value.push(component)
    }

    return { components, createComponent }
  },
}
</script>
