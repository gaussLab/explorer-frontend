<template>
  <div class="container-children-box">
    <Srachselect
      @srechclickFn="srechclickFn"
      :total="total"
      :iSsamllType="1"
    ></Srachselect>
    <section>
      <el-table
        :data="tableData"
        style="width: 100%;"
        :header-cell-style="tableHeaderColor"
      >
        <el-table-column prop="date" label="TXHash" width="180" align="center">
          <template #default="scope">
            <span class="maodian" @click="$clickHshRouterFn(scope.row)">
              {{ scope.row.txhash_jiequ }}</span
            >
            <span class="tiaoshu" v-if="scope.row.event.length > 1"
              >+ {{ scope.row.event.length }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Block" width="100" align="center">
          <template #default="scope">
            <span
              class="maodian"
              @click="$blockChainInfosRouterFn(scope.row.height)"
              >{{ scope.row.height }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="address" label="TXType" align="center">
          <template #default="scope">
            <div>
              <div v-if="scope.row.event.length > 1">--</div>
              <span v-else>{{ scope.row.event[0].type }}</span>
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
        <el-table-column prop="address" label="To" width="200" align="center">
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
          :label="`Amount(${chainName})`"
          align="center"
        >
          <template #default="scope">
            <span v-if="scope.row.isMore" class="tiaoshu">More+</span>
            <span v-else>{{ scope.row.event[0].amount }}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="address"
          :label="`Fee (${chainName})`"
          align="center"
        >
          <template #default="scope">
            {{ scope.row.fee }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Time" width="180" align="center">
          <template #default="scope"> {{ scope.row.timestamp }} UTC </template>
        </el-table-column>
      </el-table>
    </section>
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
import Srachselect from "@/components/srachselect";
import { getValidatorRelatedTx } from "@/api/identifier";
import { getUTCTimeFn, jiequStrFn } from "@/utils/public";
export default {
  data() {
    return {
      tableData: [],
      pageIndex: 1,
      pageSize: 20,
      total: 0,
      chainName: "",
      smallType: undefined,
      status: undefined,
      startTime: undefined,
      endTime: undefined
    };
  },
  created() {
    this.getValidatorRelatedTxFn();
  },
  methods: {
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #5841ac;color: #fff;font-weight: 500;";
      }
    },
    headerRouterFn(addr) {
      var reg = /cosmosvaloper[[a-z0-9]+$/;
      if (reg.test(addr)) {
        this.$router.push({
          path: "/Validatorinfo",
          query: { name: addr }
        });
      } else {
        this.$router.push({
          path: "/Accountbalance",
          query: { address: addr }
        });
      }
    },
    currpageChange(val) {
      this.pageIndex = val;
      this.getValidatorRelatedTxFn();
    },
    srechclickFn(obj) {
      this.smallType = obj.smallType;
      this.status = obj.status;
      this.startTime = obj.startTime;
      this.endTime = obj.endTime;
      this.getValidatorRelatedTxFn();
    },
    getValidatorRelatedTxFn() {
      getValidatorRelatedTx({
        bigType: "delegation",
        pageSize: this.pageSize,
        pageIndex: this.pageIndex,
        smallType: this.smallType,
        status: this.status,
        startTime: this.startTime,
        endTime: this.endTime
      }).then(res => {
        this.tableData = res.result.records;
        this.chainName = res.result.chainName.toUpperCase();
        this.tableData.map(item => {
          item.event.map((children, key) => {
            if (children.from != null && children.from.icon == undefined) {
              children.from_jiequ = jiequStrFn(children.from);
            }
            if (children.to != null && children.to.icon == undefined) {
              children.to_jiequ = jiequStrFn(children.to);
            }
          });
          item.txhash_jiequ = jiequStrFn(item.txhash);
          item.timestamp = getUTCTimeFn(item.timestamp);
        });
        this.total = res.result.total;
        this.$scrollHeightFn();
      });
    }
  },
  components: { Pagination, Srachselect }
};
</script>

<style scoped lang="less">
</style>
