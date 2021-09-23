<template>
  <div class="box">
    <div class="box-cocent" id="box-cocent">
      <Vheader
        @getChianName="getChianName"
        @indexChangesValFn="indexChangesValFn"
        :isSreach="isSreach"
      ></Vheader>
      <router-view class="routerview-box" :srech_result_Data="srech_result_Data"></router-view>
    </div>
    <span v-if="IschianName == 'fec' || IschianName == 'igpc'"></span>
    <div v-else class="footes" id="footer">
      <Vfooter :IschianName="IschianName"></Vfooter>
    </div>
  </div>
</template>
<script>
import Vheader from "@/components/header/index";
import Vfooter from "@/components/footer/index";
export default {
  data() {
    return {
      srech_result_Data: [],
      isSreach: true,
      IschianName: undefined
    };
  },
  watch: {
    $route(to, from) {
      this.$scrollHeightFn();
      this.isSreach = to.path == "/index" ? true : false;
      sessionStorage.setItem("isSreach", this.isSreach);
    }
  },
  created() {
    var scrach = sessionStorage.getItem("isSreach");
    if (scrach == "true" || scrach == null) {
      this.isSreach = true;
    }
    if (scrach == "false") {
      this.isSreach = false;
    }
  },

  methods: {
    getChianName(name) {
      this.IschianName = name;
    },
    indexChangesValFn(val) {
      // 搜索结果
      this.srech_result_Data = val;
    }
  },
  components: {
    Vheader,
    Vfooter
  }
};
</script>
<style lang="less">
.box {
  position: absolute;
  min-width: 1400px;
  width: 100%;
  min-height: 100%;
  background: #f8f8f8;
}
.box-cocent {
  // position: relative;
  // top: 0px;
  // left: 0px;
  // width: 100%;
  min-height: 94%;
  // padding-bottom: 60px;
}
.footes {
  margin-top: 30px;
  width: 100%;
  position: absolute;
}
</style>
