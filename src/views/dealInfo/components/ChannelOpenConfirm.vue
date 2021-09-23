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
          <span class="titles">Signer:</span>
          <div>
            <span class="maodian" @click="$headerRouterFn(data.signer)">
              {{ data.signer }}
            </span>
          </div>
        </div>
        <div>
          <span class="titles">Channel Id:</span>
          <div>
            {{ data.channel_id }}
          </div>
        </div>
        <div>
          <span class="titles">Port Id:</span>
          <div>
            {{ data.port_id }}
          </div>
        </div>
        <div>
          <span class="titles">Proof Ack:</span>
          <div>
            {{ data.proof_ack }}
          </div>
        </div>
        <div>
          <span class="titles">Revision Height:</span>
          <div>
            {{ data.revision_height }}
          </div>
        </div>
        <div>
          <span class="titles">Revision Number:</span>
          <div>
            {{ data.proof_ack }}
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
