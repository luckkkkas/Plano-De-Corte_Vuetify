<template>
  <div>
    <v-text-field 
      type="number" 
      :label="label"
      hint="selecr"
    />
  </div>
</template>

<script>
export default {
  props:{
    label: String,
    value: [String,Number],
  } 
  
}
</script>
<style  scoped>

</style>