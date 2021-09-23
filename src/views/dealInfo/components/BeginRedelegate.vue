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
          <div>
            {{ data.from }}
          </div>
        </div>

        <div>
          <span class="titles">Amount:</span>
          <div>{{ data.amount }} {{ data.coinName }}</div>
        </div>

        <div>
          <span class="titles">Validator Src Address:</span>
          <div
            class="zhuti maodian user_icon_box"
            v-if="data.validator_src_address.icon"
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
          <div
            class="zhuti maodian"
            @click="$headerRouterFn(data.validator_src_address)"
            v-else
          >
            {{ data.validator_src_address }}
          </div>
        </div>

        <div>
          <span class="titles">Validator Dst Address:</span>
          <div
            class="zhuti maodian user_icon_box"
            v-if="data.validator_dst_address.icon"
            @click="
              $userInfoRouterFn(data.validator_dst_address.operatorAddress)
            "
          >
            <img
              class="user_icon"
              :src="data.validator_dst_address.icon"
              alt=""
            />
            <span>{{ data.validator_dst_address.moniker }}</span>
          </div>
          <div
            class="zhuti maodian"
            @click="$headerRouterFn(data.validator_dst_address)"
            v-else
          >
            {{ data.validator_dst_address }}
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

<style scoped lang="scss">
</style>
