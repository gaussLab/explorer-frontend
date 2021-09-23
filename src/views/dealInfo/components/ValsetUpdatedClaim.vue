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
          <span class="titles">EthBlockHeight:</span>
          <div>{{ data.ethBlockHeight }}</div>
        </div>
        <div>
          <span class="titles">EventNonce:</span>
          <div>{{ data.eventNonce }}</div>
        </div>
        <div>
          <span class="titles">ValsetNonce:</span>
          <div>{{ data.valsetNonce }}</div>
        </div>
        <div>
          <span class="titles">Ethereum Address:</span>
          <div>{{ data.ethereum_address }}</div>
        </div>
        <div>
          <span class="titles">Orchestrator:</span>
          <div class="maodian">{{ $headerRouterFn(data.orchestrator) }}</div>
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
