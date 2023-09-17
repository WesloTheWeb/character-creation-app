<template>
    <div class="resultsContainer">
        <h3>Results</h3>
        <section>
            <div>
                <b>Name:</b> {{ character.name }}
            </div>
            <div>
                <b>Gender:</b> {{ character.gender }}
            </div>
            <div>
                <b>Age:</b> {{ character.age }}
            </div>
            <div>
                <b>Class:</b> {{ character.class }}
            </div>
            <div>
                <b>Hardcore Mode:</b> {{ character.hardcoreMode }}
            </div>
            <div>
                <b>Story:</b> {{ character.story }}
            </div>
        </section>
    </div>
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
  
<style>
@import './Results.scss';
</style>

<!-- ? NOTES:
Vue's computed properties are reactive. Whenever the state in the store changes, any component that uses that state through 
a computed property will automatically re-render to reflect the changes. 
-->