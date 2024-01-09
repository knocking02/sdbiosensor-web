<template>
   <q-page class="q-pa-sm">
      <div class="row q-col-gutter-sm q-py-sm">
         <div class="col-lg-4">
            <echart type="line" :options="lineOptions0"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="line" :options="lineOptions1"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="line" :options="lineOptions2"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="line" :options="lineOptions3"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="bar" :options="barOptions1"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="bar" :options="barOptions2"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="bar" :options="barOptions3"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="bar" :options="barOptions4"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="bar" :options="barOptions5"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="pie" :options="pieOptions"></echart>
         </div>
         <div class="col-lg-4">
            <echart type="custom" :options="customOptions"></echart>
         </div>
      </div>
   </q-page>
</template>

<script setup>
import * as echarts from 'echarts'
import Echart from '@/components/echart/Echart.vue'
import BarChart from '@/components/echart/components/BarChart.vue'
import { ref } from 'vue'

/** Custom Chart Options */
const customOptions = {}

/** Line Chart Options */
const lineOptions0 = ref({
   xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
   },
   yAxis: {
      type: 'value',
   },
   series: [
      {
         data: [30, 50, 70, 100, 80, 90, 130],
         type: 'line',
         markLine: {
            symbol: 'none',
            animation: false,
            lineStyle: {
               color: 'red',
               type: 'solid',
            },
            data: [
               { yAxis: 0, label: { color: 'gray', distance: 8 } },
               { yAxis: 40, label: { color: 'gray', distance: 8 } },
               { yAxis: 70, label: { color: 'gray', distance: 8 } },
               { yAxis: 100, label: { color: 'gray', distance: 8 } },
               { yAxis: 130, label: { color: 'gray', distance: 8 } },
            ],
         },
      },
   ],
})

const lineOptions1 = ref({
   tooltip: {
      axisPointer: {
         label: {
            formatter: function (params) {
               return echarts.format.formatTime('MM.dd', params.value) + ' ' + params.seriesData[0].value + ' cm'
            },
         },
      },
   },
   xAxis: {
      data: ['2023-07-21', '2023-07-22', '2023-07-23', '2023-07-24', '2023-07-25', '2023-07-26', '2023-07-27'],
      axisLabel: {
         formatter: function (value) {
            return echarts.format.formatTime('MM.dd', value)
         },
      },
   },
   yAxis: {
      type: 'value',
      position: 'right',
      max: 100,
      min: 40,
      interval: 30,
      axisLabel: {
         showMaxLabel: true,
      },
   },
   series: [
      {
         data: [60, 90, 80, 75, 79, '-', 75],
         type: 'line',
         symbol: 'circle',
         symbolSize: 12,
         lineStyle: {
            color: '#000',
            width: 2,
            type: '',
         },
         itemStyle: {
            color: (data) => {
               let color = ''
               if (data.value < 70) {
                  color = 'blue'
               } else if (data.value < 80) {
                  color = '#91cc75'
               } else if (data.value < 90) {
                  color = 'yellow'
               } else if (data.value >= 90) {
                  color = 'red'
               }
               return color
            },
         },
         markLine: {
            symbol: 'none',
            animation: false,
            lineStyle: {
               color: 'red',
               type: 'solid',
            },
            data: [
               { yAxis: 0, label: { color: 'gray', distance: 8 } },
               { yAxis: 40, label: { color: 'gray', distance: 8 } },
               { yAxis: 70, label: { color: 'gray', distance: 8 } },
               { yAxis: 100, label: { color: 'gray', distance: 8 } },
               { yAxis: 130, label: { color: 'gray', distance: 8 } },
            ],
         },
      },
   ],
})

const lineOptions2 = ref({
   tooltip: {
      axisPointer: {
         label: {
            formatter: function (params) {
               return echarts.format.formatTime('MM.dd', params.value) + ' ' + params.seriesData[0].value + ' cm'
            },
         },
      },
   },
   xAxis: {
      data: ['2023-07-21', '2023-07-22', '2023-07-23', '2023-07-24', '2023-07-25', '2023-07-26', '2023-07-27'],
      axisLabel: {
         formatter: function (value) {
            return echarts.format.formatTime('MM.dd', value)
         },
      },
   },
   yAxis: {
      type: 'value',
      position: 'right',
      max: 120,
      //min: 40,
      //interval: 30,
      axisLabel: {
         showMaxLabel: true,
      },
   },
   series: [
      {
         data: [60, 90, 80, 75, 79, 40, 75],
         type: 'line',
         symbol: 'rect',
         symbolSize: [7, 80],
         lineStyle: {
            color: '#000',
            width: 2,
            type: '',
         },
         itemStyle: {
            color: (data) => {
               let color = ''
               if (data.value < 70) {
                  color = 'blue'
               } else if (data.value < 80) {
                  color = '#91cc75'
               } else if (data.value < 90) {
                  color = 'yellow'
               } else if (data.value >= 90) {
                  color = 'red'
               }
               return color
            },
         },
      },
   ],
})

let base = +new Date(1988, 9, 3)
let oneDay = 24 * 3600 * 1000
let data = [[base, Math.random() * 300]]
for (let i = 1; i < 20000; i++) {
   let now = new Date((base += oneDay))
   data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])])
}
const lineOptions3 = {
   xAxis: {
      type: 'time',
      boundaryGap: false,
   },
   yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
   },
   series: [
      {
         name: 'Fake Data',
         type: 'line',
         smooth: true,
         symbol: 'none',
         itemStyle: {
            color: 'rgb(250, 200, 88)',
         },
         areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
               {
                  offset: 0,
                  color: 'rgb(233, 233, 11)',
               },
               {
                  offset: 1,
                  color: 'rgb(247, 247, 233)',
               },
            ]),
         },
         data: data,
      },
   ],
}

/** Bar Chart Options */
const barOptions1 = ref({
   tooltip: {
      axisPointer: {
         label: {
            formatter: function (params) {
               return params.value + ' ' + params.seriesData[0].value + ' 시간'
            },
         },
      },
   },
   xAxis: {
      type: 'category',
      data: ['월', '화', '수', '목', '금', '토', '일'],
   },
   yAxis: {
      position: 'right',
   },
   series: [
      {
         name: 'Income',
         type: 'bar',
         barWidth: 13,
         data: [3, 9, 6, 8, 11, 4, 9],
         itemStyle: {
            color: 'gray',
         },
      },
   ],
})

const barOptions2 = ref({
   tooltip: {
      axisPointer: {
         label: {
            formatter: function (params) {
               return params.value + ' ' + params.seriesData[0].value + ' 시간'
            },
         },
      },
   },
   xAxis: {
      type: 'category',
      axisLine: {
         show: false,
      },
      axisTick: {
         show: false,
      },
      data: ['월', '화', '수', '목', '금', '토', '일'],
   },
   yAxis: {
      position: 'right',
      splitLine: {
         show: false,
      },
   },
   series: [
      {
         name: 'Income',
         type: 'bar',
         barWidth: 13,
         data: [3, 9, 6, 8, 11, 4, 9],
         itemStyle: {
            color: 'gray',
         },
      },
   ],
})

const barOptions3 = ref({
   tooltip: {
      axisPointer: {
         label: {
            formatter: function (params) {
               return params.value + ' ' + params.seriesData[0].value + ' 시간'
            },
         },
      },
   },
   xAxis: {
      type: 'category',
      axisLine: {
         show: false,
      },
      axisTick: {
         show: false,
      },
      data: ['월', '화', '수', '목', '금', '토', '일'],
   },
   yAxis: {
      position: 'right',
      splitLine: {
         show: false,
      },
   },
   series: [
      {
         name: 'Placeholder',
         type: 'bar',
         stack: 'Total',
         itemStyle: {
            borderColor: 'transparent',
            color: 'transparent',
         },
         data: [40, 10, 20, 50, 45, 55, 10],
      },
      {
         name: 'Life Cost',
         type: 'bar',
         barWidth: 13,
         stack: 'Total',
         itemStyle: {
            color: 'gray',
         },
         data: [50, 65, 45, 10, 7, 13, 80],
      },
   ],
})

const barOptions4 = ref({
   title: {
      show: true,
      textStyle: {
         color: 'grey',
         fontSize: 14,
      },
      text: '기록이 없습니다.\n오늘은 밴드를 꼭 착용해보세요.',
      left: 'center',
      top: 'center',
   },
   tooltip: {
      axisPointer: {
         label: {
            formatter: function (params) {
               return params.value + ' ' + params.seriesData[0].value + ' 시간'
            },
         },
      },
   },
   xAxis: {
      type: 'category',
      axisLine: {
         show: false,
      },
      axisTick: {
         show: false,
      },
      data: ['월', '화', '수', '목', '금', '토', '일'],
   },
   yAxis: {
      position: 'right',
      splitLine: {
         show: false,
      },
      max: 100,
      min: 20,
   },
   series: [
      {
         name: 'Income',
         type: 'bar',
         barWidth: 13,
         data: [],
         itemStyle: {
            color: 'gray',
         },
      },
   ],
})

const barOptions5 = ref({
   tooltip: {
      axisPointer: {
         label: {
            formatter: function (params) {
               return params.value + ' ' + params.seriesData[0].value + ' 시간'
            },
         },
      },
   },
   xAxis: {
      type: 'category',
      data: ['월', '화', '수', '목', '금', '토', '일'],
   },
   yAxis: {
      position: 'right',
   },
   series: [
      {
         name: 'Income',
         type: 'bar',
         barWidth: 13,
         data: [30, 45, 65, 50, 80, 85, 58],
         itemStyle: {
            color: (data) => {
               let color = ''
               if (data.value < 40) {
                  color = '#91cc75'
               } else if (data.value < 60) {
                  color = 'orange'
               } else if (data.value >= 60) {
                  color = 'red'
               }
               return color
            },
         },
      },
   ],
})

/** Pie Chart Options */
const pieOptions = ref({
   series: [
      {
         name: '아침',
         type: 'pie',
         radius: ['15%', '20%'],
         center: ['20%', '40%'],
         label: {
            show: true,
            position: 'center',
            formatter: (params) => {
               return 10 - params.value + '/' + params.value
            },
            fontSize: 14,
            fontWeight: 'bolder',
         },
         emphasis: {
            disabled: true,
         },
         data: [
            { value: 3, itemStyle: { color: '#575151' } },
            { value: 7, itemStyle: { color: '#e7e7e7' } },
         ],
      },
      {
         name: '점심',
         type: 'pie',
         radius: ['15%', '20%'],
         center: ['40%', '40%'],
         label: {
            show: true,
            position: 'center',
            formatter: (params) => {
               return 10 - params.value + '/' + params.value
            },
            fontSize: 14,
            fontWeight: 'bolder',
         },
         emphasis: {
            disabled: true,
         },
         data: [
            { value: 2, itemStyle: { color: '#575151' } },
            { value: 8, itemStyle: { color: '#e7e7e7' } },
         ],
      },
      {
         name: '저녁',
         type: 'pie',
         radius: ['15%', '20%'],
         center: ['60%', '40%'],
         label: {
            show: true,
            position: 'center',
            formatter: (params) => {
               return 10 - params.value + '/' + params.value
            },
            fontSize: 14,
            fontWeight: 'bolder',
         },
         emphasis: {
            disabled: true,
         },
         data: [
            { value: 1, itemStyle: { color: '#575151' } },
            { value: 9, itemStyle: { color: '#e7e7e7' } },
         ],
      },
      {
         name: '간식',
         type: 'pie',
         radius: ['15%', '20%'],
         center: ['80%', '40%'],
         label: {
            show: true,
            position: 'center',
            formatter: (params) => {
               return 10 - params.value + '/' + params.value
            },
            fontSize: 14,
            fontWeight: 'bolder',
         },
         emphasis: {
            disabled: true,
         },
         data: [
            { value: 0, itemStyle: { color: '#575151' } },
            { value: 10, itemStyle: { color: '#e7e7e7' } },
         ],
      },
   ],
})
</script>

<style scoped></style>
