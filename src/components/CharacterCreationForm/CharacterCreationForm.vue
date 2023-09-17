<template>
  <form class='character-creation-form-container' @submit.prevent="submitForm">
    <div class="character-section-grid">
      <section>
        <label>Character&apos;s name</label>
        <input v-model="characterName" @blur="validateName" placeholder="Full Name" type="text" />
        <span>{{ characterNameError }}</span>

        <label>Character&apos;s Age</label>
        <input v-model="characterAge" @blur="validateAge" @input="ensureNumeric" placeholder="18" type="number" />
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
      <section>
        <p>Please select your class:</p>
        <div class="role-grid">
          <div class='roles' v-for="(className, index) in classes" :key="index">
            <input :id="className" type="radio" name="characterClass" v-model="characterClass" :value="className">
            <label :for="className">{{ className }}</label>
          </div>
        </div>
      </section>
    </div>
    <label>Short story</label>
    <div>Characters: {{ story.length }}</div>
    <textarea v-model="story"></textarea>
    <Button :isDisabled="!isFormValid" title="Submit" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, } from 'vue';
import { useStore } from 'vuex';
import Button from '../Button/Button.vue';

export default defineComponent({
  name: 'CharacterCreationForm',
  components: {
    Button
  },

  setup(props, { emit }) {
    const store = useStore();

    // v-models:
    const characterName = ref("");
    const characterAge = ref(18);
    const characterGender = ref("Male");
    const hardcoreMode = ref("No");
    const story = ref("");
    const characterClass = ref("");

    // error refs
    const characterNameError = ref("");
    const characterAgeError = ref("");

    // validation logic
    const isValidName = computed(() => characterName.value.trim().length >= 2);
    const isValidAge = computed(() => characterAge.value > 1 && characterAge.value <= 150);
    const isValidClass = computed(() => characterClass.value !== "");
    const isValidStory = computed(() => story.value.length > 0);
    const isFormValid = computed(() => isValidName.value && isValidAge.value && isValidStory.value && isValidClass.value);

    const validateName = () => {
      if (characterName.value.trim().length < 2) {
        characterNameError.value = "Name cannot be empty and must be at least two characters.";
        return false;
      } else {
        characterNameError.value = "";
        return true;
      }
    };

    const validateAge = () => {
      if (characterAge.value <= 0 || characterAge.value > 150) {
        characterAgeError.value = "Please enter a valid age (1-150).";
        return false;
      } else {
        characterAgeError.value = "";
        return true;
      }
    };

    const ensureNumeric = () => {
      if (!/^\d+$/.test(characterAge.value.toString())) {
        characterAge.value = 18; // Reset to default if non-numeric input is detected
      }
    };

    const classes = [
      'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Druid', 'Monk', 'Death Knight', 'Demon Hunter', 'Evoker'
    ];

    // ? helper functions
    const clearForm = () => {
      characterName.value = "";
      characterAge.value = 18;
      characterGender.value = "Male";
      hardcoreMode.value = "No";
      story.value = "";
      characterClass.value = "";
      characterNameError.value = "";
      characterAgeError.value = "";
    };
    
    // connect to vuex store dispatch
    const submitForm = () => {
      if (isFormValid.value) {
        const character = {
          name: characterName.value,
          age: characterAge.value,
          gender: characterGender.value,
          class: characterClass.value,
          hardcoreMode: hardcoreMode.value,
          story: story.value
        };
        store.dispatch('updateCharacter', character);
      }

      emit('form-submitted', true);
      clearForm();
    };

    return {
      characterName,
      characterAge,
      characterGender,
      classes,
      characterClass,
      hardcoreMode,
      story,
      isFormValid,
      characterNameError,
      characterAgeError,
      validateName,
      validateAge,
      ensureNumeric,
      submitForm
    }
  }
})
</script>

<style lang="scss">
@import './CharacterCreationForm.scss';
</style>
