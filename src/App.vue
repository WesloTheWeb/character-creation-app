<template>
  <h1>Character Creation Application</h1>
  <CharacterCreationForm @form-submitted="handleFormSubmission" />
  <FormResults v-if="formFilledOut" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CharacterCreationForm from './components/CharacterCreationForm/CharacterCreationForm.vue';
import FormResults from './components/Results/Results.vue';

export default defineComponent({
  name: 'App',
  components: {
    CharacterCreationForm,
    FormResults
  },
  setup() {
    const formFilledOut = ref(false); // Initial state is false

    const handleFormSubmission = (value: boolean) => {
      formFilledOut.value = value;
    };

    return {
      formFilledOut,
      handleFormSubmission
    };
  }
});
</script>

<style lang="scss">
@import './styles/main.scss';
</style>