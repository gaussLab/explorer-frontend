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
          <span class="titles"> Signer :</span>
          <div class="zhuti">{{ data.signer }}</div>
        </div>
        <div>
          <span class="titles">
            State
          </span>
          <div>{{ data.state }}</div>
        </div>
        <div>
          <span class="titles">
            Version:
          </span>
          <div>{{ data.version }}</div>
        </div>
        <div>
          <span class="titles">
            Ordering:
          </span>
          <div>{{ data.ordering }}</div>
        </div>
        <div>
          <span class="titles">
            Channel Id:
          </span>
          <div>{{ data.channel_id }}</div>
        </div>
        <div>
          <span class="titles">
            Connection Hops:
          </span>
          <div>{{ data.connection_hops }}</div>
        </div>
        <div>
          <span class="titles">
            Port Id:
          </span>
          <div>{{ data.port_id }}</div>
        </div>
        <div>
          <span class="titles">
            Previous Channel Id:
          </span>
          <div>{{ data.previous_channel_id }}</div>
        </div>
        <div>
          <span class="titles">
            Proof Init:
          </span>
          <div>{{ data.proof_init }}</div>
        </div>
        <div>
          <span class="titles">
            Revision Height:
          </span>
          <div>{{ data.revision_height }}</div>
        </div>
        <div>
          <span class="titles">
            Revision Number:
          </span>
          <div>{{ data.revision_number }}</div>
        </div>

        <div>
          <span class="titles">
            Counterparty Version:
          </span>
          <div>{{ data.counterparty_version }}</div>
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
