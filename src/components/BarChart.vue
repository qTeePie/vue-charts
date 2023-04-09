<template>
<div id="app">
    <Bar
    id="my-chart-id"
    :options="options"
    :data="data"
    />
</div>
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
//Component registeration.
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import * as chartConfig from './chartConfigs/chartConfigsBar.js'
export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return chartConfig
  }
}

</script>
  
  <style>
  
  
  </style>