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
          <span class="titles"> Depositor :</span>
          <div class="maodian" @click="$headerRouterFn(data.from)">
            {{ data.from }}
          </div>
        </div>
        <div>
          <span class="titles">
            Proposal ID:
          </span>
          <div>{{ data.proposal_id }}</div>
        </div>
        <div>
          <span class="titles">
            Deposit:
          </span>
          <div>{{ data.amount }} GAUSS</div>
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
