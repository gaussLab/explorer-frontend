<template>
  <div class="container">
    <div class="section">
      <div class="section-image"></div>
      <div class="section-data">
        <div class="section-tops">
          <div class="scrach">
            <Vscrach :home_butts="home_butts_val"></Vscrach>
          </div>
          <div class="srech-text">
            <div v-if="WebSocket_data[0].coinInfo">
              Price: ${{
              (WebSocket_data[0].coinInfo.coinAmount * 1 || 0).toFixed(6)
              }}
            </div>
            <div v-else>Price: --</div>

            <div v-if="WebSocket_data[0].coinInfo">
              Market Cap: ${{
              (WebSocket_data[0].coinInfo.totalMarketValue * 1 || 0).toFixed(
              2
              )
              }}
            </div>
            <div v-else>Market Cap: -- }}</div>

            <div v-if="WebSocket_data[0].coinInfo">
              Inflation:
              {{
              (WebSocket_data[0].coinInfo.Inflation * 100 || 0).toFixed(2)
              }}%
            </div>

            <div v-else>Inflation: --</div>

            <div v-if="WebSocket_data[0].coinInfo">
              Community Pool:{{
              (WebSocket_data[0].coinInfo.CommunityPool * 1 || 0).toFixed(2)
              }}
              {{ WebSocket_data[0].coinInfo.chainName.toUpperCase() }}
            </div>
            <div v-else>Community Pool:--</div>
          </div>
        </div>
        <div class="section-middel">
          <div class="middel-left">
            <div class="l-title">
              <img src="../../assets/mokuai.png" />
              <span>Block Height</span>
            </div>
            <h3
              style="font-size:25px; font-weight:normal;"
              class="shubiao"
              @click="$blockChainInfosRouterFn(WebSocket_data[0].height)"
            >{{ (WebSocket_data[0].height * 1 || 0).toFixed(0) }}</h3>
            <div class="shubiao" @click="$userInfoRouterFn(WebSocket_data[0].operatorAddress)">
              <img class="img_icon" :src="WebSocket_data[0].validator_coin" />
              <p>{{ WebSocket_data[0].validator }}</p>
            </div>
          </div>
          <div class="middel-right">
            <div class="ulrs">
              <div class="margins">
                <div class="r-title">
                  <img src="../../assets/tuceng.png" />
                  <span>Transactions</span>
                </div>
                <div
                  class="r-cneter-text shubiao"
                  @click="clickRoutesFn('/deal')"
                >{{ (WebSocket_data[0].totalTxNum * 1 || 0).toFixed(0) }}</div>
                <div class="spans">{{ WebSocket_data[0].time_stamp_time }} UTC</div>
              </div>
              <div class="margins">
                <div class="r-title flex-title">
                  <div>
                    <img src="../../assets/zu3.png" />
                    <span class>Average Block Time ({{ selectTimeTxt }})</span>
                  </div>
                  <div class="gengduo">
                    <img src="../../assets/zu.png" />
                    <div class="gengduo-text">
                      <p @click="getSecondsFn('averageTime')">All Time</p>
                      <p @click="getSecondsFn('minuteTime')">Last Minute</p>
                      <p @click="getSecondsFn('hourTime')">Last Hour</p>
                      <p @click="getSecondsFn('dayTime')">Last Day</p>
                    </div>
                  </div>
                </div>
                <div
                  class="r-cneter-text text_block shubiao"
                  v-if="WebSocket_data[0].averageBlockTime"
                >
                  {{
                  (
                  WebSocket_data[0].averageBlockTime[isTimesData] * 1 || 0
                  ).toFixed(2)
                  }}
                </div>
                <div class="spans">seconds</div>
              </div>
            </div>
            <div class="ulrs">
              <div class>
                <div class="r-title">
                  <img src="../../assets/user.png" />
                  <span>Active Validators</span>
                </div>
                <div
                  class="r-cneter-text shubiao"
                  @click="clickRoutesFn('/identifier')"
                >{{ (WebSocket_data[0].activeValidators * 1 || 0).toFixed(0) }}</div>
                <div class="spans">
                  out of
                  {{ (WebSocket_data[0].totalValidators * 1 || 0).toFixed(0) }}
                  validators
                </div>
              </div>
              <div>
                <div class="r-title">
                  <img src="../../assets/zu4.png" />
                  <span class>Bonded Tokens</span>
                </div>
                <div class="r-cneter-text text_block shubiao" v-if="WebSocket_data[0].coinInfo">
                  {{
                  (
                  WebSocket_data[0].coinInfo.onlineVotePower * 100 || 0
                  ).toFixed(2)
                  }}%
                </div>
                <div class="spans" v-if="WebSocket_data[0].coinInfo">
                  {{
                  (WebSocket_data[0].coinInfo.Bonded / 1000000 || 0).toFixed(
                  2
                  )
                  }}M /
                  <span
                    v-if="WebSocket_data[0].coinInfo"
                  >
                    {{
                    (
                    WebSocket_data[0].coinInfo.TotalSupply / 1000000 || 0
                    ).toFixed(2)
                    }}M
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-footer">
          <div class="footer-left">
            <div class="title">
              <img src="../../assets/mokuai.png" />
              <span>Blocks</span>
            </div>
            <div class="f-l-content">
              <ul v-if="WebSocket_data.length > 1">
                <li v-for="(item, key) of WebSocket_data" :key="key">
                  <div class="c-left">
                    <h3
                      class="maodian"
                      @click="$blockChainInfosRouterFn(item.height)"
                    >{{ item.height }}</h3>
                    <p>Txn:{{ item.tx_num }}</p>
                  </div>
                  <div class="c-center maodian" @click="$userInfoRouterFn(item.operatorAddress)">
                    <div>
                      <img class="user_icon home_img" :src="item.validator_coin" />
                    </div>
                    <span>{{ item.validator }}</span>
                  </div>
                  <div class="content-times">
                    <span>{{ item.time_stamp_tihuan }}</span>
                    <span>ago</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="f-l-footer">
              <div class="buttons btn-left" @click="routerHomeFn('/blockchain')">View all</div>
            </div>
          </div>
          <div class="footer-right">
            <div class="title">
              <img src="../../assets/tuceng.png" />
              <span>Transactions</span>
            </div>
            <div class="r-content">
              <ul>
                <li v-for="(item, key) of text_InfoData" :key="key">
                  <div class="r-c-left">
                    <div class="text-1">
                      <span>TX#</span>
                      <el-tooltip class="item" effect="dark" placement="top" :content="item.txhash">
                        <span
                          class="oversp maodian"
                          @click="$clickHshRouterFn(item)"
                        >{{ item.txhash }}</span>
                      </el-tooltip>
                    </div>

                    <p
                      class="tiaoshu maodian"
                      @click="$clickHshRouterFn(item)"
                      v-if="item.event.length > 1"
                    >More+</p>
                    <p v-else>{{ item.event[0].type }}</p>
                  </div>
                  <div class="from_null" v-if="item.event.length > 1">
                    <div>
                      <span class="froms">From</span>
                      <span>--</span>
                    </div>
                    <div>
                      <span class="froms">To</span>
                      <span>--</span>
                    </div>
                  </div>
                  <div v-else class="r-c-center">
                    <div
                      class="from-div"
                      v-if="
                        item.event[0].type == 'Send' ||
                          item.event[0].type == 'BeginDelegate' ||
                          item.event[0].type == 'Delegate' ||
                          item.event[0].type == 'Deposit' ||
                          item.event[0].type == 'Multi Send' ||
                          item.event[0].type == 'Submit Proposal' ||
                          item.event[0].type == 'Transfer' ||
                          item.event[0].type == 'Undelegate' ||
                          item.event[0].type == 'Vote' ||
                          item.event[0].type == 'Issue Token' ||
                          item.event[0].type == 'Unlock Token' ||
                          item.event[0].type == 'Transfer Token Owner' ||
                          item.event[0].type == 'Mint Token' ||
                          item.event[0].type == 'Create Pool' ||
                          item.event[0].type == 'Add Pledge' ||
                          item.event[0].type == 'Edit Token' ||
                          item.event[0].type == 'Place Order'
                      "
                    >
                      <span class="froms">From</span>
                      <el-tooltip
                        class="item"
                        effect="dark"
                        placement="top"
                        :content="item.event[0].from"
                      >
                        <span
                          class="oversp maodian"
                          @click="$headerRouterFn(item.event[0].from)"
                        >{{ item.event[0].from }}</span>
                      </el-tooltip>
                    </div>
                    <div class="from-div" v-else-if="item.event[0].from == undefined">
                      <span class="froms">From</span>
                      <span>--</span>
                    </div>

                    <div class="from-div" v-else>
                      <div v-if="typeof item.event[0].from == 'string'">
                        <span class="froms">From</span>
                        <span
                          class="oversp maodian"
                          @click="$headerRouterFn(item.event[0].from)"
                        >{{ item.event[0].from }}</span>
                      </div>
                      <div v-else-if="item.event[0].from.moniker == null">
                        <span
                          @click="
                            $headerRouterFn(item.event[0].operatorAddress)
                          "
                        >{{ item.event[0].from.operatorAddress }}</span>
                      </div>

                      <div
                        v-else
                        @click="
                          $userInfoRouterFn(item.event[0].from.operatorAddress)
                        "
                      >
                        <span class="froms">From</span>
                        <img class="list-img maodian" :src="item.event[0].from.icon" />
                        <span class="home-user-name maodian">
                          {{
                          item.event[0].from.moniker
                          }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        class="flex_div"
                        v-if="
                          item.event[0].type == 'Send' ||
                            item.event[0].type == 'Transfer' ||
                            item.event[0].type == 'Withdraw Reward' ||
                            item.event[0].type == 'Multi Send' ||
                            item.event[0].type == 'Transfer Token Owner' ||
                            item.event[0].type == 'Mint Token'
                        "
                      >
                        <span class="froms">To</span>
                        <el-tooltip
                          class="item"
                          effect="dark"
                          placement="top"
                          :content="item.event[0].to"
                        >
                          <span
                            class="oversp maodian"
                            @click="$headerRouterFn(item.event[0].to)"
                          >{{ item.event[0].to }}</span>
                        </el-tooltip>
                      </div>
                      <div class="flex_div" v-else-if="item.event[0].to == undefined">
                        <span class="froms">To</span>
                        <span>--</span>
                      </div>
                      <div v-else>
                        <div
                          v-if="item.event[0].to.icon"
                          class="flex_div"
                          @click="
                            $userInfoRouterFn(item.event[0].to.operatorAddress)
                          "
                        >
                          <span class="froms">To</span>
                          <img class="list-img maodian" :src="item.event[0].to.icon" />
                          <span class="home-user-name maodian">
                            {{
                            item.event[0].to.moniker
                            }}
                          </span>
                        </div>
                        <div v-else>
                          <span class="froms">To</span>
                          <el-tooltip
                            class="item"
                            effect="dark"
                            placement="top"
                            :content="item.event[0].to"
                          >
                            <span
                              class="oversp maodian"
                              @click="$headerRouterFn(item.event[0].to)"
                            >{{ item.event[0].to }}</span>
                          </el-tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="content-times">
                    <span>{{ item.time_stamp_tihuan }}</span>
                    <span>ago</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="r-l-footer">
              <div class="buttons btn-left" @click="routerHomeFn('/deal')">View all</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vscrach from "@/components/scrachINput/index";
import { TimeremainingFn, getUTCTimeFn } from "@/utils/public";
import { ElLoading } from "element-plus";
export default {
  data() {
    return {
      // isSrech:
      WebSocket_data: [
        {
          coinInfo: {
            chainName: "",
            coinAmount: 0,
            totalMarketValue: 0,
            Inflation: 0,
            CommunityPool: 0,
            onlineVotePower: 0,
            Bonded: 0,
            TotalSupply: 0
          },
          event: [{}],
          averageBlockTime: {}
        }
      ],
      home_butts_val: true,
      text_InfoData: [],
      loading: undefined,
      isTimesData: "averageTime",
      selectTimeTxt: "All"
    };
  },
  created() {
    this.WebSocketFn();
  },
  methods: {
    routerHomeFn(name) {
      this.$router.push(name);
    },
    clickRoutesFn(names) {
      this.$router.push(names);
    },
    getSecondsFn(names) {
      switch (names) {
        case "averageTime":
          this.selectTimeTxt = "All";
          break;
        case "dayTime":
          this.selectTimeTxt = "1d";
          break;
        case "hourTime":
          this.selectTimeTxt = "1h";
          break;
        case "minuteTime":
          this.selectTimeTxt = "1m";
          break;
      }

      this.isTimesData = names;
    },
    WebSocketFn() {
      // if (ws_addr == null) {
      //   ws_addr = "ws://192.168.1.40:9001/ws";
      // }
      // var ws = new WebSocket(ws_addr);
      var HTTP = "http";
      HTTP = window.location.href.split(":")[0] == "https" ? "wss" : "ws";
      var host = location.host;
      var ws = new WebSocket(HTTP + "://" + host + "/ws");

      var pages_web_data = { page: "homepage" };
      var This = this;
      //监听是否连接成功
      ws.onopen = function() {
        // This.loading = ElLoading.service({
        //   lock: true,
        //   spinner: "el-icon-loading",
        //   background: "rgba(0, 0, 0, 0)"
        // });
        ws.send(JSON.stringify(pages_web_data));
      };
      //接听服务器发回的信息并处理展示
      ws.onmessage = function(data) {
        if (JSON.parse(data.data).code == "-200") {
          // This.loading.close();
          return;
        }
        var WebSocket_data = eval(data.data);
        if (WebSocket_data.length) {
          if (WebSocket_data.length == 10) {
            // data
            WebSocket_data.map(item => {
              item.time_stamp_tihuan = TimeremainingFn(item.time_stamp);
              item.time_stamp_time = getUTCTimeFn(item.time_stamp);
            });
            // tx

            WebSocket_data[0].tx.map(item => {
              item.time_stamp_tihuan = TimeremainingFn(item.timestamp);
              item.time_stamp_time = getUTCTimeFn(item.timestamp);
            });
            This.WebSocket_data = WebSocket_data;
            This.text_InfoData = WebSocket_data[0].tx;
          } else {
            WebSocket_data[0].time_stamp_tihuan = TimeremainingFn(
              WebSocket_data[0].time_stamp
            );
            WebSocket_data[0].time_stamp_time = getUTCTimeFn(
              WebSocket_data[0].time_stamp
            );
            if (WebSocket_data[0].tx.length) {
              WebSocket_data[0].tx.map(item => {
                item.time_stamp_time = getUTCTimeFn(item.timestamp);
              });
            } else {
              console.log("WebSocket_data[0].tx.length空空如也");
            }

            This.text_InfoData.unshift(...WebSocket_data[0].tx);
            This.WebSocket_data.unshift(WebSocket_data[0]);
            This.WebSocket_data.map(item => {
              item.time_stamp_tihuan = TimeremainingFn(item.time_stamp);
              item.time_stamp_time = getUTCTimeFn(item.time_stamp);
            });
            This.text_InfoData = This.text_InfoData.splice(0, 10);
            This.WebSocket_data = This.WebSocket_data.splice(0, 10);
            This.text_InfoData.map(item => {
              item.time_stamp_tihuan = TimeremainingFn(item.timestamp);
              item.time_stamp_time = getUTCTimeFn(item.timestamp);
            });
            console.log(This.text_InfoData);
            console.log(This.WebSocket_data);
          }
        }
        if (ws.readyState) {
          // This.loading.close();
        }
      };
      //监听连接关闭事件
      ws.onclose = function() {
        //监听整个过程中websocket的状态
        console.log("ws连接状态11111：" + ws.readyState);
      };
      //监听并处理error事件
      ws.onerror = function(error) {
        console.log(error);
      };
    }
  },
  components: { Vscrach }
};
</script>

<style scoped lang="less">
.section-image {
  width: 100%;
  height: 207px;
  background-image: url("../../assets/bg.png");
  background-size: 100% 100%;
}
.text_block {
  color: #000 !important;
}
.links {
  text-decoration: none;
}
.section {
  position: relative;
  background: #fff;
  padding-bottom: 40px;
}
.section-data {
  position: relative;
  top: 0px;
  left: 50%;
  margin-top: -192px;
  margin-left: -600px;
  width: 1200px;
}
.section-tops {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin: 50px 0px;
  .scrach {
    width: 40%;
  }
}
.home-user-name {
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.img_icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 30px 0px;
}
.section-middel {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.1);
  border-radius: 5px;
  padding: 20px;

  .middel-left {
    width: 400px;
    text-align: center;

    .l-title {
      line-height: 30px;
      margin-bottom: 20px;
      margin-top: 20px;
      img {
        width: 26px;
        height: 29px;
      }
      span {
        vertical-align: middle;
        margin-left: 13px;
      }
    }
    h3 {
      color: #5b1cf6;
      font-weight: bold;
      font-size: 25px;
      font-size: 100%;
    }
    .yuan {
      width: 115px;
      height: 115px;
      line-height: 115px;
      margin: 25px auto;
      background: #eae3fc;
      border-radius: 50%;
      text-align: center;
      font-size: 65px;
      color: #7f58e0;
    }
    p {
      font-weight: bold;
      color: #5b1cf6;
    }
  }
  .middel-right {
    width: 100%;
    .margins {
      margin-bottom: 40px;
    }
    .ulrs {
      display: flex;
      flex: 1;
      width: 100%;
    }
    .ulrs > div {
      width: 40%;
      border: 1px solid #eaebec;
      border-radius: 5px;
      margin-right: 50px;
      padding: 10px;
      .flex-title {
        position: relative;
        display: flex;
        justify-content: space-between;
        .gengduo {
          position: absolute;
          right: -107px;
          width: 120px;
          cursor: pointer;
          .gengduo-text {
            display: none;
            // position: absolute;
            position: relative;
            top: 10px;
            left: -60px;
            border: 1px solid #000;
            font-size: 12px;
            // padding: 5px;
            background: #fff;
            border: 1px solid #eaebec;
            box-shadow: 0px 3px 3px 0px rgba(205, 205, 205, 0.22);
            & > p:hover {
              color: #5b1cf6;
            }
          }
          &:hover .gengduo-text {
            display: block;
          }
        }
      }
      .r-title {
        line-height: 19px;
        img {
          height: 19px;
        }
        span {
          margin-left: 10px;
        }
        p {
          text-align: center;
        }
      }
      .r-cneter-text {
        text-align: center;
        margin: 25px 0px;
        color: #5b1cf6;
        font-size: 25px;
      }
      .spans {
        color: #9196c1;
        text-align: center;
      }
    }
  }
}
.section-footer {
  background: #fff;
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.1);
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  .footer-left {
    margin-right: 30px;

    h3 {
      color: #5b1cf6;
      margin-bottom: 15px;
      font-weight: normal;
    }
    .c-center {
      width: 30%;
      display: flex;
      line-height: 40px;
      color: #7f58e0;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .c-left,
  .r-c-left {
    width: 10%;
  }
  .footer-right {
    .r-c-left {
      width: 30%;
      .text-1 {
        display: flex;
        width: 150px;
        margin-bottom: 15px;
      }
    }
    .r-c-center {
      width: 45%;
      // border: 1px solid #000;
      .froms {
        display: inline-block;
        width: 30px;
        margin-bottom: 5px;
      }
      .duoleixng {
        display: flex;
        .yuan {
          width: 20px;
          height: 20px;
          background: #eae3fc;
          border-radius: 50%;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          color: #5b1cf6;
        }
        p {
          line-height: 20px;
          color: #5b1cf6;
          margin-left: 5px;
        }
      }
    }
  }
  .oversp {
    display: inline-block;
    width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #5b1cf6;
    // border: 1px solid #000;
  }
  .footer-left,
  .footer-right {
    width: 100%;
    border: 1px solid #eaebec;
    box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
    border-radius: 5px;
    ul > li {
      display: flex;
      justify-content: space-between;
      padding: 15px 20px;
      border-bottom: 1px solid #eaebec;
      height: 40px;
      .content-times {
        color: #c7cadf;
        line-height: 40px;
        span {
          margin-right: 10px;
          &:last-child {
            margin: 0px;
          }
        }
      }
    }
  }
  .buttons {
    width: 92%;
    height: 44px;
    margin: 10px auto;
    line-height: 44px;
    text-align: center;
    background: #eceefd;
    border-radius: 5px;
    color: #592ec3;
    cursor: pointer;
    &:hover {
      background: #592ec3;
      color: #fff;
      border-radius: 5px;
      .links {
        color: #fff;
      }
    }
  }
  // .footer-right .buttons {
  //
  // }
  .title {
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    border-bottom: 1px solid #eaebec;
    line-height: 18px;
    font-size: 16px;
    color: #2a2a2a;
    padding: 20px 25px;
  }
}
.srech-text {
  display: flex;
  font-size: 12px;
  font-weight: normal;
  div {
    margin: 0px 10px;
  }
}
.flex_div {
  display: flex;
}
.list-img {
  width: 18px;
  height: 18px;
  border-radius: 50%;

  margin-right: 10px;
}
.from-div {
  display: flex;
  line-height: 20px;
}
.froms {
  margin-right: 10px;
}
.from_null {
  width: 45%;
  div:nth-child(1) {
    margin-bottom: 10px;
  }
}
.scrch-box {
  border: 1px solid #fff;
}
.home_img {
  position: relative;
  top: 6px;
}
</style>
