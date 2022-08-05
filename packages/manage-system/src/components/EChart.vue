<template>
    <div id="e-chart" ref="this_chart"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import * as echarts from "echarts"
import { EChartsOption, EChartsType } from 'echarts';

const this_chart = ref<HTMLElement>()

const this_charts = ref<EChartsType>();

const option: any = {
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
};


onMounted(() => {
    console.log(this_chart.value)
    this_charts.value = echarts.init(this_chart.value!)
    this_charts.value.setOption(option)
})


</script>

<style scoped>


#e-chart {
  width: 800px;
  height: 600px;
}

</style>