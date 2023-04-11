<template>
    <div class="chart" v-if="stats">
      <canvas id="myChart" ></canvas>
  </div>
</template>
      
<script>
import Chart from 'chart.js/auto'
import * as chartConfig from './chartConfigs/chartConfigsDoughnut.js'

let myChart = null;

const UpdatePieChart = (stats, config) => {
  const sportDisciplines = new Map(Object.entries(JSON.parse(JSON.stringify(stats.disciplineMinutes))));
  config.data.labels = Array.from(sportDisciplines.keys());
  config.data.datasets[0].data = Array.from(sportDisciplines.values());
  
  console.log("THIS IS MOTHEFUCKING STATSSS");
  console.log(stats);
  myChart.update();
}

export default {
  name: 'DoughnutChart',
  props: {
    stats: {
      required: true
    }
  },
  setup() {
    return {
      chartConfig,
      myChart,
    }
  },
  mounted() {
    const ctx = document.getElementById('myChart');
    myChart = new Chart(
      ctx,
      chartConfig.config,
      chartConfig.data
    );
    myChart;
  },
  watch: {
    stats(newVal){
      if(newVal.disciplineMinutes === undefined){
        return;
      }else{
        UpdatePieChart(JSON.parse(JSON.stringify(newVal)), this.chartConfig);
      }
    }
  }
}

</script>
<style>
.doughnutChart {
    max-width: 300px;
    min-width: 150px;
}
</style>