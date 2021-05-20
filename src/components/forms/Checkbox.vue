<template>
  <input type="checkbox" /><label>{{ component.label }}</label>
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
