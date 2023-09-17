<template>
    <h3>Results</h3>
    <section>
        <div>
            Name: {{ character.name }}
        </div>
        <div>
            Gender: {{ character.gender }}
        </div>
        <div>
            Age: {{ character.age }}
        </div>
        <div>
            Class: {{ character.class }}
        </div>
        <div>
            Hardcore Mode: {{ character.hardcoreMode }}
        </div>
        <div>
            Story: {{ character.story }}
        </div>
    </section>
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'FormResults',
    setup() {
        const store = useStore();

        // Using a computed property to reactively get the character from the store
        const character = computed(() => store.getters.getCharacter);

        return {
            character
        };
    }
});
</script>
  
<!-- ? NOTES:
Vue's computed properties are reactive. Whenever the state in the store changes, any component that uses that state through 
a computed property will automatically re-render to reflect the changes. 
-->


