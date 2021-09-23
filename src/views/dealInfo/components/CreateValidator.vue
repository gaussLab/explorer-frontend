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
          <span class="titles">Operator Address:</span>
          <div class="zhuti">
            <div
              class="zhuti maodian user_icon_box"
              v-if="data.to.icon"
              @click="$userInfoRouterFn(data.to.operatorAddress)"
            >
              <img class="user_icon" :src="data.to.icon" alt="" />
              <span>{{ data.to.moniker }}</span>
            </div>
            <div class="zhuti maodian" @click="$headerRouterFn(data.to)" v-else>
              {{ data.to }}
            </div>
          </div>
        </div>
        <div>
          <span class="titles">Moniker :</span>
          <div>{{ data.from.moniker ? data.from.moniker : "--" }}</div>
        </div>
        <div>
          <span class="titles">Identity :</span>
          <div>{{ data.from.identity ? data.from.identity : "--" }}</div>
        </div>
        <div>
          <span class="titles">Self-Bonded :</span>
          <div>{{ data.value }}</div>
        </div>
        <div>
          <span class="titles">Min Self Delegation :</span>
          <div>{{ data.min_self_delegation }}</div>
        </div>
        <div>
          <span class="titles">Owner Address :</span>
          <div class="maodian" @click="$headerRouterFn(data.from)">
            {{ data.from }}
          </div>
        </div>
        <div>
          <span class="titles">Consensus Pubkey :</span>
          <div>{{ data.consensus_pubkey }}</div>
        </div>
        <div>
          <span class="titles">Commission Rate :</span>
          <div>{{ data.commission.rate * 100 }}%</div>
        </div>
        <div>
          <span class="titles">Website :</span>
          <div>
            {{ data.description.website ? data.description.website : "--" }}
          </div>
        </div>
        <div>
          <span class="titles">Details :</span>
          <div>
            {{ data.description.details ? data.description.details : "--" }}
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
  watch: {
    data() {
      console.log(this.data, "*****");
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.user_icon {
  margin-top: 10px;
}
</style>
