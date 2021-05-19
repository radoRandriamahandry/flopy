<template>
  <div class="flex items-center justify-center space-x-4">
    <label>{{ label }}</label>
    <input
      type="text"
      class="px-2 py-1 border border-gray-200 rounded-md outline-none  focus:ring-1 ring-gray-300"
    />
  </div>
</template>

<script>
// Props : Label placeholder default-value
export default {
  props: {
    label: {
      type: String,
      default: "",
      required: false,
    },
  },
}
</script>

<style></style>
