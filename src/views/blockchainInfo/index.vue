<template>
  <div class="container-children-box">
    <div class="headers">
      <div class="titles">
        <span
          :class="`${($route.params.name *1 ) == 1 ?'nonestyle' : ''}`"
          @click="clickHeightFn('last')"
        >
          <i class="el-icon-arrow-left"></i>
        </span>
        <h3>Block #{{ number_reuslt.height }}</h3>
        <span
          :class="`${($route.params.name *1 ) == blockMax ?'nonestyle' : ''}`"
          @click="clickHeightFn('next')"
        >
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
    </div>
    <section class="section-top">
      <div class="s-title">Base Info</div>
      <div class="content">
        <div>
          <span class="titles">Block Hash：</span>
          <div>
            <textarea id="copy1" class="displaynone">
 {{ number_reuslt.block_hash }}</textarea>
            {{ number_reuslt.block_hash }}
            <span
              class="copystyle"
              @click="$copyFn('copy1')"
            >
              <i class="el-icon-document-copy"></i>
            </span>
          </div>
        </div>
        <div>
          <span class="titles">Timestamp：</span>
          <div class="huise">{{ number_reuslt.time_stamp }} UTC</div>
        </div>
        <div>
          <span class="titles">Proposer：</span>
          <div class="images_box">
            <div>
              <img :src="number_reuslt.validator_coin" />
            </div>
            <span
              class="maodian"
              @click="$userInfoRouterFn(number_reuslt.operatorAddress)"
            >{{ number_reuslt.validator }}</span>
          </div>
        </div>
        <div>
          <span class="titles">No. of Transactions：</span>
          <div>{{ number_reuslt.tx_num }}</div>
        </div>
      </div>
    </section>
    <Transactionrecords :isblockHeight="true" :blcokheight="number_reuslt.height"></Transactionrecords>
  </div>
</template>

<script>
import { getUTCTimeFn } from "@/utils/public";
import { getBlockByBlockNumber } from "@/api/srechapi";
import Transactionrecords from "../Validatorinfo/components/Transactionrecords";
export default {
  props: ["srech_result_Data"],
  data() {
    return {
      tabPosition: "top",
      number_reuslt: [],
      blockMax: null
    };
  },
  watch: {
    $route(from, to) {
      if (from.name == "blockchainInfo") {
        this.getBlockByBlockNumberFn();
      }
    }
  },
  created() {
    this.getBlockByBlockNumberFn();
  },
  methods: {
    clickHeightFn(name) {
      if (name == "last") {
        this.$route.params.name--;
      } else {
        this.$route.params.name++;
      }
      if (this.$route.params.name > this.blockMax) {
        this.$route.params.name = blockMax;
      } else {
        this.$router.push("/blockchainInfo/" + this.$route.params.name++);
      }
      console.log(this.$route.params.name);
    },
    getBlockByBlockNumberFn() {
      getBlockByBlockNumber({
        blockNumber: this.$route.params.name
      }).then(res => {
        if (res.result) {
          this.number_reuslt = res.result;
          this.number_reuslt.time_stamp = getUTCTimeFn(
            this.number_reuslt.time_stamp
          );
        } else {
          this.$router.push({
            path: "/pagesno",
            query: { name: this.$route.params.name }
          });
        }
        this.blockMax = res.result.blockMax - 1;
      });
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #5841ac;color: #fff;font-weight: 500;";
      }
    }
  },
  components: { Transactionrecords }
};
</script>

<style scoped lang="less">
@import "../../css/public";
.nonestyle {
  opacity: 0.5;
}
.headers .titles {
  line-height: 50px;
  display: flex;
  align-items: center;
  span {
    width: 35px;
    height: 28px;
    line-height: 28px;
    background: #e5defc;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
  h3 {
    margin: 0px 10px;
  }
}
.images_box {
  display: flex;
  justify-items: center;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 8px;
  }
  span {
    color: #5b1cf6;
  }
}
section {
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
}
.headerbg {
  background: #5841ac;
}
</style>
