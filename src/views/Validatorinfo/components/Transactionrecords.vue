<template>
  <div class="container">
    <h3 class="s-b-t">Transaction records</h3>
    <el-radio-group v-model="bigType" size="medium" @change="bigTypeFn">
      <el-radio-button label="transfer">Transfer ({{ AllTypeCountData.transferCount }})</el-radio-button>
      <el-radio-button label="Staking">Staking ({{ AllTypeCountData.delegatorCount }})</el-radio-button>
      <el-radio-button label="reward">Distribution({{ AllTypeCountData.rewardCount }})</el-radio-button>
      <el-radio-button label="vote">Governance({{ AllTypeCountData.voteCount }})</el-radio-button>
      <el-radio-button label="business">Business({{ AllTypeCountData.businessCount }})</el-radio-button>
      <el-radio-button label="jail">Slashing({{ AllTypeCountData.jailCount }})</el-radio-button>
    </el-radio-group>
    <div class="Transction-table">
      <el-table :data="Table_data" style="width: 100%" :header-cell-style="tableHeaderColor">
        <el-table-column prop label="TXHash" width="220" align="center">
          <template #default="scope">
            <el-tooltip class="item" effect="dark" placement="top" :content="scope.row.txhash">
              <div @click="$clickHshRouterFn(scope.row)">
                <span class="maodian">{{ scope.row.txhash_jiequ }}</span>
                <span
                  class="tiaoshu"
                  v-if="scope.row.event.length > 1"
                >+{{ scope.row.event.length }}</span>
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="TXtype" align="center">
          <template #default="scope">
            <div class="txtype">
              <span>{{ scope.row.event[0].type }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="From" width="180" align="center">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <div v-else>
              <div v-if="scope.row.event[0].fromIsNull == 0">
                <el-tooltip
                  class="item"
                  effect="dark"
                  placement="top"
                  :content="scope.row.event[0].from"
                >
                  <span
                    class="maodian"
                    @click="
                      $headerRouterFn(
                        scope.row.event[0].from,
                        scope.row.event[0].from
                      )
                    "
                  >{{ scope.row.event[0].from_jiequ }}</span>
                </el-tooltip>
              </div>
              <div v-if="scope.row.event[0].fromIsNull == 1">--</div>
              <div v-if="scope.row.event[0].fromIsNull == 2">
                <div
                  class="maodian"
                  @click="
                    $userInfoRouterFn(scope.row.event[0].from.operatorAddress)
                  "
                >
                  <img class="moniker_img" :src="scope.row.event[0].from.icon" />
                  <span>{{ scope.row.event[0].from.moniker }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="address" width="50" label>
          <template #default="scope">
            <img
              v-if="scope.row.code == 0"
              class="jiantou"
              src="../../../assets/jiantou_success.png"
            />
            <img v-else class="jiantou" src="../../../assets/jiantou_error.png" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="To" width="180" align="center">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <div v-else>
              <div v-if="scope.row.event[0].toIsNull == 0">
                <el-tooltip
                  class="item"
                  effect="dark"
                  placement="top"
                  :content="scope.row.event[0].to"
                >
                  <span
                    class="maodian"
                    @click="$headerRouterFn(scope.row.event[0].to, true)"
                  >{{ scope.row.event[0].to_jiequ }}</span>
                </el-tooltip>
              </div>
              <div v-if="scope.row.event[0].toIsNull == 1">--</div>
              <div v-if="scope.row.event[0].toIsNull == 2">
                <div
                  class="maodian"
                  @click="
                    $userInfoRouterFn(scope.row.event[0].to.operatorAddress)
                  "
                >
                  <img class="moniker_img" :src="scope.row.event[0].to.icon" />
                  <span>{{ scope.row.event[0].to.moniker }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Amount">
          <template #default="scope">
            <span v-if="scope.row.isMore" class="tiaoshu">More+</span>
            <span v-else-if="scope.row.event[0].amount">
              {{ scope.row.event[0].amount }}
              {{ scope.row.event[0].coinName }}
            </span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Fee" align="center">
          <template #default="scope">
            <span>{{ scope.row.fee }} {{ scope.row.event[0].chainName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Time" width="170" align="center">
          <template #default="scope">
            <span>{{ scope.row.timestamp }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <footer>
      <Pagination
        :pageIndex="pageIndex"
        :pageSize="pageSize"
        :total="total"
        @currpageChange="currpageChange"
      ></Pagination>
    </footer>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getByBlockNumber, getAllTypeCount } from "@/api/deal";
import { getUTCTimeFn, jiequStrFn } from "@/utils/public";
export default {
  props: ["isblockHeight", "blcokheight"],
  data() {
    return {
      Table_data: [],
      pageSize: 7,
      pageIndex: 1,
      total: 0,
      bigType: "transfer",
      AllTypeCountData: [],
      httPvariableData: {
        key: "",
        value: ""
      }
    };
  },
  watch: {
    $route(from, to) {
      if (from.name == "blockchainInfo") {
        if (this.isblockHeight) {
          this.httPvariableData.key = "blockHeight";
        } else {
          this.httPvariableData.key = "address";
        }
        this.getByBlockNumberFn();
        this.getAllTypeCountFn();
      }
    }
  },
  mounted() {
    // 第一种情况 isblockHeight true 表示是查询的列表是区块高度
    // 第二种情况 isblockHeight 不传 表示是查询的列表是验证人详情 该组件默认请求区块详情的数据
  },
  created() {
    if (this.isblockHeight) {
      this.httPvariableData.key = "blockHeight";
    } else {
      this.httPvariableData.key = "address";
    }
    this.getByBlockNumberFn();
    this.getAllTypeCountFn();
  },
  watch: {
    $route(from, to) {
      if (from.name == "blockchainInfo") {
        if (this.isblockHeight) {
          this.httPvariableData.key = "blockHeight";
        } else {
          this.httPvariableData.key = "address";
        }
        this.getByBlockNumberFn();
        this.getAllTypeCountFn();
      }
    }
  },
  computed: {
    FiterTypeFn(val) {}
  },
  methods: {
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #5841ac;color: #fff;font-weight: 500;";
      }
    },
    getAllTypeCountFn() {
      console.log();
      getAllTypeCount({
        [this.httPvariableData.key]: this.$route.params.name
      }).then(res => {
        this.AllTypeCountData = res.result;
        this.$scrollHeightFn();
      });
    },
    currpageChange(val) {
      this.pageIndex = val;
      this.getByBlockNumberFn();
    },
    bigTypeFn(value) {
      this.bigType = value;
      this.pageIndex = 1;
      this.getByBlockNumberFn();
    },
    getByBlockNumberFn(pageIndex, type) {
      getByBlockNumber({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        bigType: this.bigType,
        [this.httPvariableData.key]: this.$route.params.name
      }).then(res => {
        res.result.records.map(item => {
          item.timestamp = getUTCTimeFn(item.timestamp);
          item.txhash_jiequ = jiequStrFn(item.txhash);
          item.event.map((children, key) => {
            if (children.from != null && children.from.icon == undefined) {
              children.from_jiequ = jiequStrFn(children.from);
            }
            if (children.to != null && children.to.icon == undefined) {
              children.to_jiequ = jiequStrFn(children.to);
            }
          });
        });
        this.Table_data = res.result.records;
        this.total = res.result.total;
        this.$scrollHeightFn();
      });
    }
  },
  components: { Pagination }
};
</script>

<style scoped lang="less">
.Transction-table {
  margin-top: 10px;
}
.maodian {
  span {
  }
}
</style>
