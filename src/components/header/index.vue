<template>
  <div class="headers">
    <div class="container">
      <div class="left cursor_" v-if="iSsrcBool == 'gauss'" @click="headerRouterFn('/index')">
        <div>
          <img class="log" src="../../assets/log.png" alt />
        </div>
        <div>
          <img class="log_txt" src="../../assets/logtext.png" alt />
        </div>
      </div>

      <div v-else-if="iSsrcBool == 'usdg'" class="left cursor_" @click="headerRouterFn('/index')">
        <div>
          <img class="log" src="../../assets/usdg.png" alt />
        </div>
        <div>
          <img class="log_usdg_txt" width="200px" src="../../assets/usdgtext.png" alt />
        </div>
      </div>
      <div v-else-if="iSsrcBool == 'fec'" class="left cursor_" @click="headerRouterFn('/index')">
        <div>
          <img class="log" src="../../assets/fec.png" alt />
        </div>
        <div>
          <img class="log_usdg_txt" width="200px" src="../../assets/fec_text.png" alt />
        </div>
      </div>
      <div v-else-if="iSsrcBool == 'igpc'" class="left cursor_" @click="headerRouterFn('/index')">
        <div>
          <img class="log" src="../../assets/igpc.png" alt />
        </div>
        <div>
          <img class="log_usdg_txt" width="200px" src="../../assets/igpc_text.png" alt />
        </div>
      </div>

      <div v-else-if="iSsrcBool == 'gpb'" class="left cursor_" @click="headerRouterFn('/index')">
        <div>
          <img class="log" src="../../assets/gpb.png" alt />
        </div>
        <div>
          <img class="log_usdg_txt" width="200px" src="../../assets/gpb_text.png" alt />
        </div>
      </div>

      <div class="left cursor_" v-else @click="headerRouterFn('/index')">
        <div>
          <img class="log" src alt />
        </div>
        <div>
          <img class="log_txt" src alt />
        </div>
      </div>
      <div class="right">
        <div v-if="isSreach == true"></div>
        <div v-else class="right-top">
          <scrachINput @changesfaterFn="changesfaterFn"></scrachINput>
        </div>
        <div class="right-botom">
          <div class="left-text">
            <div
              class="divs_ cursor_ margin_right routes_select"
              @click="headerRouterFn('/blockchain')"
            >Blockchain</div>
            <div
              class="divs_ cursor_ margin_right routes_select"
              @click="headerRouterFn('/deal')"
            >Transactions</div>
            <div>
              <div class="movebox routes_select">
                <p>
                  <span>Staking</span>
                  <i class="jiantous up el-icon-arrow-down"></i>
                </p>
                <ul class="Staking childrenbox">
                  <li @click="headerRouterFn('/identifier')">Validators</li>
                  <li @click="headerRouterFn('/Sendtherecord')">Delegation Txs</li>
                  <li @click="headerRouterFn('/Verifierverification')">Validation Txs</li>
                </ul>
              </div>
            </div>
            <div>
              <div class="movebox routes_select">
                <p>
                  <span>Gov</span>
                  <i class="jiantous up el-icon-arrow-down"></i>
                </p>
                <ul class="childrenbox">
                  <li class="cursor_" @click="headerRouterFn('/Governanceproposals')">Proposals</li>
                  <li class="cursor_" @click="headerRouterFn('/Proposedtransaction')">Gov Txs</li>
                </ul>
              </div>
            </div>
            <div>
              <div class="movebox routes_select">
                <p>
                  <span>Stats</span>
                  <i class="jiantous up el-icon-arrow-down"></i>
                </p>
                <ul class="Stats childrenbox">
                  <li
                    class="cursor_"
                    @click="headerRouterFn('/statistics')"
                  >{{ chainName }} Rich List</li>
                  <li
                    class="cursor_"
                    @click="headerRouterFn('/gaussstatistical')"
                  >{{ chainName }} Stats</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="solid"></div>
          <div class="right-img-box">
            <div class="img-box-content">
              <div class="div-select-text cursor_">
                <span v-if="iSsrcBool == 'gauss'">
                  <img
                    class="imges_bizhong"
                    src="../../assets/zu2.jpg"
                    alt
                    style="margin-right:5px"
                  />
                  <span class="span_bizhong">GAUSS</span>
                </span>

                <span v-if="iSsrcBool == 'usdg'">
                  <img
                    class="imges_bizhong"
                    src="../../assets/usdg.png"
                    alt
                    style="margin-right:5px"
                  />
                  <span class="span_bizhong">USDG</span>
                </span>
                <span v-if="iSsrcBool == 'fec'">
                  <img
                    class="imges_bizhong"
                    src="../../assets/fec.png"
                    alt
                    style="margin-right:5px"
                  />
                  <span class="span_bizhong">FEC</span>
                </span>
                <span v-if="iSsrcBool == 'igpc'">
                  <img
                    class="imges_bizhong"
                    src="../../assets/igpc.png"
                    alt
                    style="margin-right:5px"
                  />
                  <span class="span_bizhong">IGPC</span>
                </span>
                <span v-if="iSsrcBool == 'gpb'">
                  <img
                    class="imges_bizhong"
                    src="../../assets/gpb.png"
                    alt
                    style="margin-right:5px"
                  />
                  <span class="span_bizhong">GPB</span>
                </span>

                <i class="jiantous up el-icon-arrow-down"></i>
              </div>
              <ul class="select-bizhong">
                <li class="cursor_ lis" @click="routerIpFn('gauss')">
                  <img src="../../assets/zu2.jpg" alt />
                  <span>GAUSS</span>
                </li>
                <li class="cursor_ lis" @click="routerIpFn('usdg')">
                  <img src="../../assets/usdg.png" alt />
                  <span>USDG</span>
                </li>
                <li class="cursor_ lis" @click="routerIpFn('fec')">
                  <img src="../../assets/fec.png" alt />
                  <span>FEC</span>
                </li>
                <li class="cursor_ lis" @click="routerIpFn('igpc')">
                  <img src="../../assets/igpc.png" alt />
                  <span>IGPC</span>
                </li>
                <li class="cursor_ lis" @click="routerIpFn('gpb')">
                  <img src="../../assets/gpb.png" alt />
                  <span>GPB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scrachINput from "@/components/scrachINput/index";
import { getChainName } from "@/api/http_name_ip";
export default {
  props: ["isSreach"],
  data() {
    return {
      iSsrcBool: true,
      chainName: "",
      http_name_data: {}
    };
  },
  watch: {
    $route(to, from) {
      this.clickselectHeaderFn(to.path);
    }
  },
  created() {
    this.getChainNameFn();
  },

  mounted() {
    var movebox = document.getElementsByClassName("movebox");
    var down = document.getElementsByClassName("down");
    var up = document.getElementsByClassName("up");
    var childrenbox = document.getElementsByClassName("childrenbox");
    var divs_ = document.getElementsByClassName("divs_");
    var lis = document.getElementsByClassName("lis");
    var imges_bizhong = document.getElementsByClassName("imges_bizhong");
    var span_bizhong = document.getElementsByClassName("span_bizhong");
    var select_bizhong = document.getElementsByClassName("select-bizhong");
    var div_select_text = document.getElementsByClassName("img-box-content");
    var This = this;
    for (var lis_i = 0; lis_i < lis.length; lis_i++) {
      lis[lis_i].index = lis_i;
      lis[lis_i].parentNode.parentNode.onmouseover = function() {
        this.childNodes[1].style.display = "block";
      };
      lis[lis_i].onclick = function() {
        This.iSsrcBool = this.index == 0 ? true : false;
        sessionStorage.setItem("iSsrcBool", This.iSsrcBool);
        this.parentNode.style.display = "none";
      };
    }
    if (div_select_text[0]) {
      div_select_text[0].onmouseout = function() {
        select_bizhong[0].style.display = "none";
      };
    }

    // 清楚所有选择
    function cellhideenFn() {
      for (var divs_i = 0; divs_i < divs_.length; divs_i++) {
        divs_[divs_i].classList.add("block_color");
      }
    }
    function moverhideen() {
      for (var move_i = 0; move_i < movebox.length; move_i++) {
        movebox[move_i].childNodes[0].childNodes[0].classList.add(
          "block_color"
        );
      }
    }
    for (var divs_i = 0; divs_i < divs_.length; divs_i++) {
      divs_[divs_i].onclick = function() {};
    }

    for (var i = 0; i < movebox.length; i++) {
      movebox[i].isshow = false;
      movebox[i].i = i;
      movebox[i].onmouseover = function(i) {
        this.childNodes[1].style.display = "block";
        var lis = this.childNodes[1].childNodes;
        var This = this;
        for (var nodes_i = 0; nodes_i < lis.length; nodes_i++) {
          lis[nodes_i].onclick = function() {
            cellhideenFn();
            moverhideen();
            // This.childNodes[0].childNodes[0].innerHTML = this.innerHTML;
            This.childNodes[0].childNodes[0].classList.add("colours");
            This.childNodes[1].style.display = "none";
          };
        }
      };
      movebox[i].onmouseout = function() {
        this.childNodes[1].style.display = "none";
      };
    }
  },
  methods: {
    clickselectHeaderFn(path, isCreated) {
      var routes_select = document.getElementsByClassName("routes_select");
      if (!isCreated) {
        ChushihuaFn();
      }

      function ChushihuaFn() {
        for (var i = 0; i < routes_select.length; i++) {
          var nodes_name = routes_select[i].childNodes;
          if (nodes_name.length == 1) {
            routes_select[i].style.color = "#000";
          } else {
            nodes_name[0].childNodes[0].style.color = "#000";
          }
        }
      }
      setTimeout(() => {
        if (path == "/blockchain") {
          routes_select[0].style.color = "#5026EF";
        }
        if (path == "/deal") {
          routes_select[1].style.color = "#5026EF";
        }
        if (
          path == "/identifier" ||
          path == "/Sendtherecord" ||
          path == "/Verifierverification"
        ) {
          routes_select[2].childNodes[0].childNodes[0].style.color = "#5026EF";
        }
        if (path == "/Governanceproposals" || path == "/Proposedtransaction") {
          routes_select[3].childNodes[0].childNodes[0].style.color = "#5026EF";
        }

        if (path == "/statistics" || path == "/gaussstatistical") {
          routes_select[4].childNodes[0].childNodes[0].style.color = "#5026EF";
        }
        // if (path == "/gaussstatistical") {
        //   routes_select[4].childNodes[0].childNodes[0].innerHTML =
        //     this.chainName + " Stats";
        // }
        // if (path == "/statistics") {
        //   routes_select[4].childNodes[0].childNodes[0].innerHTML =
        //     this.chainName + " RIich List";
        // }

        // if (path == "/Governanceproposals") {
        //   routes_select[3].childNodes[0].childNodes[0].innerHTML = "Proposals";
        // }
        // if (path == "/Proposedtransaction") {
        //   routes_select[3].childNodes[0].childNodes[0].innerHTML = "Gov Txs";
        // }
        // if (path == "/identifier") {
        //   routes_select[2].childNodes[0].childNodes[0].innerHTML = "Validators";
        // }
        // if (path == "/Sendtherecord") {
        //   routes_select[2].childNodes[0].childNodes[0].innerHTML =
        //     "Delegation Txs";
        // }
        // if (path == "/Verifierverification") {
        //   routes_select[2].childNodes[0].childNodes[0].innerHTML =
        //     "Validation Txs";
        // }
      });
    },
    headers_ico_Fn(chainName) {
      var link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";

      var title = document.getElementsByTagName("title")[0];
      switch (chainName) {
        case "gauss":
          link.href = "/gauss.ico";
          title.innerText = "GAUSS";
          break;
        case "usdg":
          link.href = "/usdg.ico";
          title.innerText = "USDG";
          break;
        case "fec":
          link.href = "/fec.ico";
          title.innerText = "FEC";
          break;
        case "igpc":
          link.href = "/igpc.ico";
          title.innerText = "IGPC";
          break;
        case "gpb":
          link.href = "/gpb.ico";
          title.innerText = "GPB";
          break;
      }
      this.iSsrcBool = chainName;
      document.getElementsByTagName("head")[0].appendChild(link);
    },
    getChainNameFn() {
      getChainName().then(res => {
        this.http_name_data = res;
        var chainName = res.chainName;
        var urlTxt = "";
        this.chainName = res.chainName.toUpperCase();
        this.clickselectHeaderFn(
          "/" + window.location.href.split("/")[3],
          true
        );
        this.$emit("getChianName", chainName);
        this.headers_ico_Fn(chainName);

        switch (res.chainName) {
          case "gauss":
            urlTxt = res.gaussUrl;
            break;
          case "usdg":
            urlTxt = res.usdgUrl;
            break;
          case "igpc":
            urlTxt = res.igpcUrl;
            break;
          case "fec":
            urlTxt = res.fecUrl;
            break;
          case "gpb":
            urlTxt = res.gpbUrl;
            break;
        }
        if (window.location.host != urlTxt.split("//")[1]) {
          window.location.href = urlTxt;
        }
      });
    },
    routerIpFn(val) {
      switch (val) {
        case "gauss":
          window.location.href = this.http_name_data.gaussUrl;
          break;
        case "usdg":
          window.location.href = this.http_name_data.usdgUrl;
          break;
        case "fec":
          window.location.href = this.http_name_data.fecUrl;
          break;
        case "igpc":
          window.location.href = this.http_name_data.igpcUrl;
          break;
        case "gpb":
          window.location.href = this.http_name_data.gpbUrl;
          break;
      }
    },
    headerRouterFn(roter_path) {
      this.$router.push(roter_path);
    },
    changesfaterFn(value) {
      this.$emit("indexChangesValFn", value);
    }
  },
  components: { scrachINput }
};
</script>

<style scoped lang="less">
.block_color {
  color: #000;
}
.colours {
  color: #5026ef;
}

.movebox {
  p {
    display: flex;
    display: inline-block;
    align-items: center;
  }
}
.img-box-content {
  position: relative;
}
.img-box-content:hover .select-bizhong {
  display: block;
}
.select-bizhong {
  display: none;
}
.span_bizhong {
  display: inline-block;
  width: 45px;
}
.tranform {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
.margin_right:hover {
  color: #5026ef;
}
.down {
  display: none;
}
.solid {
  height: 15px;
  margin-right: 10px;
  border-left: 1px solid #666;
}
.container {
  // position: fixed;
  display: block;
  display: none;
  top: 0px;

  width: 1200px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    .log {
      width: 40px;
      height: 40px;
      margin: 5px 0px;
    }
    .log_txt {
      width: 144px;
      height: 17px;
      margin-left: 14px;
    }
  }
  .right {
    .right-top {
      margin-top: 20px;
      margin-bottom: 15px;
      width: 70%;
    }
    .right-botom {
      display: flex;
      align-items: center;
      font-size: 14px;
      .Staking {
        width: 95px;
        margin-right: 0px !important;
      }
      .Stats {
        width: 114px;
      }

      .left-text {
        display: flex;
        div {
          position: relative;
          line-height: 30px;
          margin-right: 20px;
          p {
            cursor: pointer;
          }

          ul {
            position: absolute;
            top: 30px;
            left: 0px;
            // opacity: 0;
            padding-top: 10px;
            line-height: 30px;
            background: #fff;
            font-size: 12px;
            padding: 5px 7px;
            font-weight: normal;
            border: 1px solid #ccc;
            z-index: 2;
            li {
              cursor: pointer;
              &:hover {
                color: #5026ef;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
    .right-img-box {
      font-size: 12px;
      .div-select-text {
        line-height: 30px;
        height: 30px;
        img {
          width: 20px;
          height: 20px;
          margin-top: 5px;
        }
      }
      .select-bizhong {
        position: absolute;
        top: 28px;
        background: #fff;
        z-index: 9;
        padding: 10px 5px;
        border: 1px solid #ccc;
        li {
          line-height: 25px;
          line-height: 25px;
          display: flex;
          align-items: center;
        }
        span {
          display: inline-block;
          line-height: 25px;
        }
        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }
  }
}
.jiantous {
  font-size: 12px;
  margin-left: 5px;
}
.margin_right_box {
  margin-right: 30px !important;
}
.gaoss {
  position: relative;
  top: 8px;
  // margin-top: 5px;
}
.movebox:hover .childrenbox {
  display: block;
}
.childrenbox {
  display: none;
}
.headers {
  width: 100%;
  background: #fff;
  box-shadow: 0px 5px 5px 0px rgba(205, 205, 205, 0.22);
}
.log_usdg_txt {
  // border: 1px solid #000;
  width: 114px;
  height: 17px;
  margin-left: 14px;
}
</style>
