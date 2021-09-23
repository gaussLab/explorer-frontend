<template>
  <div class="container">
    <section class="section-top" style="margin-top:30px">
      <div class="s-title">Transaction Message or Result</div>
      <div class="content displaywrap">
        <div>
          <span class="titles">TxType:</span>
          <div>
            {{ data.type }}
          </div>
        </div>
        <div>
          <span class="titles">Amount:</span>
          <div class="zhuti">{{ data.amount }}</div>
        </div>
        <div>
          <span class="titles">Validator :</span>
          <div
            class="maodian"
            @click="$userInfoRouterFn(data.from.operatorAddress)"
          >
            <div v-if="data.from.icon">
              <img class="user_icon" :src="data.from.icon" alt="" />
              <span>{{ data.from.moniker }}</span>
            </div>
            <div v-else>{{ data.from.operatorAddress }}</div>
          </div>
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
.user_icon {
  margin-top: 10px;
}
</style>
