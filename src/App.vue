<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  content be here instead
  <CharacterCreationForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import CharacterCreationForm from './components/CharacterCreationForm/CharacterCreationForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    CharacterCreationForm
  }
});
</script>

<style lang="scss">
@import '../variables.scss';

#app {
  background-color: $appBackgroundColor;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
