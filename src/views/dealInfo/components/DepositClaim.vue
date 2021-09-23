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
          <div class="maodian">{{ $headerRouterFn(ddata.from) }}</div>
        </div>
        <div>
          <span class="titles">To:</span>
          <div>{{ $headerRouterFn(data.to) }}</div>
        </div>
        <div>
          <span class="titles">EthBlockHeight:</span>
          <div>{{ data.ethBlockHeight }}</div>
        </div>
        <div>
          <span class="titles">ContractAddress:</span>
          <div>{{ data.contractAddress }}</div>
        </div>
        <div>
          <span class="titles">ContractAddress:</span>
          <div>{{ data.contractAddress }}</div>
        </div>
        <div>
          <span class="titles">EventNonce:</span>
          <div>{{ data.eventNonce }}</div>
        </div>
        <div>
          <span class="titles">Amount:</span>
          <div>{{ data.amount }}{{data.coinName}}</div>
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
