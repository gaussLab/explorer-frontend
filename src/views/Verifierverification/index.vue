<template>
  <div class="container-children-box">
    <Srachselect
      @srechclickFn="srechclickFn"
      :total="total"
      :iSsamllType="2"
    ></Srachselect>
    <section>
      <el-table
        :data="tableData"
        style="width: 100%;"
        :header-cell-style="tableHeaderColor"
      >
        <el-table-column prop="date" label="TXHash" width="180" align="center">
          <template #default="scope">
            <el-tooltip
              class="item"
              effect="dark"
              placement="top"
              :content="scope.row.txhash"
            >
              <span class="maodian" @click="$clickHshRouterFn(scope.row)">
                {{ scope.row.txhash_jiequ }}</span
              >
            </el-tooltip>
            <span v-if="scope.row.event.length > 1" class="tiaoshu"
              >+{{ scope.row.event.length }}</span
            >
          </template>
        </el-table-column>

        <el-table-column
          prop="address"
          label="TXType"
          align="center"
          width="250"
        >
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <span v-else>{{ scope.row.event[0].type }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="Status" width="180" align="center">
          <template #default="scope">
            <span v-if="scope.row.code == 0" class="success">Success</span>
            <span v-else class="error">Failed</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Block" align="center">
          <template #default="scope">
            <span
              class="maodian"
              @click="$blockChainInfosRouterFn(scope.row.height)"
              >{{ scope.row.height }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Moniker" align="center">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <div v-else>
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
              <div v-else-if="scope.row.event[0].toIsNull == 0">
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
              <div v-else-if="scope.row.event[0].fromIsNull == 0">
                <el-tooltip
                  class="item"
                  effect="dark"
                  placement="top"
                  :content="scope.row.event[0].from"
                >
                  <span
                    class="maodian"
                    @click="$headerRouterFn(scope.row.event[0].from)"
                    >{{ scope.row.event[0].to_jiequ }}</span
                  >
                </el-tooltip>
              </div>
              <div v-else-if="scope.row.event[0].fromIsNull == 2">
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
              <div v-else>
                --
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          :label="`Self-Bonded(${chainName})`"
          align="center"
        >
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <div v-else>
              <div v-if="scope.row.event[0].fromIsNull == 2">
                <span>{{ scope.row.event[0].from.selfBonded }}</span>
              </div>
              <div v-else-if="scope.row.event[0].toIsNull == 2">
                <span>{{ scope.row.event[0].to.selfBonded }}</span>
              </div>

              <div v-else>
                --
              </div>
            </div>
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
        <el-table-column prop="address" label="Time" align="center">
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
      smallType: undefined,
      status: undefined,
      startTime: undefined,
      endTime: undefined,
      chainName: ""
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
        bigType: "validation",
        pageSize: this.pageSize,
        pageIndex: this.pageIndex,
        smallType: this.smallType,
        status: this.status,
        startTime: this.startTime,
        endTime: this.endTime
      }).then(res => {
        this.tableData = res.result.records;
        if (res.result.chainName) {
          this.chainName = res.result.chainName.toUpperCase();
        }
        this.tableData.map(item => {
          if (item.event.length == 1) {
            if (item.event[0].fromIsNull == 0) {
              item.event[0].from_jiequ = jiequStrFn(item.event[0].from);
            }
            if (item.event[0].toIsNull == 0) {
              item.event[0].to_jiequ = jiequStrFn(item.event[0].to);
            }
          }
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
