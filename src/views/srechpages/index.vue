<template>
  <div class="container">
    <Accountbalance></Accountbalance>
    <Validatorinfo></Validatorinfo>
    <Tradinghash></Tradinghash>
    <BlockchainInfo></BlockchainInfo>
  </div>
</template>

<script>
import Accountbalance from "@/views/Accountbalance/index";
import Validatorinfo from "@/views/Validatorinfo/index";
import Tradinghash from "@/views/Tradinghash/index";
import BlockchainInfo from "@/views/blockchainInfo/index";
export default {
  data() {
    return {};
  },
  components: { Accountbalance, Validatorinfo, Tradinghash, BlockchainInfo }
};
</script>

<style scoped lang="less">
</style>
