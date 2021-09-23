<template>
  <div class="container-children-box">
    <h3 class="s-b-t">{{ chainName }} Token Stats</h3>
    <header>
      <ul>
        <li>
          <div class="li-top">Total Supply</div>
          <div class="li-bottom">
            {{ (header_data.TotalSupply * 1 || 0 * 1).toFixed(6) }}
            {{ header_data.chainName }}
          </div>
        </li>
        <li>
          <div class="li-top">Circulation</div>
          <div class="li-bottom">
            {{ (header_data.Circulation * 1 || 0 * 1).toFixed(6) }}
            {{ header_data.chainName }}
          </div>
        </li>
        <li>
          <div class="li-top">Community Pool</div>
          <div class="li-bottom">
            {{ (header_data.CommunityPool * 1 || 0 * 1).toFixed(6) }}
            {{ header_data.chainName }}
          </div>
        </li>
        <li>
          <div class="li-top">Bonded</div>
          <div class="li-bottom">
            {{ (header_data.Bonded * 1 || 0 * 1).toFixed(6) }}
            {{ header_data.chainName }}
          </div>
        </li>
      </ul>
    </header>
    <h3 class="s-b-t">{{ chainName }} Token Distribution</h3>
    <section>
      <div class="left">
        <div id="main"></div>
        <!-- <Piecharts :tongji_data="tongji_data"></Piecharts> -->
      </div>
      <div class="right">
        <ul>
          <li>
            <div class="fk-box">
              <span class="fangkuai fkcolor1"></span>
              <div>NO.1~5</div>
            </div>
            <div class="center-text">
              {{ (tongji_data.topFive * 100).toFixed(2) }}%
            </div>
            <div class="right-text">
              {{ tongji_data.topFiveCoin }} {{ tongji_data.chainName }}
            </div>
            <div class="right-number">{{ tongji_data.topFiveNum }}</div>
          </li>
          <li>
            <div class="fk-box">
              <span class="fangkuai fkcolor2"></span>
              <div>NO.6~10</div>
            </div>
            <div class="center-text">
              {{ (tongji_data.topTen * 100).toFixed(2) }}%
            </div>
            <div class="right-text">
              {{ tongji_data.topTenCoin }}{{ tongji_data.chainName }}
            </div>
            <div class="right-number">{{ tongji_data.topTenNum }}</div>
          </li>
          <li>
            <div class="fk-box">
              <span class="fangkuai fkcolor3"></span>
              <div>NO.11~50</div>
            </div>
            <div class="center-text">
              {{ (tongji_data.topFifty * 100).toFixed(2) }}%
            </div>
            <div class="right-text">
              {{ tongji_data.topFiftyCoin }} {{ tongji_data.chainName }}
            </div>
            <div class="right-number">{{ tongji_data.topFiftyNum }}</div>
          </li>
          <li>
            <div class="fk-box">
              <span class="fangkuai fkcolor4"></span>
              <div>NO.51~100</div>
            </div>
            <div class="center-text">
              {{ (tongji_data.topHun * 100).toFixed(2) }}%
            </div>
            <div class="right-text">
              {{ tongji_data.topHunCoin }} {{ tongji_data.chainName }}
            </div>
            <div class="right-number">{{ tongji_data.topHunNum }}</div>
          </li>
          <li>
            <div class="fk-box">
              <span class="fangkuai fkcolor5"></span>
              <div>NO.101~500</div>
            </div>
            <div class="center-text">
              {{ (tongji_data.topFiveHun * 100).toFixed(2) }}%
            </div>
            <div class="right-text">
              {{ tongji_data.topFiveHunCoin }} {{ tongji_data.chainName }}
            </div>
            <div class="right-number">{{ tongji_data.topFiveHunNum }}</div>
          </li>
          <li>
            <div class="fk-box">
              <span class="fangkuai fkcolor6"></span>
              <div>NO.501~1000</div>
            </div>
            <div class="center-text">
              {{ (tongji_data.topThousand * 100).toFixed(2) }}%
            </div>
            <div class="right-text">
              {{ tongji_data.topThousandCoin }} {{ tongji_data.chainName }}
            </div>
            <div class="right-number">{{ tongji_data.topThousandNum }}</div>
          </li>
          <li>
            <div class="fk-box">
              <span class="fangkuai fkcolor7"></span>
              <div>NO.1001-</div>
            </div>
            <div class="center-text">
              {{ (tongji_data.otherAddress * 100).toFixed(2) }}%
            </div>
            <div class="right-text">
              {{ tongji_data.otherAddressCoin }} {{ tongji_data.chainName }}
            </div>
            <div class="right-number">{{ tongji_data.otherNum }}</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
// import Piecharts from "./conmponets/piecharts";
import * as echarts from "echarts/core";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { getCoinInfo, getCoinRange } from "@/api/tongji";
export default {
  data() {
    return {
      header_data: [],
      tongji_data: [],
      chainName: ""
    };
  },
  created() {
    this.getCoinInfoFn();
    this.getCoinRangeFn();
  },
  watch: {
    $route() {
      location.reload();
    }
  },
  methods: {
    getCoinRangeFn() {
      getCoinRange().then(res => {
        var This = this;
        this.tongji_data = res.result;
        this.tongji_data.chainName = this.tongji_data.chainName.toUpperCase();
        echarts.use([
          TooltipComponent,
          LegendComponent,
          PieChart,
          CanvasRenderer
        ]);
        var chartDom = document.getElementById("main");
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
            formatter: function(params) {
              console.log(params.data);
              return (
                params.data.name +
                ":<br/>" +
                params.data.value +
                This.tongji_data.chainName +
                "<br/>" +
                +params.data.percentage +
                "%<br/>" +
                "Pool Add. No:" +
                params.data.people
              );
            }
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
                {
                  value: this.tongji_data.topFiveCoin,
                  name: "NO.1~5",
                  people: this.tongji_data.topFiveNum,
                  percentage: (this.tongji_data.topFive * 100).toFixed(2)
                },
                {
                  value: this.tongji_data.topTenCoin,
                  name: "NO.6~10",
                  people: this.tongji_data.topTenNum,
                  percentage: (this.tongji_data.topTen * 100).toFixed(2)
                },
                {
                  value: this.tongji_data.topFiftyCoin,
                  name: "NO.11~50",
                  people: this.tongji_data.topFiftyNum,
                  percentage: (this.tongji_data.topFifty * 100).toFixed(2)
                },
                {
                  value: this.tongji_data.topHunCoin,
                  name: "NO.51~100",
                  people: this.tongji_data.topHunNum,
                  percentage: (this.tongji_data.topHun * 100).toFixed(2)
                },
                {
                  value: this.tongji_data.topFiveHunCoin,
                  name: "NO.101~500",
                  people: this.tongji_data.topFiveHunNum,
                  percentage: (this.tongji_data.topFiveHun * 100).toFixed(2)
                },
                {
                  value: this.tongji_data.topThousandCoin,
                  name: "NO.501~1000",
                  people: this.tongji_data.topThousandNum,
                  percentage: (this.tongji_data.topThousand * 100).toFixed(2)
                },
                {
                  value: this.tongji_data.otherAddressCoin,
                  name: "NO.1001-",
                  people: this.tongji_data.otherNum,
                  percentage: (this.tongji_data.otherAddress * 100).toFixed(2)
                }
              ]
            }
          ]
        };
        option && myChart.setOption(option);
        this.$scrollHeightFn();
      });
    },
    getCoinInfoFn() {
      getCoinInfo().then(res => {
        this.header_data = res.result;
        this.chainName = res.result.chainName.toUpperCase();
        this.header_data.chainName = this.header_data.chainName.toUpperCase();
      });
    }
  }
  // components: { Piecharts }
};
</script>

<style scoped lang="less">
#main {
  width: 300px;
  height: 300px;
}
header {
  background: #fff;
  padding: 30px 0px;
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      width: 260px;
      background: #ffffff;
      border: 1px solid #eaebec;
      border-radius: 5px;
      .li-top {
        line-height: 40px;
        text-align: center;
        background: #f9f9f9;
        border: 1px solid #eaebec;
      }
      .li-bottom {
        line-height: 70px;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
}
section {
  background: #fff;
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 60px 0px 40px 0px;
  margin-bottom: 40px;
}
.left {
  margin: 0px 40px;
  margin-right: 60px;
}
.right {
  padding-right: 40px;
  .fk-box {
    width: 180px;
    display: flex;
    align-items: center;
  }
  .fangkuai {
    display: inline-block;
    width: 51px;
    height: 24px;
    border-radius: 5px;
    margin-right: 20px;
  }
  .fkcolor1 {
    background: #3e91ff;
  }
  .fkcolor2 {
    background: #83c958;
  }
  .fkcolor3 {
    background: #7f5fe7;
  }
  .fkcolor4 {
    background: #f08856;
  }
  .fkcolor5 {
    background: #f2d015;
  }
  .fkcolor6 {
    background: #bf5ecb;
  }
  .fkcolor7 {
    background: #e22359;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span {
      display: inline-block;
    }
    .center-text {
      width: 80px;
      border-left: 3px solid #9196c1;
      padding: 0px 30px;
      margin: 0px 70px;
      color: #9196c1;
    }
    .right-text {
      width: 200px;
      text-align: right;
    }
  }
}
.right-number {
  width: 100px;
  text-align: right;
  color: #9196c1;
}
</style>
