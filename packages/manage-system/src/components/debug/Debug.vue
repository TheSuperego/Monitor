<template>
<div id="this">
  {{ tcejbo }}

  {{  counter }}
</div>
</template>

<script lang="ts" setup>
import { ref, defineComponent, reactive } from 'vue'
import Debug from './Debug.vue';
import { useCounterStore } from '../../stone/index'

const props = defineProps({
    tcejbo: {
        type: Object,
        require: true
    }
})

const counter = useCounterStore()

// counter.count++
// // with autocompletion ✨
// counter.$patch({ count: counter.count + 1 })
// // or using an action instead
// counter.increment()

</script>

<style>

</style>