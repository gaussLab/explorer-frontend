<template>
  <div class="container-children-box">
    <header class="public-head">
      <h3>Address Details</h3>
      <p style="font-size:14px">{{ $route.params.name }}</p>
    </header>
    <el-radio-group
      v-model="Accountbalance_radio"
      @change="Accountbalance_radioFn"
    >
      <el-radio-button label="Asset" value="asset"></el-radio-button>
      <el-radio-button label="Issue" value="lssue"></el-radio-button>
      <el-radio-button label="Deal" value="deal"></el-radio-button>
    </el-radio-group>
    <Asset v-if="Accountbalance_radio == 'Asset'" :result="result"></Asset>
    <Lssue v-if="Accountbalance_radio == 'Issue'"></Lssue>
    <Deal v-if="Accountbalance_radio == 'Deal'" :result="result"></Deal>
  </div>
</template>

<script>
import { getAddressInfo } from "@/api/tongji";
import { getValidatorsByMoniker } from "@/api/identifier";
import Asset from "./components/asset";
import Lssue from "./components/lssue";
import Deal from "./components/deal";
export default {
  data() {
    return {
      Accountbalance_radio: "Asset",
      result: { balances: [[]], tokenBalances: [] }
    };
  },
  watch: {
    $route(from, to) {
      location.reload();
      if (from.name == "Accountbalance") {
        this.getAddressInfoFn();
      }
    }
  },
  mounted() {
    var radio_text = sessionStorage.getItem(this.$route.params.name);
    switch (radio_text) {
      case "Asset":
        this.Accountbalance_radio = "Asset";
        break;
      case "Issue":
        this.Accountbalance_radio = "Issue";
        break;
      case "Deal":
        this.Accountbalance_radio = "Deal";
        break;
    }
    this.getAddressInfoFn();
  },
  methods: {
    getAddressInfoFn() {
      getAddressInfo({ address: this.$route.params.name }).then(res => {
        this.result = res.result;
        this.result.balances.map(item => {
          if (item.denom == "uatom") {
            this.result.amount = item.amount;
          }
        });
      });
    },
    Accountbalance_radioFn() {
      sessionStorage.setItem(
        this.$route.params.name,
        this.Accountbalance_radio
      );
    }
  },
  components: { Asset, Lssue, Deal }
};
</script>

<style scoped lang="less">
section {
  margin-top: 25px;
  background: #fff;
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
  padding-bottom: 20px 0px;
}
</style>
