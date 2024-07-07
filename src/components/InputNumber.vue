<template>
  <div>
    <v-text-field type="number"
      :rules="rules"
      hide-details="auto"
      label="Largura (mm):"
    />
    <v-text-field type="number" :rules="rules" label="Altura (mm):" />
    <v-text-field type="number" :rules="rules" label="Profundidade (mm):" />
  </div>
</template>

<script>
export default {
  props: ['label'],
  data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 2) || 'Mínimo 2 Números',
      ],
    }),
}
</script>