<template>
  <div class="container">
    <div class="left">
      <Sandiancharts class="echarts_box" :userInfoData="userInfoData" :datas="datas"></Sandiancharts>
      <div class="echarts_top">Commission Rate & Bonded Tokens Distribution</div>
      <div class="echarts_left">Bonded Token({{ userInfoData.chainName }})</div>
      <div class="echarts_bottom">Commission Rate(%)</div>
    </div>
    <div class="right">
      <ul>
        <li>
          <span class="biaoti">Commission Rate:</span>
          <span class="huise">
            {{
            (userInfoData.commission.commission_rates.rate * 100).toFixed(2)
            }}%
          </span>
        </li>

        <li>
          <span class="biaoti">Bonded Tokens:</span>
          <span class="huise">
            {{ (userInfoData.tokens / 1000000).toFixed(6) }}
            {{ chainName }}
          </span>
        </li>
        <li>
          <div class="right-texteare">
            <div>
              Self-Bonded:
              {{ (userInfoData.selfDelegateAmount * 1).toFixed(6) }}
              {{ chainName }}
            </div>
            <div>
              Delegator Bonded:
              {{
              (
              userInfoData.tokens / 1000000 -
              userInfoData.selfDelegateAmount
              ).toFixed(6)
              }}
              {{ chainName }}
            </div>
          </div>
        </li>
        <li>
          <span class="biaoti">Delegators:</span>
          <span class="huise">{{ userInfoData.totalDelegations }}</span>
        </li>

        <li>
          <span class="biaoti">Total Shares:</span>
          <span class="huise">
            {{
            (userInfoData.delegator_shares * 1 || 0).toFixed(2)
            }}
          </span>
        </li>
        <li>
          <span class="biaoti">Commission Rewards:</span>
          <span class="huise">
            {{
            (userInfoData.commission_rewards * 1).toFixed(6)
            }}
          </span>
        </li>
        <li>
          <span class="biaoti">Commission Rate Range:</span>
          <span class="huise">
            {{
            userInfoData.commission.commission_rates.max_change_rate * 100
            }}%
          </span>
        </li>
        <li>
          <div class="right-texteare">
            Max Change Rate Everytime:
            {{
            userInfoData.commission.commission_rates.max_change_rate * 100
            }}%
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Sandiancharts from "./sandiancharts";
export default {
  props: ["userInfoData", "datas", "chainName"],
  data() {
    return {};
  },
  mounted() {},
  components: { Sandiancharts }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  border: 1px solid #eaebec;
  background: #fff;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
  .left,
  .right {
    width: 48%;
  }
  .left {
    padding-right: 2%;
  }
  .right {
    border-left: 1px solid #eaebec;
    padding-left: 2%;
    ul li {
      line-height: 40px;
      display: flex;
      .biaoti {
        width: 180px;
      }
      .right-texteare {
        border: 1px solid #eaebec;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        color: #a28bde;
        margin-left: 20px;
        width: 100%;
        margin-right: 40px;
        font-size: 12px;
      }
    }
  }
}
.left {
  position: relative;
}
.echarts_left {
  position: absolute;
  top: 30px;
  left: 19px;
  font-size: 10px;
}
.echarts_top {
  position: absolute;
  top: 0px;
  left: 19px;
  font-size: 13px;
  font-weight: bold;
}
.echarts_box {
  position: absolute;
  top: 30px;
}
.echarts_bottom {
  position: absolute;
  bottom: 34px;
  right: 34px;
  font-size: 10px;
}
</style>
