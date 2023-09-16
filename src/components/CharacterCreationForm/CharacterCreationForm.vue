<template>
  <section>
    <h1>Character Creation Application</h1>
    <form class='character-creation-form-container'>
      <section>
        <label>Character&apos;s name</label>
        <input placeholder="Full Name" type="text" />
        <label>Character&apos;s Age</label>
        <input placeholder="18" type="number" />
      </section>
      <section>
        <label>Character&apos;s Gender</label>
        <select>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label>Hardcore Mode</label>
        <select>
          <option>No</option>
          <option>Yes</option>
        </select>
      </section>
      <label>Short story</label>
      <span></span>
      <textarea></textarea>
      <Button title="Submit" />
    </form>

  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from '../Button/Button.vue';

export default defineComponent({
  name: 'CharacterCreationForm',
  components: {
    Button
  }
});
</script>

<style lang="scss">
@import './CharacterCreationForm.scss';
</style>