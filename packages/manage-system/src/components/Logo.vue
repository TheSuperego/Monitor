<template>
<div id="logo">
  Logo
</div>
</template>

<script lang="ts" setup>
import { ref, defineComponent, reactive } from 'vue'
import Debug from './Debug.vue';

const props = defineProps({
    tcejbo: {
        type: Object,
        require: true
    }
})
</script>

<style>
#logo {
  display: flex;
  justify-content: center;
  background: #4f4f4f;
  color: white;
  align-items: center;
}
</style>