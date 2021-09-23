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
          <span class="titles">Client ID:</span>
          <div>
            {{ data.client_id }}
          </div>
        </div>
        <div>
          <span class="titles">Client Type：</span>
          <div>
            {{ data.client_type }}
          </div>
        </div>
        <!-- <div>
          <span class="titles">pledge:</span>
          <div   >
            {{ item.pledge }}
          </div>
        </div> -->
        <div>
          <span class="titles">Chain ID:</span>
          <div>
            {{ data.chain_id }}
          </div>
        </div>
        <div>
          <span class="titles">Trusting Period:</span>
          <div>
            {{ data.trusting_period }}
          </div>
        </div>
        <div>
          <span class="titles">Unboding Period:</span>
          <div>
            {{ data.unbonding_period }}
          </div>
        </div>
        <div>
          <span class="titles">Signer</span>
          <div>
            {{ data.signer }}
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
