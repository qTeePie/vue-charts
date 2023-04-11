<template>
  <div class="container"> 
    <div class="chartContainer">
      <h3>Exercise - Bar Chart</h3>
        <BarChart />
    </div>
    <div class="chartContainer">
      <h3>Exercise - Doughnut Chart </h3>
        <DoughnutChart />
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
      statsByUser
    }
  },
  mounted() {
    this.statsByUser();
  },
  methods: {
    getStats(){
      this.statsByUser().then(() => console.log(this.stats));
    }
  }
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
  display: block;
  border-bottom: 2px solid #d798d0;
  padding-bottom: 3rem;
  min-width: fit-content
}

@media (max-width: 800px){
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>