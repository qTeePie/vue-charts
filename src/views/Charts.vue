<template>
  <div class="container"> 
    <div class="chartContainer">
      <h3>Exercise - Bar Chart</h3>
        <BarChart />
    </div>
    <div class="chartContainer">
      <h3>Exercise - Doughnut Chart </h3>
      <div class="doughnutContainer">
        <DoughnutChart :stats="this.stats" />
        <div class="fetchFromApi">
      <button @click.prevent="">FETCH FROM API</button>
      <div class="fetchingMessage"><h3 v-if="fetching">Fetching Data!</h3></div>
      <div v-if="error">
        <h3>erorr!! {{ error }}</h3>
      </div>
      <div class="fetchingMessage"><h3 v-if="stats">{{ JSON.stringify(stats.disciplineMinutes) }}</h3></div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart.vue';
import BarChart from '../components/BarChart.vue';
import FetchStats from "../http/get-userstats.js";

export default {
  name: 'ChartPage',
  components: {
    BarChart,
    DoughnutChart,
  },
  setup() {
    const { stats, error, fetching, statsByUser } = FetchStats();
    return {
      stats,
      error, 
      fetching,
      statsByUser,
    }
  },
 mounted() {
  this.statsByUser();
 },
}
</script>

<style>
body {
  background-color: whitesmoke;
  color: #d798d0;
  font-family:cursive;
}

.container {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.chartContainer {
  height: 500px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #d798d0;
  padding-bottom: 3rem;
  min-width: fit-content
}

.chartContainer h3 {
  margin-bottom: 3rem;
}

.doughnutContainer {
  display: flex;
  flex-direction: row;
}

.fetchData {
    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;
}

.fetchFromApi {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}

.fetchingMessage {
  width: fit-content;
  height: 50px;
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

@media (max-width: 800px){
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>