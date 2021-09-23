<template>
  <div class="container-pages-box">
    <Vheader></Vheader>
    <section>
      <img src="../../assets/queshi.png" />
      <div class="see-text">
        <div class="text_1">No Data！</div>
        <div class="text_2">
          No data on current page！Please try again later
        </div>
        <div class="text_2">Sorry! This is an invalid search string.</div>
        <el-button class="buttons" @click="routersHomeFn">Bake Home</el-button>
      </div>
    </section>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Vheader from "@/components/header/index";
import Footer from "@/components/footer/index";
export default {
  data() {
    return {};
  },
  methods: {
    routersHomeFn() {
      this.$router.push("/index");
    }
  },
  components: { Vheader, Footer }
};
</script>

<style scoped lang="less">
</style>
