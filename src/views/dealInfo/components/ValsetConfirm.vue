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
          <span class="titles">Nonce:</span>
          <div>{{ data.nonce }}</div>
        </div>
        <div>
          <span class="titles">Orchestrator:</span>
          <div class="maodian">{{ $headerRouterFn(data.orchestrator) }}</div>
        </div>
        <div>
          <span class="titles">EthAddress:</span>
          <div>{{ data.ethAddress }}</div>
        </div>
        <div>
          <span class="titles">Signature:</span>
          <div>{{ data.signature }}</div>
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
