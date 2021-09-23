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
          <div
            class="zhuti maodian user_icon_box"
            v-if="data.from.icon"
            @click="$userInfoRouterFn(data.from.operatorAddress)"
          >
            <img class="user_icon" :src="data.from.icon" alt />
            <span>{{ data.from.moniker }}</span>
          </div>
          <div class="zhuti maodian" @click="$headerRouterFn(data.from)" v-else>{{ data.from }}</div>
        </div>
        <div>
          <span class="titles">orchestrator:</span>
          <div class="maodian">{{ $headerRouterFn(data.orchestrator) }}</div>
        </div>
        <div>
          <span class="titles">EthAddress:</span>
          <div>{{ data.ethAddress }}</div>
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
