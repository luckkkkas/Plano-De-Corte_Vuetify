<template>
    <v-app>
      <SelectInput label="Tamponamento" :items="['sem tamponamento', 'parede 2 lados', 'parede 1 lados', 'closet']" ></SelectInput>
      
      <InputNumber ></InputNumber>
      <Button label="Limpar"/>
      <Button label="Cortar"/>
  
    </v-app>
  </template>
  
  <script>
import Button from '@/components/Button.vue'
  export default {
  
  }
  </script>
  