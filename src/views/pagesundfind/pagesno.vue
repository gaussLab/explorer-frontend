<template>
  <div class="container-pages-box">
    <Vheader></Vheader>
    <section>
      <img src="../../assets/queshi.png" />
      <div class="see-text">
        <div class="text_1">Search not found</div>
        <div class="text_2">
          Oops! The search string you entered was:<span>{{ srechtext }}</span>
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
    return {
      srechtext: ""
    };
  },
  created() {
    this.srechtext = this.$route.query.name;
  },
  watch: {
    $route() {
      this.srechtext = this.$route.query.name;
    }
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
