<template>
    <v-app>
      <v-container>
        <v-select :label='label' :items='items'/>
      </v-container>
    </v-app>
  </template>

<script>
export default {
    props:{ 
      label : 'string',
      emit: ['updateoptions']
    },
    methods:{
      updateOptions() {
           this.items = [
                'option1',
                'option2',
                'option3',
                'option4'
            ]
        }
    }, 
    mounted(){
     this.updateOtions()
    }
}
</script>