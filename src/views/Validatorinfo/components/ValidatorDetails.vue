<template>
  <div class="container">
    <h3 class="s-b-t">Validator Details</h3>
    <section class="c-section">
      <div class="left left-imgs_usernav">
        <img :src="userInfoData.icon" alt />
        <div class="left-t">{{ userInfoData.description.moniker }}</div>
        <div class="left-text">
          <span v-if="userInfoData.description.moniker == ''">
            {{
            userInfoData.description.identity
            }}
          </span>
          <span v-else>{{ userInfoData.address }}</span>
        </div>
        <div class="left-text">
          <a :href="userInfoData.description.website">
            {{
            userInfoData.description.website
            }}
          </a>
        </div>
        <div class="left-text details">~ {{ userInfoData.description.details }} ~</div>
      </div>
      <div class="right">
        <div class="buttons">
          <div>
            <span v-if="status == 1">Active</span>
            <div v-else-if="status == 2">Candidate</div>
            <span v-else>Jailed</span>
          </div>
        </div>
        <div class="section-text">
          <ul>
            <li>
              <span class="title">Operator Address：</span>
              <div class="huise">
                <textarea id="copy1" class="displaynone">{{
                  userInfoData.operator_address
                }}</textarea>
                {{ userInfoData.operator_address }}
              </div>
              <span class="copystyle" @click="copyFn('copy1')">
                <i class="el-icon-document-copy"></i>
              </span>
            </li>
            <li>
              <span class="title">Owner Address：</span>
              <div class="zhuti">
                <textarea id="copy2" class="displaynone">{{
                  userInfoData.selfDelegateAddress
                }}</textarea>
                <span
                  class="shubiao"
                  @click="$headerRouterFn(userInfoData.selfDelegateAddress)"
                >{{ userInfoData.selfDelegateAddress }}</span>
              </div>
              <span class="copystyle" @click="copyFn('copy2')">
                <i class="el-icon-document-copy"></i>
              </span>
            </li>
            <li>
              <span class="title">Withdraw Address：</span>
              <div class="zhuti">
                <textarea id="copy3" class="displaynone">{{
                  userInfoData.selfDelegateAddress
                }}</textarea>
                <span
                  class="shubiao"
                  @click="$headerRouterFn(userInfoData.selfDelegateAddress)"
                >{{ userInfoData.selfDelegateAddress }}</span>
              </div>
              <span class="copystyle" @click="copyFn('copy3')">
                <i class="el-icon-document-copy"></i>
              </span>
            </li>
            <li>
              <span class="title">Voting Power：</span>
              <div class="huise">{{ ((userInfoData.votingPower || 0) * 100).toFixed(2) }}%</div>
            </li>
            <li>
              <span class="title">Uptime：</span>
              <div class="huise">{{ (userInfoData.uptime * 1 || 0).toFixed(2) }}%</div>
            </li>
            <li>
              <span class="title">Missed Blocks:</span>
              <div class="huise">{{ userInfoData.miss_info || "--" }}</div>
            </li>
            <li v-if="status == 1 || status == 2">
              <span class="title">Consensus Pubkey:</span>
              <div class="huise">
                <textarea id="copy4" class="displaynone shubiao">{{
                  userInfoData.publicKey
                }}</textarea>
                {{ userInfoData.publicKey }}
              </div>
              <span class="copystyle" @click="copyFn('copy4')">
                <i class="el-icon-document-copy"></i>
              </span>
            </li>
            <li v-if="status == 2">
              <span class="title">Unbonding_Height：</span>
              <div class="huise">{{ userInfoData.unbonding_height }}</div>
            </li>
            <li v-if="status == 3">
              <span class="title">Jailed Until:</span>
              <div class="huise">
                {{
                userInfoData.val_signing_info.val_signing_info.jailed_until
                }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["userInfoData"],
  data() {
    return {
      status: ""
    };
  },
  watch: {
    userInfoData() {
      if (!this.userInfoData.jailed) {
        if (this.userInfoData.status == "BOND_STATUS_BONDED") {
          this.status = 1;
        } else {
          this.status == 2;
        }
      } else {
        this.status = 3;
      }
    }
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
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.c-section {
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 30px 0px;
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
}
.left,
.right {
  width: 50%;
}
.right {
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eaebec;
}
.section-text {
  ul li {
    display: flex;
    align-items: center;
    // font-size: 12px;
    .title {
      width: 145px;
      line-height: 30px;
    }
  }
}
.left-text {
  width: 325px;
  margin: 0px auto;
  text-align: center;
  color: #6e7398;
  margin-top: 10px;
  word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
}
.details {
  width: 400px;
  line-height: 20px;
}
.left-t {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #5b1cf6;
  margin-top: 15px;
  margin-bottom: 10px;
}
.buttons {
  width: 100px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  font-size: 14px;
  background: #633af9;
  border-radius: 20px;
  color: #fff;
  margin-bottom: 10px;
}
.left-imgs_usernav {
  text-align: center;
}
.left-imgs_usernav img {
  width: 126px;
  height: 126px;
  line-height: 126px;

  border-radius: 50%;
  text-align: center;
  font-size: 58px;
  margin: 0px auto;
}
</style>
