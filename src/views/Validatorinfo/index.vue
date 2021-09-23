<template>
  <div class="container-children-box">
    <ValidatorDetails :userInfoData="userInfoData"></ValidatorDetails>
    <h3 class="s-b-t">Commission Info</h3>
    <Delegations
      :userInfoData="userInfoData"
      :datas="datas"
      :chainName="chainName"
    ></Delegations>
    <CommissionInfo></CommissionInfo>

    <Transactionrecords></Transactionrecords>

    <div>
      <section>
        <h3></h3>
        <div></div>
      </section>
      <section>
        <h3></h3>
        <div></div>
      </section>
    </div>
    <div></div>
  </div>
</template>

<script>
import ValidatorDetails from "./components/ValidatorDetails";
import CommissionInfo from "./components/CommissionInfo";
import Delegations from "./components/Delegations";
import Transactionrecords from "./components/Transactionrecords";
import {
  getCommissionByMoniker,
  getValidatorsByMoniker
} from "@/api/identifier";
export default {
  data() {
    return {
      userInfoData: {
        description: {},
        commission: { commission_rates: {} },
        consensus_pubkey: {},
        chainName: ""
      },
      datas: []
    };
  },
  created() {
    // 获取用户佣金比例
    this.getValidatorsByMonikerFn();
  },
  watch: {
    $route(from, to) {
      if (from.name == "Validatorinfo") {
        this.getValidatorsByMonikerFn();
      }
    }
  },
  methods: {
    getValidatorsByMonikerFn(operatorAddress) {
      getValidatorsByMoniker({ operatorAddress: this.$route.params.name }).then(
        res => {
          this.userInfoData = res.result;
          if (res.result.chainName) {
            this.chainName = res.result.chainName.toUpperCase();
          }
          this.datas = [
            this.userInfoData.commission.commission_rates.rate * 1,
            this.userInfoData.tokens / 1000000,
            5096869,
            this.userInfoData.description.moniker,
            "Sidnac"
          ];
        }
      );
    }
  },
  components: {
    ValidatorDetails,
    CommissionInfo,
    Delegations,
    Transactionrecords
  }
};
</script>

<style scoped lang="less">
.container-children-box {
  padding-bottom: 30px;
}
</style>
