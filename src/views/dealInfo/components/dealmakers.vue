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
          <span class="titles">Pool Address:</span>
          <div>
            <span class="maodian" @click="$headerRouterFn(data.pool_address)">{{
              data.pool_address
            }}</span>
          </div>
        </div>
        <div>
          <span class="titles">Delegate Address ：</span>
          <div>
            <span class="maodian" @click="$headerRouterFn(data.from)">{{
              data.from
            }}</span>
          </div>
        </div>
        <div>
          <span class="titles">Pair:</span>
          <div>
            {{ data.tx_pair }}
          </div>
        </div>
        <div>
          <span class="titles">Left Order ID:</span>
          <div>
            {{ data.left_order_id }}
          </div>
        </div>
        <div>
          <span class="titles">Right Order ID:</span>
          <div>
            {{ data.right_order_id }}
          </div>
        </div>
        <div>
          <span class="titles">Price:</span>
          <div>
            {{ data.price }}
          </div>
        </div>
        <!-- <div>
          <span class="titles">amount:</span>
          <div >
            {{ item.amount }}
          </div>
        </div> -->
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
