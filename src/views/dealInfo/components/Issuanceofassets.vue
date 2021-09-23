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
          <span class="titles">Name:</span>
          <div>
            {{ data.coinName }}
          </div>
        </div>
        <div>
          <span class="titles">Initial Supply:</span>
          <div>
            {{ data.initial_supply }}
          </div>
        </div>
        <div>
          <span class="titles">Total Supply:</span>
          <div>
            {{ data.total_supply }}
          </div>
        </div>
        <div>
          <span class="titles">Samllest Unit:</span>
          <div>
            {{ data.smallest_unit ? data.smallest_unit : "--" }}
          </div>
        </div>
        <div>
          <span class="titles">Decimal:</span>
          <div>
            {{ data.decimals }}
          </div>
        </div>
        <div>
          <span class="titles">Mintable:</span>
          <div>
            {{ data.mintable }}
          </div>
        </div>
        <div>
          <span class="titles">Locked:</span>
          <div>
            {{ data.unlocked ? data.unlocked : "--" }}
          </div>
        </div>
        <div>
          <span class="titles">OWner:</span>
          <div class="maodian" @click="$headerRouterFn(data.from)">
            {{ data.from }}
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
