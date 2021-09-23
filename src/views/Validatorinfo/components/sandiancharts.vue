<template>
  <div id="container"></div>
</template>

<script>
import * as echarts from "echarts";
import { getCommissionByMoniker } from "@/api/identifier";
export default {
  props: ["userInfoData", "datas"],
  data() {
    return {
      ChartsCommissionData: []
    };
  },
  watch: {
    datas() {
      var name = this.$route.params.name;
      this.getCommissionByMonikerFn(name);
    }
  },
  mounted() {
    console.log(this.userInfoData);
  },
  methods: {
    getCommissionByMonikerFn(operatorAddress) {
      getCommissionByMoniker({ operatorAddress }).then(res => {
        this.ChartsCommissionData = res.result;
        var charttDtata = [];
        var data = [];
        res.result.map((item, key) => {
          charttDtata[key] = [
            item.commission.commission_rates.rate * 1,
            item.tokens / 1000000,
            57096869,
            item.description.moniker,
            "Other Validator"
          ];
        });

        var user_name = [JSON.parse(JSON.stringify(this.datas))];

        data = [user_name, charttDtata];
        console.log(data);
        var chartDom = document.getElementById("container");
        var myChart = echarts.init(chartDom);
        var This = this;
        var option;

        option = {
          tooltip: {
            // axisPointer: {
            //   type: "cross"
            // }
            // formatter: "{a0}:{c0}"
            formatter: function(params) {
              return (
                (params.data[0] * 100).toFixed(2) +
                "%<br/>" +
                params.data[3] +
                "：" +
                params.data[1].toFixed(6) +
                This.userInfoData.chainName.toUpperCase()
              );
            }
          },
          legend: {
            right: "10%",
            top: "3%",
            data: [this.userInfoData.description.moniker, "Other Validator"]
          },
          grid: {
            left: "15%",
            top: "10%"
          },
          xAxis: {
            splitLine: {
              lineStyle: {
                type: "dashed"
              }
            },
            axisLabel: {
              fontSize: 10
            }
          },
          yAxis: {
            axisLabel: {
              fontSize: 10,
              formatter: function(params) {
                return params / 1000000 + "M";
              }
            },
            splitLine: {
              lineStyle: {
                type: "dashed"
              }
            },
            scale: true
          },
          series: [
            {
              name: "Other Validator",
              data: data[1],
              type: "scatter",

              emphasis: {
                focus: "series",
                label: {
                  show: true,

                  position: "top"
                }
              },
              itemStyle: {
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: "#7F62EA"
                  },
                  {
                    offset: 1,
                    color: "#7F62EA"
                  }
                ])
              }
            },
            {
              name: this.userInfoData.description.moniker,
              data: data[0],
              type: "scatter",

              emphasis: {
                focus: "series",
                label: {
                  show: true,
                  formatter: function(param) {
                    return param.data[3];
                  },
                  position: "top"
                }
              },
              itemStyle: {
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: "#FF9601"
                  },
                  {
                    offset: 1,
                    color: "#FF9601"
                  }
                ])
              }
            }
          ]
        };
        option && myChart.setOption(option);
        console.log(this.userInfoData);
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
#container {
  width: 80%;
  height: 100%;
  margin-left: 10px;
}
</style>
