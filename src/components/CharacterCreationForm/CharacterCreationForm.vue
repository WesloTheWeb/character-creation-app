<template>
  <form class='character-creation-form-container'>
    <div class="character-section-grid">
      <section>
        <label>Character&apos;s name</label>
        <input v-model="characterName" @blur="validateName" placeholder="Full Name" type="text" />
        <span>{{ characterNameError }}</span>
        <label>Character&apos;s Age</label>
        <input v-model="characterAge" @blur="validateAge" placeholder="18" type="number" />
        <span>{{ characterAgeError }}</span>
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
    // v-models:
    const characterName = ref("");
    const characterAge = ref(0);
    const characterGender = ref("Male");
    const hardcoreMode = ref("No");
    const story = ref("");

    // error refs
    const characterNameError = ref("");
    const characterAgeError = ref("");

    // validation functions
    const isValidName = computed(() => characterName.value.trim().length >= 2);
    const isValidAge = computed(() => characterAge.value > 1);
    const isFormValid = computed(() => isValidName.value && isValidAge.value);

    const validateName = () => {
      if (characterName.value.trim().length === 0) {
        characterNameError.value = "Name cannot be empty.";
        return false;
      } else {
        characterNameError.value = "";
        return true;
      }
    };

    const validateAge = () => {
      if (characterAge.value <= 0) {
        characterAgeError.value = "Age should be a positive number.";
        return false;
      } else {
        characterAgeError.value = "";
        return true;
      }
    };

    return {
      characterName,
      characterAge,
      characterGender,
      hardcoreMode,
      story,
      isFormValid,
      characterNameError,
      characterAgeError,
      validateName,
      validateAge,
    }
  }
});
</script>

<style lang="scss">
@import './CharacterCreationForm.scss';
</style>