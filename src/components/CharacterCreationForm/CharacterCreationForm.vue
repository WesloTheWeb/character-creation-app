<template>
  <section>
    <h1>Character Creation Application</h1>
    <form class='character-creation-form-container'>
      <div class="character-section-grid">
        <section>
          <label>Character&apos;s name</label>
          <input v-model="characterName" placeholder="Full Name" type="text" />
          <label>Character&apos;s Age</label>
          <input v-model="characterAge" placeholder="18" type="number" />
        </section>
        <section>
          <label>Character&apos;s Gender</label>
          <select v-model="characterGender">
            <option>Male</option>
            <option>Female</option>
          </select>
          <label>Hardcore Mode</label>
          <select v-model="hardcoreMode">
            <option>No</option>
            <option>Yes</option>
          </select>
        </section>
      </div>
      <label>Short story</label>
      <span></span>
      <textarea v-model="story"></textarea>
      <Button :isDisabled="!isFormValid" title="Submit" />
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Button from '../Button/Button.vue';

export default defineComponent({
  name: 'CharacterCreationForm',
  components: {
    Button
  },
  setup() {
    const characterName = ref("");
    const characterAge = ref(0);
    const characterGender = ref("Male");
    const hardcoreMode = ref("No");
    const story = ref("");

    const isValidName = computed(() => characterName.value.trim().length >= 2);
    const isValidAge = computed(() => characterAge.value > 1);
    const isFormValid = computed(() => isValidName.value && isValidAge.value);

    return {
      characterName,
      characterAge,
      characterGender,
      hardcoreMode,
      story,
      isFormValid
    }
  }
});
</script>

<style lang="scss">
@import './CharacterCreationForm.scss';
</style>