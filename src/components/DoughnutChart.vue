<template>
  <div class="doughnutContainer">
    <div class="chart" v-if="stats">
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
    <div class="fetchFromApi">
    <button @click.prevent="getStats()">FETCH FROM API</button>
    <div class="fetchingMessage"><h3 v-if="fetching">Fetching Data!</h3></div>
    <div v-if="error">
      <h3>erorr!! {{ error }}</h3>
    </div>
    <div class="fetchingMessage"><h3 v-if="stats">{{ JSON.stringify(stats.disciplineMinutes) }}</h3></div>
  </div>
  </div>
</template>
      
<script>
import Chart from 'chart.js/auto'
import * as chartConfig from './chartConfigs/chartConfigsDoughnut.js'
import FetchStats from "../http/get-userstats.js"

let myChart = null;

const UpdatePieChart = (stats, config) => {
  const sportDisciplines = new Map(Object.entries(JSON.parse(JSON.stringify(stats.disciplineMinutes))));
  const keys = Array.from(sportDisciplines.keys());
  console.log(keys);
  config.data.labels = keys;
  myChart.update();
}

export default {
  name: 'DoughnutChart',
  setup() {
    const { stats, error, fetching, statsByUser } = FetchStats();
    return {
      stats,
      error, 
      fetching,
      statsByUser,
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
    this.statsByUser();
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
.doughnutContainer .doughnutChart {
    max-width: 300px;
    min-width: 150px;
}

.fetchData {
    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;
}

button {
    background-color: #eaa3e1;
    width: 10rem;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color: white;
    font-weight: 600;
}

.doughnutContainer {
  display: flex;
  flex-direction: row;
}
.fetchFromApi {
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
}

.fetchingMessage {
  width: fit-content;
  height: 50px;
}
</style>