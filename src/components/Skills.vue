<template>
  <section id="skills" class="skills">
    <h1>{{ $t("skills.heading") }}</h1>
    <bar-chart :chart-data="chartData" :options="chartOptions"></bar-chart>
  </section>
</template>

<script>
  import BarChart from './BarChart'

  /* eslint-disable */
  Chart.defaults.global.defaultFontFamily = '"Avenir", "Helvetica Neue", Helvetica, sans-serif'
  Chart.defaults.global.defaultFontColor = 'rgba(30, 30, 36, 1)'
  Chart.defaults.global.defaultFontSize = 20
  /* eslint-enable */

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
              data: [0.85, 0.7, 0.5, 0.5, 0.4, 0.7, 0.4, 0.6, 0.6, 0.5],
              backgroundColor: [
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)',
                'rgba(45, 114, 143, 1)'
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
