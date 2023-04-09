<script>
import DoughnutChart from '../components/DoughnutChart.vue';
import BarChart from '../components/BarChart.vue';

export default {
      name: 'ChartPage',
      components: {
    BarChart,
    DoughnutChart
    }
};

</script>

<template>
  <div> 
    <h1>Exercise - Bar Chart</h1>
    <div class="chartContainer">
        <DoughnutChart />
    </div>
    <div class="chartContainer">
        <BarChart />
    </div>
  </div>
</template>

<style>
body {
    background-color: whitesmoke;
    color: orchid;
    font-family:cursive;
}

.chartContainer {
    padding-top: 4rem;
    padding-bottom: 4rem;
}
</style>