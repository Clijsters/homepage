<template>
  <div class="small">
    <bar-chart :chart-data="chartData" :options="chartOptions"></bar-chart>
  </div>
</template>

<script>
  import BarChart from './BarChart'
  export default {
    components: {
      BarChart
    },
    data() {
      return {
        chartData: {
          labels: ['JavaScript', 'Angular', 'TypeScript', 'Web Services',
            'Node.js', 'Git', 'Web Design', 'HTML', 'Sass', 'C#'],
          datasets: [
            {
              label: 'Proficiency',
              data: [0.9, 0.7, 0.5, 0.5, 0.4, 0.7, 0.4, 0.6, 0.6, 0.5],
              backgroundColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(99, 102, 255, 1)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 1)'
              ]
            }
          ]
        },
        chartOptions: {
          legend: {
            display: false
          },
          tooltips: {
            callbacks: {
              label: (tooltip) => {
                const proficiency = tooltip.yLabel
                if (proficiency >= 0.9) {
                  return 'Rockstar'
                }
                if (proficiency >= 0.7) {
                  return 'Expert'
                }
                if (proficiency >= 0.5) {
                  return 'Professional'
                }
                return 'Experienced'
              }
            }
          },
          scales: {
            xAxes: [{
              barPercentage: 1,
              categoryPercentage: 0.6
            }],
            yAxes: [{
              ticks: {
                display: false,
                max: 1
              },
              scaleLabel: {
                display: true,
                labelString: 'Proficiency'
              }
            }]
          }
        }
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin: 150px auto;
  }
</style>
