<template>
    <button>{{title}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ActionButton',
    props: {
        title: {
            type: String,
            required: true
        }
    }
});
</script>