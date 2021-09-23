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
          <span class="titles"> Pool Address:</span>
          <div>
            <span class="maodian" @click="$headerRouterFn(data.pool_address)">{{
              data.pool_address
            }}</span>
          </div>
        </div>
        <div>
          <span class="titles">
            Owner Address:
          </span>
          <div>
            <span
              class="maodian"
              @click="$headerRouterFn(data.owner_address)"
              >{{ data.owner_address }}</span
            >
          </div>
        </div>
        <div>
          <span class="titles">
            Tx_pair:
          </span>
          <div>{{ data.tx_pair }}</div>
        </div>
        <div>
          <span class="titles">
            Order ID:
          </span>
          <div>{{ data.order_id }}</div>
        </div>
        <div>
          <span class="titles">
            Is Left Order:
          </span>
          <div>{{ data.is_left_order }}</div>
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
