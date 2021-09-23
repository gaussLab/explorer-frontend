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
          <span class="titles">Client ID:</span>
          <div>
            {{ data.client_id }}
          </div>
        </div>
        <div>
          <span class="titles">Height：</span>
          <div>
            {{ data.height }}
          </div>
        </div>
        <div>
          <span class="titles">App:</span>
          <div>
            {{ data.app }}
          </div>
        </div>
        <div>
          <span class="titles">App Hash:</span>
          <div>
            {{ data.app_hash }}
          </div>
        </div>
        <div>
          <span class="titles">Chain Id:</span>
          <div>
            {{ data.chain_id }}
          </div>
        </div>
        <div>
          <span class="titles">Time:</span>
          <div>
            {{ data.time }}
          </div>
        </div>
        <div>
          <span class="titles">Data Hash:</span>
          <div>
            {{ data.data_hash }}
          </div>
        </div>
        <div>
          <span class="titles">Evidence Hash:</span>
          <div>
            {{ data.evidence_hash }}
          </div>
        </div>
        <div>
          <span class="titles">Hash:</span>
          <div>
            {{ data.hash }}
          </div>
        </div>
        <div>
          <span class="titles">Total:</span>
          <div>
            {{ data.total }}
          </div>
        </div>
        <div>
          <span class="titles">Consensus Hash:</span>
          <div>
            {{ data.consensus_hash }}
          </div>
        </div>
        <div>
          <span class="titles">Validators Hash:</span>
          <div>
            {{ data.validators_hash }}
          </div>
        </div>
        <div>
          <span class="titles">Last Commit Hash:</span>
          <div>
            {{ data.last_commit_hash }}
          </div>
        </div>
        <div>
          <span class="titles">Proposer Address:</span>
          <div>
            {{ data.proposer_address }}
          </div>
        </div>
        <div>
          <span class="titles">Last Results Hash:</span>
          <div>
            {{ data.last_results_hash }}
          </div>
        </div>
        <div>
          <span class="titles">Next Validators Hash:</span>
          <div>
            {{ data.next_validators_hash }}
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
