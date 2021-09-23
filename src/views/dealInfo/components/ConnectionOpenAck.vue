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
          <span class="titles"> Connection Id :</span>
          <span>{{ data.connection_id }}</span>
        </div>
        <div>
          <span class="titles">
            Counterparty Connection Id
          </span>
          <div>{{ data.counterparty_connection_id }}</div>
        </div>
        <div>
          <span class="titles">
            Signer:
          </span>
          <div>
            <span class="maodian" @click="$headerRouterFn(data.signer)">
              {{ data.signer }}
            </span>
          </div>
        </div>
        <div>
          <span class="titles">
            Version:
          </span>
          <div>{{ data.version }}</div>
        </div>
        <div>
          <span class="titles">
            Revision Number:
          </span>
          <div>{{ data.revision_number }}</div>
        </div>
        <div>
          <span class="titles">
            Revision Height:
          </span>
          <div>{{ data.revision_height }}</div>
        </div>
        <div>
          <span class="titles">
            Proof Client:
          </span>
          <div>{{ data.proof_client }}</div>
        </div>
        <div>
          <span class="titles">
            Proof Consensus:
          </span>
          <div>{{ data.proof_consensus }}</div>
        </div>
        <div>
          <span class="titles">
            Proof Try:
          </span>
          <div>{{ data.proof_try }}</div>
        </div>
        <div>
          <span class="titles">
            @Type:
          </span>
          <div>{{ data.aiTeType }}</div>
        </div>
        <div>
          <span class="titles">
            Chain Id:
          </span>
          <div>{{ data.chain_id }}</div>
        </div>
        <div>
          <span class="titles">
            Proof Specs:
          </span>
          <div>{{ data.proof_specs }}</div>
        </div>
        <div>
          <span class="titles">
            Numerator:
          </span>
          <div>{{ data.numerator }}</div>
        </div>
        <div>
          <span class="titles">
            Denominator:
          </span>
          <div>{{ data.denominator }}</div>
        </div>
        <div>
          <span class="titles">
            Upgrade Path:
          </span>
          <div>{{ data.upgrade_path }}</div>
        </div>
        <div>
          <span class="titles">
            Max Clock Drift:
          </span>
          <div>{{ data.max_clock_drift }}</div>
        </div>
        <div>
          <span class="titles">
            Trusting Period:
          </span>
          <div>{{ data.trusting_period }}</div>
        </div>
        <div>
          <span class="titles">
            Unbonding Period:
          </span>
          <div>{{ data.unbonding_period }}</div>
        </div>
        <div>
          <span class="titles">
            Allow Update After Expiry:
          </span>
          <div>{{ data.allow_update_after_expiry }}</div>
        </div>
        <div>
          <span class="titles">
            Allow Update After Misbehaviour:
          </span>
          <div>{{ data.allow_update_after_misbehaviour }}</div>
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
