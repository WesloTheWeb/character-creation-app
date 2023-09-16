<template>
  <section>
    <h3>Character Creation Screen</h3>
    <form>
      <label>Full name</label>
      <input placeholder="Full Name" type="text" />
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CharacterCreationForm',
  components: {
  }
});
</script>