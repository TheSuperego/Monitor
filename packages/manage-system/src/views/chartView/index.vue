<template>
      <div>
            <el-input placeholder="请输入警告名称" v-model="Data.input" clearable>
            </el-input>
            <el-table :data="Data.tableData" stripe style="width: 100%">
                  <el-table-column prop="errName" label="报警名称" width="180">
                  </el-table-column>
                  <el-table-column prop="type" label="类型" width="180"> </el-table-column>
                  <el-table-column prop="beling" label="所属应用"> </el-table-column>
                  <el-table-column prop="errRule" label="报警规则" width="180">
                  </el-table-column>
                  <el-table-column prop="updataTime" label="更新时间" width="180">
                  </el-table-column>
                  <el-table-column prop="userState" label="状态"> </el-table-column>
                  <el-table-column prop="use" label="操作" width="180"> </el-table-column>
            </el-table>
            <div class="elButton">
                  <el-button>批量启动报警</el-button>
                  <el-button>批量停止报警</el-button>
                  <el-button>批量删除报警</el-button>
            </div>
            <div class="elPagin">
                  <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
            </div>
      </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
      setup() {
            const Data = reactive({
                  input: "",
                  tableData: [
                        {
                              errName: "xxxx",
                              type: "xxxx",
                              beling: "xxxx",
                              errRule: "xxxx",
                              updataTime: "xxxx",
                              userState: "xxxx",
                              use: "xxxx",
                        },
                        {
                              errName: "xxxx",
                              type: "xxxx",
                              beling: "xxxx",
                              errRule: "xxxx",
                              updataTime: "xxxx",
                              userState: "xxxx",
                              use: "xxxx",
                        },
                  ],
            })

            return { Data }
      }
})
</script>

<style scoped>
.el-input {
      width: 300px;
      margin-bottom: 15px;
}

.elButton {
      float: left;
      margin-top: 10px;
}

.elPagin {
      margin-top: 10px;
      float: right;
}
</style>