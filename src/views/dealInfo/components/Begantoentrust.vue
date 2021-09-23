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
          <span class="titles">From:</span>
          <div>{{ data.from }}</div>
        </div>

        <div>
          <span class="titles">Amount:</span>
          <div>{{ data.amount }}</div>
        </div>

        <div>
          <span class="titles">Validator （src）:</span>
          <div
            class="maodian"
            @click="
              $userInfoRouterFn(data.validator_src_address.operatorAddress)
            "
          >
            <img
              class="user_icon"
              :src="data.validator_src_address.icon"
              alt=""
            />
            <span>{{ data.validator_src_address.moniker }}</span>
          </div>
        </div>
        <div>
          <span class="titles">Validator （dst）:</span>
          <div
            class="maodian"
            @click="
              $userInfoRouterFn(data.validator_dst_address.operatorAddress)
            "
          >
            <div v-if="data.validator_dst_address.icon">
              <img
                class="user_icon"
                :src="data.validator_dst_address.icon"
                alt=""
              />
              <span>{{ data.validator_dst_address.moniker }}</span>
            </div>
            <div v-else>{{ data.validator_dst_address.operatorAddress }}</div>
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
