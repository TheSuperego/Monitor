<template>
<div>
<div>
        {{ perf_obj }}
    </div>

    <div>
        首次绘制时间 {{ format_time(perf_obj.fp.durationTime) }}
    </div>

    <div>
        首次内容绘制时间 {{ format_time(perf_obj.fcp.durationTime) }}
    </div>
</div>
</template>

<script lang='ts' setup>

import api_get from '../../api/get'

import { onMounted, reactive, ref } from 'vue'
import EChart from '../../components/EChart.vue'
import { ElMessage } from 'element-plus'
import { AxiosError } from 'axios'
import { PerformanceObject } from '../../types'
import sockets from '../../api/tool/socket'
sockets();
const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }
    ]
}
const Data = reactive({
    input: '',
    tableData: [
        {
            errName: 'xxxx',
            type: 'xxxx',
            beling: 'xxxx',
            errRule: 'xxxx',
            updataTime: 'xxxx',
            userState: 'xxxx',
            use: 'xxxx'
        },
        {
            errName: 'xxxx',
            type: 'xxxx',
            beling: 'xxxx',
            errRule: 'xxxx',
            updataTime: 'xxxx',
            userState: 'xxxx',
            use: 'xxxx'
        }
    ]
})

const success_message = ref()

const error_message = ref()

const perf_obj: PerformanceObject = reactive({
    fcp: Object(),
    fp: Object(),
    xhr: Object(),
    fet: Object(),
    fps: Object(),
    lcp: Object(),
    cls: Object(),
    bfc: Object(),
    res: Object(),
    load: Object()
})


const format_time = (timestamp: number) => {
    let this_date = new Date(timestamp)
    return `${this_date.getMilliseconds()} 毫秒`
}


const mix_api_get = async (params: { msg: string; }) => {
    let res_fcp = await api_get.performance.api_get_performance_fcp(params)
    perf_obj.fcp = res_fcp.data
    let res_fp = await api_get.performance.api_get_performance_fp(params)
    perf_obj.fp = res_fp.data
    let res_xhr = await api_get.performance.api_get_performance_xhr(params)
    perf_obj.xhr = res_xhr.data
    let res_fet = await api_get.performance.api_get_performance_fetch(params)
    perf_obj.fet = res_fet.data
    let res_fps = await api_get.performance.api_get_performance_fps(params)
    perf_obj.fps = res_fps.data
    let res_lcp = await api_get.performance.api_get_performance_lcp(params)
    perf_obj.lcp = res_lcp.data
    let res_cls = await api_get.performance.api_get_performance_cls(params)
    perf_obj.cls = res_cls.data
    let res_bfc = await api_get.performance.api_get_performance_bfc(params)
    perf_obj.bfc = res_bfc.data
    let res_resource = await api_get.performance.api_get_performance_resource(params)
    perf_obj.res = res_resource.data
    let res_load = await api_get.performance.api_get_performance_load(params)
    perf_obj.load = res_load.data
}

onMounted(async () => {
    try {
        let res = await mix_api_get({ msg: 'QAQ' })
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