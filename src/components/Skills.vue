<template>
  <section id="skills" class="container--fluid skills">
    <h1 class="skills__heading">
      {{ $t("skills.heading") }}
    </h1>
    <bar-chart :chart-data="chartData" :options="chartOptions" />
  </section>
</template>

<script>
import BarChart from './BarChart'

/* eslint-disable */
//Chart.defaults.global.defaultFontFamily = '"Avenir", "Helvetica Neue", Helvetica, sans-serif'
//Chart.defaults.global.defaultFontColor = 'rgba(30, 30, 36, 1)'
//Chart.defaults.global.defaultFontSize = 14 //TODO adjust according to screen width
/* eslint-enable */

export default {
  components: {
    BarChart
  },
  data () {
    return {
      chartData: {
        labels: [
          'Java',
          'Spring (Boot)',
          'Git',
          'PowerShell',
          'SQL',
          'Frontend',
          '.Net'
        ],
        datasets: [
          {
            label: 'Proficiency',
            data: [
              0.9,
              0.86,
              1,
              0.85,
              0.7,
              0.7,
              0.8
            ],
            backgroundColor: [
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
        layout: {
          padding: {
            left: 0,
            right: 25,
            top: 0,
            bottom: 0
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: 0.5,
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: (tooltip) => {
              const proficiency = tooltip.xLabel
              if (proficiency >= 0.85) {
                return 'Expert'
              }
              if (proficiency >= 0.65) {
                return 'Professional'
              }
              return 'Experienced'
            }
          }
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false
              },
              barPercentage: 1,
              categoryPercentage: 0.6
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                display: false,
                min: 0,
                max: 1
              },
              scaleLabel: {
                display: false,
                labelString: 'Proficiency'
              }
            }
          ]
        }
      }
    }
  }
}
</script>
