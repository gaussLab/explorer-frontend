<template>
  <div class="container-children-box">
    <Srachselect
      @srechclickFn="srechclickFn"
      :total="total"
      :iSsamllType="4"
    ></Srachselect>
    <div class="Transction-table">
      <el-table
        :data="Table_data"
        style="width: 100%"
        :header-cell-style="tableHeaderColor"
      >
        <el-table-column prop="" label="TXHash" width="200" align="center">
          <template #default="scope">
            <el-tooltip
              class="item"
              effect="dark"
              placement="top"
              :content="scope.row.txhash"
            >
              <div @click="$clickHshRouterFn(scope.row)">
                <span class="maodian">{{ scope.row.txhash_jiequ }}</span>
                <span class="tiaoshu" v-if="scope.row.event.length > 1"
                  >+{{ scope.row.event.length }}</span
                >
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="TXtype" width="210" align="center">
          <template #default="scope">
            <div>
              <span v-if="scope.row.event.length > 1">--</span>
              <div v-else>
                <span>{{ scope.row.event[0].type }}</span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Amount" width="200" align="center">
          <template #default="scope">
            <span
              @click="$clickHshRouterFn(scope.row)"
              v-if="scope.row.isMore"
              class="tiaoshu cursor_"
              >More+</span
            >
            <span v-else-if="scope.row.event[0].amount">
              {{ scope.row.event[0].amount }}

              {{ scope.row.event[0].coinName }}
            </span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="From" width="150" align="center">
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
                    @click="$headerRouterFn(scope.row.event[0].from)"
                    >{{ scope.row.event[0].from_jiequ }}</span
                  >
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
                  <img
                    class="moniker_img"
                    :src="scope.row.event[0].from.icon"
                  />
                  <span>{{ scope.row.event[0].from.moniker }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="" align="center">
          <template #default="scope">
            <img
              v-if="scope.row.code == 0"
              class="jiantou"
              src="../../assets/jiantou_success.png"
            />
            <img v-else class="jiantou" src="../../assets/jiantou_error.png" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="To" width="150" align="center">
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
                    @click="$headerRouterFn(scope.row.event[0].to)"
                    >{{ scope.row.event[0].to_jiequ }}</span
                  >
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

        <el-table-column
          prop="address"
          label="Fee"
          align="center"
          width="220px"
        >
          <template #default="scope">
            <span>{{ scope.row.fee }} {{ scope.row.feeCoinName }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="Block" align="center">
          <template #default="scope">
            <span
              class="maodian"
              @click="$blockChainInfosRouterFn(scope.row.height)"
              >{{ scope.row.height }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Age" width="100" align="center">
          <template #default="scope">
            <div>
              <el-tooltip
                class="item"
                effect="dark"
                placement="top"
                :content="scope.row.timestamp_utc + 'UTC'"
              >
                <span class="huise shubiao"
                  >{{ scope.row.timestamp_hsm }} ago</span
                >
              </el-tooltip>
            </div>
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
import { getByBlockNumber } from "@/api/deal";
import Srachselect from "@/components/srachselect";
import { getUTCTimeFn, jiequStrFn, TimeremainingFn } from "@/utils/public";
export default {
  props: ["isblockHeight", "blcokheight"],
  data() {
    return {
      Table_data: [{ event: [{ from: "***", to: "****" }] }],
      pageSize: 20,
      pageIndex: 1,
      total: 0,
      bigType: undefined,
    };
  },
  created() {
    this.getByBlockNumberFn();
  },
  computed: {
    FiterTypeFn(val) {},
  },
  methods: {
    srechclickFn(val) {
      console.log(val);
      this.bigType = val.bigType;
      this.endTime = val.endTime;
      this.startTime = val.startTime;
      this.status = val.status;
      this.pageIndex = 1;
      this.getByBlockNumberFn();
    },

    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #5841ac;color: #fff;font-weight: 500;";
      }
    },
    currpageChange(val) {
      this.pageIndex = val;
      this.getByBlockNumberFn();
    },
    getByBlockNumberFn(pageIndex, type) {
      getByBlockNumber({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        bigType: this.bigType,
        endTime: this.endTime,
        startTime: this.startTime,
        status: this.status,
      }).then((res) => {
        res.result.records.map((item) => {
          item.timestamp_hsm = TimeremainingFn(item.timestamp);
          item.timestamp_utc = getUTCTimeFn(item.timestamp);
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
    },
  },
  components: { Pagination, Srachselect },
};
</script>

<style scoped lang="less">
.Transction-table {
  margin-top: 10px;
}
.txtype {
  span {
    color: #ff9601;
  }
}
</style>
