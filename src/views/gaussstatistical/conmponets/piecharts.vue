<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
// import * as echarts from "echarts";
import * as echarts from "echarts/core";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
export default {
  props: ["tongji_data"],
  data() {
    return {};
  },
  mounted() {
    echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);
    var chartDom = document.getElementById("main");
    console.log(chartDom);
    var myChart = echarts.init(chartDom);
    var option = {
      color: [
        "#3E91FF",
        "#83C958",
        "#7F5FE7",
        "#F08856",
        "#F2D015",
        "#BF5ECB",
        "#E22359"
      ],
      tooltip: {
        trigger: "item"
      },
      //   legend: {
      //     top: "5%",
      //     left: "center"
      //   },
      series: [
        {
          // name: "访问来源",
          type: "pie",
          radius: ["80%", "57%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",

              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: this.tongji_data.topFiveCoin, name: "NO.1~5" },
            { value: this.tongji_data.topTenCoin, name: "NO.6~10" },
            { value: this.tongji_data.topFiftyCoin, name: "NO.11~50" },
            { value: this.tongji_data.topHunCoin, name: "NO.51~100" },
            { value: this.tongji_data.topFiveHunCoin, name: "NO.101~500" },
            { value: this.tongji_data.topThousandCoin, name: "NO.501~1000" },
            { value: this.tongji_data.otherAddressCoin, name: "NO.1001-" }
          ]
        }
      ]
    };
    option && myChart.setOption(option);
  },
  components: {}
};
</script>

<style scoped lang="less">
#main {
  width: 300px;
  height: 300px;
}
</style>
