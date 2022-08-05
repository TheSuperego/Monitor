<template>
<div id="aside">
  <div class="logo-div"><Logo></Logo></div>
  <div class="nav-div">
    <button> 折叠 </button>
    <el-menu default-active="/homepage" class="el-menu-demo"
        :collapse="is_collapse" :ellipsis="false" :router="true" :border-bottom="null" @select="handle_select">
        <el-menu-item index="/homepage">Home</el-menu-item>
        <el-menu-item index="/aboutpage">About</el-menu-item>
        <el-menu-item index="/chart">Chart</el-menu-item>
        <el-menu-item index="/echo">Echo</el-menu-item>
        <el-menu-item index="/console">Console</el-menu-item>
        <el-menu-item index="/performance">Performance</el-menu-item>
        <div class="flex-grow"> </div>
    </el-menu>
    </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Logo from './Logo.vue';

const props = defineProps({
    tcejbo: {
        type: Object,
        require: true
    }
})

const is_collapse = ref(false)

const handle_select = () => {}
</script>

<style>
#aside {
    background-color: white
}
</style>