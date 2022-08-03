<template>
      <div>
            <el-table :data="data.tableData" border style="width: 100%" class="tableBox">
                  <el-table-column prop="name" label="应用名称" width="180">
                  </el-table-column>
                  <el-table-column prop="label" label="标签" width="180"> </el-table-column>
                  <el-table-column prop="pv" label="PV"> </el-table-column>
                  <el-table-column prop="uv" label="UV" width="180"> </el-table-column>
                  <el-table-column prop="JSError" label="JS错误率" width="180">
                  </el-table-column>
                  <el-table-column prop="APIWin" label="API成功率"> </el-table-column>
                  <el-table-column prop="renderTime" label="首次渲染时间" width="180">
                  </el-table-column>
                  <el-table-column prop="running" label="运行状态" width="180">
                  </el-table-column>
                  <el-table-column prop="operate" label="操作"> </el-table-column>
            </el-table>
      </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
      setup() {
            const data = reactive({
                  tableData: [
                        {
                              name: "Vue2.0",
                              label: "",
                              pv: 0,
                              uv: 0,
                              JSError: "0.00%",
                              APIWin: "100.00%",
                              renderTime: "0ms",
                              running: "running",
                              operate: "",
                        },
                        {
                              name: "Vue2.0",
                              label: "",
                              pv: 0,
                              uv: 0,
                              JSError: "0.00%",
                              APIWin: "100.00%",
                              renderTime: "0ms",
                              running: "running",
                              operate: "",
                        },
                  ],
            })

            return { data }
      }
})
</script>

<style scoped>
</style>