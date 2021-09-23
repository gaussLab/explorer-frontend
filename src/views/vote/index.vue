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
      <span class="copystyle" @click="copyFn('copy1')">
        <i class="el-icon-document-copy"></i>
      </span>
    </header>
    <section class="section-top">
      <div class="s-title">Base Info</div>
      <div class="content">
        <div>
          <span class="titles">Block：</span>
          <div class="zhuti blod">{{ Tradinghash_data.height }}</div>
        </div>
        <div>
          <span class="titles">Status：</span>
          <div class="green" v-if="Tradinghash_data.code == 0">Success</div>
          <div class="green" v-else>Error</div>
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
    <section class="section-top" style="margin-top:30px">
      <div class="s-title">Transaction Message or Result</div>
      <div class="content" v-for="(item, key) of Tradinghash_data.event" :key="key">
        <div>
          <span class="titles">TxType:</span>
          <div>{{ item.type }}</div>
        </div>
        <div>
          <span class="titles">Voter :</span>
          <span v-if="item.moniker == null">{{ item.from }}</span>
          <div v-else class="user_icon_box">
            <img class="user_icon" :src="item.moniker.icon" alt />
            <span>{{ item.moniker.moniker }}</span>
          </div>
        </div>
        <div>
          <span class="titles">Proposal ID:</span>
          <div>{{ item.proposal_id }}</div>
        </div>
        <div>
          <span class="titles">Option:</span>
          <div class="zhuti">{{ item.option }}</div>
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
      getTransactionByHash({ txHash: this.$route.query.name }).then(res => {
        this.Tradinghash_data = res.result;
      });
    }
  },

  components: {}
};
</script>

<style scoped lang="less">
.user_icon_box {
  img {
    margin-top: 10px;
  }
}
</style>
