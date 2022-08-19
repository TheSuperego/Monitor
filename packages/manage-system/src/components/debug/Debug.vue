<template>
  <div id="this">
    {{ tcejbo }}

    {{ counter }}

    <el-button @click="test_api_echo"></el-button>

  </div>


  {{ success_message }}

  <p> {{ fcp_message }} </p>
</template>

<script lang="ts" setup>
import { ref, defineComponent, reactive, onMounted } from 'vue'
import { useCounterStore } from '../../stone/index'
import { echo } from '../../api/service';
import { ElMessage } from 'element-plus';
import axios, { AxiosError } from 'axios';
import { logger } from 'utils/logger';
import service from '../../api/service';

const props = defineProps({
  tcejbo: {
    type: Object,
    require: true
  }
})


const counter = useCounterStore()

const success_message = ref()

const error_message = ref()

const fp_message = ref()
const fcp_message = ref()

const test_api_echo = async (): Promise<void> => {
  try {
    let result = await echo()
    success_message.value = result.data
    fp_message.value = performance.getEntriesByType('paint')
  } catch (e) {
    let error = e as AxiosError
    error_message.value = error.response?.data
    ElMessage({
      showClose: true,
      message: "Oops, " + error_message.value,
      type: "error",
    })
  }
}

onMounted(async () => {

  try {
    let res = await service.api_get.performance.api_get_performance_fcp({ msg: "QAQ" })
    fcp_message.value = res.data
  } catch (e) {
    let error = e as AxiosError
    error_message.value = error.response?.data
    ElMessage({
      showClose: true,
      message: "Oops, " + error_message.value,
      type: "error",
    })
  }


  // axios.create({
  //   baseURL: 'http://127.0.0.1:4523/m1/1398177-0-default/get/performance/fp',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).post('', {
  //     msg: "QAQ"
  //   })
  //   .then(res => {
  //     fcp_message.value = res.data
  //   })
  //   .catch(err => {
  //     // logger.error(err)
  //   }
  //   )
})

</script>

<style>
</style>