<template>
  <div class="container-children-box">
    <header class="public-head">
      <h3>Transaction Details</h3>
      <p>
        <textarea id="copy1" class="displaynone">{{
          Tradinghash_data.txhash
        }}</textarea>
        {{ Tradinghash_data.txhash }}
      </p>
      <span class="copystyle" @click="copyFn('copy1')"
        ><i class="el-icon-document-copy"></i
      ></span>
    </header>
    <section class="section-top">
      <div class="s-title">Base Info</div>
      <div class="content">
        <div>
          <span class="titles">Block：</span>
          <div class="zhuti blod">
            {{ Tradinghash_data.height }}
          </div>
        </div>
        <div>
          <span class="titles">Status：</span>
          <div class="green" v-if="Tradinghash_data.code == 0">
            Success
          </div>
          <div class="green" v-else>
            Error
          </div>
        </div>
        <div>
          <span class="titles">Timestamp：</span>
          <div class="huise">{{ Tradinghash_data.timestamp }} UTC</div>
        </div>
        <div>
          <span class="titles">Fee：</span>
          <div>{{ Tradinghash_data.fee }}GAUSS</div>
        </div>

        <div>
          <span class="titles">Memo：</span>
          <div>
            <span v-if="Tradinghash_data.memo">{{ memo }}</span>
            - -
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getTransactionByHash } from "@/api/deal";
import { getUTCTimeFn } from "@/utils/public";
export default {
  props: ["srech_result_Data"],
  data() {
    return {
      Tradinghash_data: []
    };
  },
  watch: {
    $route(from, to) {
      if (from.name == "Tradinghash") {
        this.getTransactionByHashFn();
      }
    }
  },
  created() {
    this.getTransactionByHashFn();
  },
  methods: {
    copyFn(copy_id) {
      var e = document.getElementById(copy_id);
      e.select();
      document.execCommand("Copy");
      this.$message({
        showClose: true,
        message: "Copied！",
        type: "success"
      });
    },
    getTransactionByHashFn() {
      getTransactionByHash({ txHash: this.$route.params.name }).then(res => {
        this.Tradinghash_data = res.result;
      });
    }
  },

  components: {}
};
</script>

<style scoped lang="less">
</style>
