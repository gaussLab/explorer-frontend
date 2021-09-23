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
          <span class="titles">Old Owner:</span>
          <div>{{ $headerRouterFn(data.from) }}</div>
        </div>
        <div>
          <span class="titles">New Owner:</span>
          <div
            class="zhuti maodian user_icon_box"
            v-if="data.to.icon"
            @click="$userInfoRouterFn(data.to.operatorAddress)"
          >
            <img class="user_icon" :src="data.to.icon" alt />
            <span>{{ data.to.moniker }}</span>
          </div>
          <div class="zhuti maodian" @click="$headerRouterFn(data.to)" v-else>{{ data.to }}</div>
        </div>

        <div>
          <span class="titles">Symbol:</span>
          <div>{{ data.symbol }}</div>
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
