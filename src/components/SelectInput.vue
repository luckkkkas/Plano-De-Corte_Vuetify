<template>
        <v-select :label='label' :items='items'/>
  </template>

<script>
export default {
    props:{ 
      label : String,
      modelValue: String,
      items: Array,
      id: String
    },
    emits: ['update:modelValue'],
    watch: {
    modelValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>