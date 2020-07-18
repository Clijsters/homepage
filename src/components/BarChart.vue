<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  // eslint-disable-next-line vue/require-prop-types
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
