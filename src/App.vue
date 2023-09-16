<template>
    <h1>Character Creation Application</h1>
  <CharacterCreationForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CharacterCreationForm from './components/CharacterCreationForm/CharacterCreationForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    CharacterCreationForm,
  }
});
</script>

<style lang="scss">
@import './styles/main.scss';
</style>