<template>
  <div class="container">
    <section class="section-top" style="margin-top:30px">
      <div class="s-title">Transaction Message or Result</div>
      <div class="content displaywrap">
        <div>
          <span class="titles">TxType:</span>
          <div>{{ data.type }}</div>
        </div>
        <div>
          <span class="titles">From:</span>
          <div class="maodian">{{ $headerRouterFn(data.from) }}</div>
        </div>
        <div>
          <span class="titles">PoolId:</span>
          <div>{{ data.poolId }}</div>
        </div>
        <div>
          <span class="titles">LeftAmount:</span>
          <div>{{ data.feePoolAmount }}{{data.leftCoin}}</div>
        </div>
        <div>
          <span class="titles">RightAmount:</span>
          <div>{{ data.rightAmount }}{{data.rightCoin}}</div>
        </div>
        <div>
          <span class="titles">TxPairName:</span>
          <div>{{ data.txPairName }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="less">
</style>
