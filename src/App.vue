<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <CharacterCreationForm />

  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  content be here instead
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