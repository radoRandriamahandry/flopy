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
        <div v-for="component in components" :key="component">
          <ComponentsCreator label="Test label" />
        </div>
      </div>
    </div>
    <form class="flex justify-center mt-10" @submit.prevent="createComponent">
      <button type="submit" class="px-4 py-2 border border-gray-400 rounded-lg">
        Generate component
      </button>
    </form>
  </main>
</template>

<script>
import { ref } from "vue"
import ComponentsCreator from "../components/ComponentsCreator.vue"

export default {
  components: {
    ComponentsCreator,
  },

  setup() {
    const components = ref(0)

    const createComponent = () => {
      components.value++
      console.log(components.value)
    }

    return { components, createComponent }
  },
}
</script>
