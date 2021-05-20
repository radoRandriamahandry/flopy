<template>
  <header>
    <div class="max-w-screen-lg mx-auto">
      <h1 class="py-5 text-2xl font-semibold text-center">
        Custom Forms Generator
      </h1>
    </div>
  </header>
  <main class="max-w-screen-lg mx-auto">
    <div class="w-3/4 p-5 mx-auto bg-white shadow-sm">
      <h2 class="text-xl font-semibold text-center border-b border-gray-200">
        Create your component
      </h2>
      <div v-if="components">
        <div v-for="component in components" :key="component.name">
          <ComponentsCreator label="Test label" :component="component" />
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10 space-x-5">
      <button
        class="px-4 py-2 bg-white border border-gray-300"
        @click="createComponent('TextInput')"
      >
        Text input
      </button>
      <button
        type="button"
        class="px-4 py-2 bg-white border border-gray-300"
        @click="createComponent('Checkbox')"
      >
        Checkbox
      </button>
      <button
        type="button"
        class="px-4 py-2 text-white bg-gray-400"
        @click="openModal"
      >
        Open dialog
      </button>

      <BaseDialog :is-open="isOpen" @closeModal="closeModal">
        <template #title>Dialog title</template>
        <template #content
          >Lorem ipsum dolor sit amet, consectetursit amet, consectetursit amet,
          consectetur
        </template>
      </BaseDialog>
    </div>
  </main>
</template>

<script>
import { ref } from "vue"
import ComponentsCreator from "../components/ComponentsCreator.vue"
import BaseDialog from "../components/UI/BaseDialog.vue"
import state from "../store/state.js"

export default {
  components: {
    ComponentsCreator,
    BaseDialog,
  },

  setup() {
    // const components = ref([])
    // name, label, value
    const { components, pushComponent } = state()
    let id = 0

    const createComponent = (value) => {
      const component = {
        name: value,
        label: "some test",
        value: "",
        id: id++,
      }
      // components.value.push(component)
      pushComponent(component)
    }

    // Open dialog
    const isOpen = ref(false)
    const openModal = () => {
      isOpen.value = true
    }
    const closeModal = () => {
      isOpen.value = false
    }

    return { components, createComponent, openModal, closeModal, isOpen }
  },
}
</script>
