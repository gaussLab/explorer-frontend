<template>
  <div class="container">
    <section class="public-tbs-accoun-top">
      <div class="s-title">Balnce</div>
      <ul>
        <li>
          <span class="accoun-t"> Available: </span>
          <div>{{ result.balance }} {{ result.chainName }}</div>
        </li>
        <li>
          <span class="accoun-t">
            Delegated:
          </span>
          <div>{{ result.delegator_balance }} {{ result.chainName }}</div>
        </li>
        <li>
          <span class="accoun-t">
            Unbonding:
          </span>
          <div>{{ result.unBonding_balance }} {{ result.chainName }}</div>
        </li>
        <li>
          <span class="accoun-t">
            Rewards:
          </span>
          <div>{{ result.rewards }} {{ result.chainName }}</div>
        </li>
        <li>
          <span class="accoun-t">
            Commission:
          </span>
          <div>
            --
          </div>
        </li>
      </ul>
    </section>
    <CommissionInfo></CommissionInfo>

    <Transactionrecords></Transactionrecords>
  </div>
</template>

<script>
import Transactionrecords from "../../Validatorinfo/components/Transactionrecords";
import CommissionInfo from "../components/CommissionInfo";
export default {
  props: ["result"],
  data() {
    return {};
  },

  components: { Transactionrecords, CommissionInfo }
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
.borders-center .center-content {
  border-bottom: 3px solid #eaebec;
}
.borders-center .center-content:last-child {
  border: none;
}
</style>
