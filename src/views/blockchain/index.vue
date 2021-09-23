<template>
  <div class="container-children-box">
    <div class="Transction-table">
      <h3 class="s-b-t">Latest Blocks</h3>
      <el-table
        :data="TableData"
        :header-cell-style="tableHeaderColor"
        style="width: 100%"
      >
        <!-- <el-table-column prop="address" label="Time" width="170">
          <template #default="scope">
            <span>{{ scope.row.timestamp }}</span>
          </template>
        </el-table-column> -->
        <el-table-column prop="date" label="Block" width="260" align="center">
          <template #default="scope">
            <span
              class="maodian"
              @click="$blockChainInfosRouterFn(scope.row.height)"
              >{{ scope.row.height }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="Proposer" label="Proposer" width="170">
          <template #default="scope">
            <div class="maodian">
              <img class="user_icon" :src="scope.row.validator_coin" />
              <span
                class="cursor_"
                @click="$userInfoRouterFn(scope.row.operatorAddress)"
                >{{ scope.row.validator }}</span
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="tx_num" label="No. of Txs" align="center">
        </el-table-column>
        <el-table-column prop="address" label="Age" align="center">
          <template #default="scope">
            <el-tooltip
              class="item"
              effect="dark"
              :content="scope.row.time_stamp"
              placement="top-start"
            >
              <span>{{ scope.row.time_stamp_dys }} ago</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="time_stamp"
          label="Time"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
    <div class="pagin">
      <Pagination
        :total="total"
        :pageSize="pageSize"
        :pageIndex="pageIndex"
        @currpageChange="currpageChange"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getBlockList } from "@/api/deal";
import { TimeremainingFn, getUTCTimeFn } from "@/utils/public";
export default {
  data() {
    return {
      TableData: [],
      pageSize: 20,
      pageIndex: 1,
      total: 0
    };
  },
  created() {
    this.getBlockListFn();
  },
  methods: {
    headerRouterFnidentifier(roter_path, item) {
      this.$router.push({
        path: roter_path,
        query: { name: item.operatorAddress }
      });
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #5841ac;color: #fff;font-weight: 500;";
      }
    },
    headerRouterFn(roter_path, item) {
      sessionStorage.setItem("number_reuslt", JSON.stringify(item));
      this.$router.push({ path: roter_path });
    },
    currpageChange(val) {
      this.pageIndex = val;
      this.getBlockListFn();
    },
    getBlockListFn() {
      getBlockList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }).then(res => {
        this.TableData = res.result.records;
        this.total = res.result.total;
        this.TableData.map(item => {
          item.time_stamp_dys = TimeremainingFn(item.time_stamp);
          item.time_stamp = getUTCTimeFn(item.time_stamp) + " UTC";
        });
      });
    }
  },
  components: {
    Pagination
  }
};
</script>

<style scoped lang="less">
@import "../../css/public.less";
.container {
  width: 1200px;
  // border: 1px solid #000;
  margin: 0px auto;
}
.headers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0px;
}
.h_div_proposer {
  // display: flex;
  // justify-items: center;
  border: 1px solid #000;
}
.h-text {
  display: inline-block;
  width: 250px;
  line-height: 52px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.h_div_proposer img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-top: 12px;
}
</style>
