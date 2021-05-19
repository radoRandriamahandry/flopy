<template>
  <input type="checkbox" /><label>{{ label }}</label>
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
