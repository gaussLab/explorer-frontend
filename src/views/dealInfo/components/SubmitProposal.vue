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
          <span class="titles"> Proposer :</span>
          <div>
            <span class="maodian" @click="$headerRouterFn(data.from)">{{
              data.from
            }}</span>
          </div>
        </div>
        <div>
          <span class="titles">
            Title :
          </span>
          <div>{{ data.title }}</div>
        </div>

        <div>
          <span class="titles">
            Initial Deposit:
          </span>
          <div>{{ data.initial_deposit }} {{ data.coinName }}</div>
        </div>
        <div>
          <span class="titles">
            Description :
          </span>
          <div>{{ data.description }}</div>
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
