<template>
  <!-- <div
    class="flex items-center justify-between px-3 py-3 border border-gray-300"
  > -->
  <div
    class="grid items-center px-3 py-2 border border-gray-300  grid-cols-1fr-auto"
  >
    <label for="test">{{ component.label }}</label>
    <input id="test" class="p-2" type="checkbox" />
  </div>
</template>

<script>
export default {
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
