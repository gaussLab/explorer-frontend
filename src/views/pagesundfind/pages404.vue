<template>
  <div class=" pages404">
    <section>
      <img src="../../assets/404.png" alt="" />
      <span>网页找不到了～</span>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="less">
.pages404 {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  section {
    position: relative;
    width: 1200px;
    height: 100%;
    margin: 110px auto;
    img {
      position: absolute;
      width: 100%;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -147px;
      font-size: 36px;
      font-weight: 400;
      color: #5841ac;
      line-height: 36px;
    }
  }
}
</style>
