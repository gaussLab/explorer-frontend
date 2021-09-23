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
          <span class="titles">Signer:</span>
          <div>
            <span class="maodian" @click="$headerRouterFn(data.signer)">
              {{ data.signer }}
            </span>
          </div>
        </div>
        <div>
          <span class="titles">Collection Id:</span>
          <div>{{ data.collection_id }}</div>
        </div>
        <div>
          <span class="titles">Counterparty Client Id:</span>
          <div>{{ data.counterparty_client_id }}</div>
        </div>
        <div>
          <span class="titles">Client Id:</span>
          <div>{{ data.client_id }}</div>
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
