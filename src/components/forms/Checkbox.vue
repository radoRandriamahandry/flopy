<template>
  <div class="space-x-4">
    <input type="checkbox" /><label>{{ label }}</label>
  </div>
</template>

<script>
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
