<template>
        <v-select :label='label' v-model="selectedValue" :items='items'/>
  </template>

<script>
export default {
    props:{ 
      label : String,
      modelValue: String,
      items: Array,
      id: String
    },
    computed: {
      selectedValue:{
      get() {
        return this.value
      },
      set(value){
        this.$emit('input', value)
      }
    }
  }
}
</script>