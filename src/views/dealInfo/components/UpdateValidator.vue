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

        <div>
          <span class="titles">Moniker :</span>
          <div>{{ data.from.moniker ? data.from.moniker : "--" }}</div>
        </div>

        <div>
          <span class="titles">Identity :</span>
          <div>{{ data.from.identity ? data.from.identity : "--" }}</div>
        </div>
        <div>
          <span class="titles">Min Self Delegation :</span>
          <div>
            {{ data.min_self_delegation ? data.min_self_delegation : "--" }}
          </div>
        </div>

        <div v-if="data.commission != null">
          <span class="titles">Commission Rate :</span>
          <div>{{ data.commission.rate * 100 }}%</div>
        </div>
        <div v-else>
          <span class="titles">Commission Rate :</span>
          <div>--</div>
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
  components: {}
};
</script>

<style scoped lang="less">
.user_icon {
  margin-top: 10px;
}
</style>
