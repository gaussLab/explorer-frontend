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
          <span class="titles">Symbol:</span>
          <div>
            {{ data.symbol }}
          </div>
        </div>
        <div>
          <span class="titles">Mintable</span>
          <div>
            {{ data.mintable }}
          </div>
        </div>
        <div>
          <span class="titles">Owner</span>
          <div>
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
