<template>
  <div class="container">
    <p v-if="IschianName == 'gauss'">Copyright Gauss Lab ©2018-2021.</p>
    <p v-if="IschianName == 'gpb'">Galaxy Public Blockchain All rights reserved © 2021</p>
  </div>
</template>

<script>
export default {
  props: ["IschianName"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="less">
.container {
  background: #ececec;

  p {
    height: 50px;
    line-height: 50px;
    color: #2a2a2a;
    text-align: center;
    // font-weight: bold;
  }
}
</style>
