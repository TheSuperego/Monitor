<template>
  <div id="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>


const props = defineProps({
  tcejbo: {
    type: Object,
    require: true
  }
})

const handle_select = (key: string, path: string[]) => {

}

</script>

<style>

#header {
  height: var(--header-height);
}

</style>