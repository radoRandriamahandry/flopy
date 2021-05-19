<template>
  <header>
    <div class="max-w-screen-lg mx-auto">
      <h1 class="py-5 text-2xl font-semibold text-center">Home</h1>
    </div>
  </header>
  <main class="max-w-screen-lg mx-auto">
    <ComponentsCreator />
  </main>
</template>

<script>
import ComponentsCreator from "../components/ComponentsCreator.vue"

export default {
  components: {
    ComponentsCreator,
  },
}
</script>
