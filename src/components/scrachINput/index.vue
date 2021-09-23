<template>
  <div :class="`scrch-box ${home_butts ? 'inputs' : ''}`">
    <input type="text" v-model="serchtext" placeholder="Search by Address/Txhash/Block" />
    <div class="buttons" @click="srchTxtChangeFn">
      <i :class="` el-icon-search ${home_butts ? 'search_home' : ''}`"></i>
    </div>
  </div>
</template>

<script>
import {
  getBlockByBlockNumber,
  getTransactionByHash,
  getAddressInfo,
  getValidatorsByMoniker
} from "@/api/srechapi";

export default {
  props: ["home_butts"],
  data() {
    return { serchtext: null };
  },
  created() {},
  methods: {
    srchTxtChangeFn() {
      var reg1 = /^\d{1,32}$/;
      var reg2 = /^[0-9A-Z]+$/;
      var reg3 = /cosmos[a-z0-9]+$/;
      var reg4 = /cosmosvaloper[[a-z0-9]+$/;

      var reg3_gauss = /gauss[a-z0-9]+$/;
      var reg4_gauss = /gaussvaloper[a-z0-9]+$/;

      var reg3_usdg = /usdg[a-z0-9]+$/;
      var reg4_usdg = /usdgvaloper[a-z0-9]+$/;

      var reg3_igpc = /igpc[a-z0-9]+$/;
      var reg4_igpc = /igpcvaloper[a-z0-9]+$/;

      var reg3_fec = /fec[a-z0-9]+$/;
      var reg4_fec = /fecvaloper[a-z0-9]+$/;

      var reg3_gpb = /gpb[a-z0-9]+$/;
      var reg4_gpb = /gpbvaloper[a-z0-9]+$/;

      if (this.serchtext != null) {
        this.serchtext = this.serchtext.replace(/\s*/g, "");
        if (reg1.test(this.serchtext)) {
          this.routerSreachFn("/blockchainInfo");
        } else if (reg2.test(this.serchtext)) {
          this.routerSreachFn("/dealInfo");
        } else if (
          reg4.test(this.serchtext) ||
          reg4_gauss.test(this.serchtext) ||
          reg4_usdg.test(this.serchtext) ||
          reg4_igpc.test(this.serchtext) ||
          reg4_fec.test(this.serchtext) ||
          reg4_gpb.test(this.serchtext)
        ) {
          this.routerSreachFn("/Validatorinfo");
        } else if (
          reg3.test(this.serchtext) ||
          reg3_gauss.test(this.serchtext) ||
          reg3_usdg.test(this.serchtext) ||
          reg3_igpc.test(this.serchtext) ||
          reg3_fec.test(this.serchtext) ||
          reg3_gpb.test(this.serchtext)
        ) {
          this.routerSreachFn("/Accountbalance");
        } else {
          this.$router.push({
            path: "/pagesno",
            query: { name: this.serchtext }
          });
        }
      }
    },
    routerSreachFn(names, query) {
      this.$router.push({
        path: names + "/" + this.serchtext
      });
    }

    // public_cuurrFn(res, can_name, routes_name, isValidator) {
    //   if (res.result == null) {
    //     this.$router.push("/pagesnodatae");
    //   } else {
    //     this.$emit("changesfaterFn", JSON.stringify(res.result));
    //     sessionStorage.setItem(can_name, JSON.stringify(res.result));
    //     if (isValidator) {
    //       this.$router.push({
    //         path: "/Validatorinfo",
    //         query: { name: res.result.operator_address }
    //       });
    //     } else {
    //       this.$router.push(routes_name);
    //     }
    //   }
    // }
  },

  components: {}
};
</script>

<style scoped lang="less">
.scrch-box {
  display: flex;
  border-radius: 5px 5px;
  border: 1px solid #dcdfe6;
  padding: 5px 0px;
  input {
    width: 100%;
    height: 20px;
    background: transparent;
    caret-color: #d3d3d3;
    text-indent: 10px;
    font-size: 14px;
    color: #333;
  }

  .buttons {
    height: 20px;
    width: 47px;
    line-height: 20px;
    font-size: 20px;
    border-left: 1px solid #dcdfe6;
    padding-left: 10px;
    color: #606060;
    cursor: pointer;
    i {
      vertical-align: middle;
      margin-top: -3px;
    }
  }
}
input::-webkit-input-placeholder {
  color: #d3d3d3;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #d3d3d3;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #d3d3d3;
}

input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #d3d3d3;
}
.inputs {
  input {
    color: #fff !important;
  }
  input::-webkit-input-placeholder {
    color: #5a5085 !important;
  }

  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #5a5085 !important;
  }

  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #5a5085 !important;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #5a5085 !important;
  }
}
.search_home {
  color: #fff !important;
}
</style>
