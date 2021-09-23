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
          <span class="titles">Owner address:</span>
          <div>
            <span class="maodian" @click="$headerRouterFn(data.from)">{{
              data.from
            }}</span>
          </div>
        </div>
        <div>
          <span class="titles">Defi address ：</span>
          <div
            class="zhuti maodian user_icon_box"
            v-if="data.defi_address.icon"
            @click="$userInfoRouterFn(data.defi_address.operatorAddress)"
          >
            <img class="user_icon" :src="data.defi_address.icon" alt="" />
            <span>{{ data.defi_address.moniker }}</span>
          </div>
          <div
            class="zhuti maodian"
            @click="$headerRouterFn(data.defi_address)"
            v-else
          >
            {{ data.defi_address }}
          </div>
        </div>

        <div>
          <span class="titles">Pledge:</span>
          <div>
            <span>{{ data.pledge }} {{ data.chainName }}</span>
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
