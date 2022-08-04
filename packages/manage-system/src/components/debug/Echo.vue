<template>
<div id="this">
  接口测试页
  <Debug></Debug>
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

</style>