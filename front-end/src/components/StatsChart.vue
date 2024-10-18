<template>
    <div id="stat-chart">
        <Bar
            id="player-stats-chart"
            :options="chartOptions"
            :data="playerStats"
        />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      playerStats: {
        labels: [ '1', '2', '3', '4', 'Fail' ],
        datasets: [ { 
            label: 'Number of Guesses',
            data: this.$store.state.stats.guesses,
            backgroundColor: '#d7263d',
            color: 'black' } ]
      },
      chartOptions: {
        responsive: true,
        animation: true,
      }
    }
  }
}
</script>

<style>
#stat-chart {
    width: 80vw;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
    background-color: #41446c;
}
</style>