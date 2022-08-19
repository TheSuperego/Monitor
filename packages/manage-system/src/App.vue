<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
import Aside from './components/Aside.vue';
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <Aside></Aside>
            </el-aside>
            <el-container>
                <el-affix :offset="0">
                    <Header></Header>
                </el-affix>
                <el-main>
                    <div id="frame">
                        <router-view></router-view>
                    </div>
                </el-main>
                <el-footer>Copyright The Superego</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
#frame {
    height: 100vh;
}
</style>
