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
            <span class="maodian" @click="$headerRouterFn(data.signer)">{{ data.signer }}</span>
          </div>
        </div>
        <div>
          <span class="titles">Data:</span>
          <div>{{ data.data }}</div>
        </div>
        <div>
          <span class="titles">Sequence:</span>
          <div>{{ data.sequence }}</div>
        </div>
        <div>
          <span class="titles">Source Port:</span>
          <div>{{ data.source_port }}</div>
        </div>
        <div>
          <span class="titles">Source Channel:</span>
          <div>{{ data.source_channel }}</div>
        </div>
        <div>
          <span class="titles">Revision Height:</span>
          <div>{{ data.revision_height }}</div>
        </div>

        <div>
          <span class="titles">Revision Number:</span>
          <div>{{ data.revision_number }}</div>
        </div>
        <div>
          <span class="titles">Destination Port:</span>
          <div>{{ data.destination_port }}</div>
        </div>
        <div>
          <span class="titles">Timeout Timestamp:</span>
          <div>{{ data.timeout_timestamp }}</div>
        </div>
        <div>
          <span class="titles">Destination Channel:</span>
          <div>{{ data.destination_channel }}</div>
        </div>
        <div>
          <span class="titles">Proof Unreceived:</span>
          <div>{{ data.proof_unreceived }}</div>
        </div>
        <div>
          <span class="titles">Next Sequence Recv:</span>
          <div>{{ data.next_sequence_recv }}</div>
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
