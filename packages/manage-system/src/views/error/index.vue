<template>


    <div class='error-card'>
        {{ error_obj.err_js }}
    </div>

    <div class="error-card">
        {{ error_obj.err_promise}}
    </div>

    <div class="error-card">
        {{ error_obj.err_resource}}
    </div>

    <div class="error-card">
        {{ error_obj.err_vue}}
    </div>

    <div class="error-card">
        {{ error_obj.err_console  }}
    </div>

</template>

<script lang='ts' setup>


import api_get from '../../api/get'
import { onMounted, reactive, ref } from 'vue'
import { AxiosError } from 'axios'
import { ElMessage } from 'element-plus'

const success_message = ref()

const error_message = ref()

const error_obj = reactive({
    err_js: "",
    err_promise: "",
    err_resource: "",
    err_vue: "",
    err_console: ""
})

const mix_api_get_error = async (params: { msg: string; }) => {
    let res_err_js = await api_get.error.error_js(params)
    error_obj.err_js = res_err_js.data
    let res_err_promise = await api_get.error.error_promise(params)
    error_obj.err_promise = res_err_promise.data
    let res_err_resource = await api_get.error.error_resource(params)
    error_obj.err_resource = res_err_resource.data
    let res_err_vue = await api_get.error.error_vue(params)
    error_obj.err_vue = res_err_vue.data
    let res_err_console = await api_get.error.error_console(params)
    error_obj.err_console = res_err_console.data
}

onMounted(async () => {
    try {
        let res = await mix_api_get_error({ msg: 'QAQ' })
    } catch (e) {
        let error = e as AxiosError
        error_message.value = error.response?.data
        ElMessage({
            showClose: true,
            message: 'Oops, ' + error_message.value,
            type: 'error'
        })
    }
})

</script>

<style scoped>

</style>