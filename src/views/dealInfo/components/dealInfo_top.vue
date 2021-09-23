<template>
  <div class="container">
    <header class="public-head">
      <h3>Transaction Details</h3>
      <p>
        <textarea id="copy1" class="displaynone">{{ hash_text }}</textarea>
        {{ hash_text }}
      </p>
      <span class="copystyle" @click="copyFn('copy1')">
        <i class="el-icon-document-copy"></i>
      </span>
    </header>
    <section class="section-top">
      <div class="s-title">Base Info</div>
      <div class="content">
        <div>
          <span class="titles">Block：</span>
          <div
            class="zhuti blod maodian"
            @click="$blockChainInfosRouterFn(data.height)"
          >{{ data.height }}</div>
        </div>
        <div>
          <span class="titles">Status：</span>
          <div class="green" v-if="data.code == 0">Success</div>
          <div class="error" v-else>Failed</div>
        </div>
        <div>
          <span class="titles">Timestamp：</span>
          <div class="huise">{{ data.timestamp }} UTC</div>
        </div>
        <div>
          <span class="titles">Fee：</span>
          <div>
            {{ data.fee }}
            <span v-if="data.event[0]">{{ data.feeCoinName }}</span>
          </div>
        </div>

        <div>
          <span class="titles">Memo：</span>
          <div>
            <span v-if="data.memo">{{ data.memo }}</span>
            <span v-else>--</span>
          </div>
        </div>

        <div v-if="isShangXiaBool">
          <span class="titles">Log:</span>
          <div>
            <span v-if="data.raw_log">{{data.raw_log}}</span>
            <span v-else>--</span>
          </div>
        </div>
        <div class="shengsuo-box">
          <div v-if="isShangXiaBool" @click="clickisShangXiaBoolFn(false)">
            <span>Click to see more</span>
            <img class="imgwidth" src="../../../assets/shangjiantou.png" alt />
          </div>
          <div v-else @click="clickisShangXiaBoolFn(true)">
            <span>Put away</span>
            <img class="imgwidth" src="../../../assets/xiajiant.png" alt />
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
    return {
      hash_text: "",
      isShangXiaBool: false
    };
  },
  watch: {
    data() {
      // this.data.raw_log = eval(this.data.raw_log)[0];
      // console.log(this.isJson(this.data.raw_log));
    }
  },
  created() {
    this.hash_text = this.$route.params.name;
  },
  methods: {
    clickisShangXiaBoolFn(bool) {
      this.isShangXiaBool = bool;
    },
    isJson(str) {
      if (typeof str == "string") {
        try {
          let obj = JSON.parse(str);
          if (typeof obj == "object" && obj) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },
    copyFn(copy_id) {
      var e = document.getElementById(copy_id);
      e.select();
      document.execCommand("Copy");
      this.$message({
        showClose: true,
        message: "Copied！",
        type: "success"
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.error {
  color: red;
}
.shengsuo-box {
  display: block !important;
  height: 44px;
  background: #eceefd;
  opacity: 1;
  border-radius: 5px;
  text-align: center;
  color: #592ec3;
  font-size: 18px;
  cursor: pointer;
  div {
    img {
      position: relative;
      top: 15px;
      margin-left: 5px;
      vertical-align: center;
    }
  }
}
.titles {
  display: inline-block;
  margin-left: 90px;
  margin-right: 30px;
  font-weight: bold;
  width: 160px !important;
}
</style>
