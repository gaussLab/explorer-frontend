<template>
  <div class="container margin30">
    <header class="s-title">Depositors</header>
    <section>
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="tableHeaderColor"
      >
        <el-table-column prop="date" label="Voter" width="300">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1 || !scope.row.event[0].from"
              >--</span
            >
            <span
              @click="$headerRouterFn(scope.row.event[0].from)"
              v-if="scope.row.event[0].moniker == null"
              class="maodian"
            >
              {{ scope.row.form_jiequ }}
            </span>
            <div
              v-else
              class="maodian"
              @click="$userInfoRouterFn(scope.row.event[0].from)"
            >
              <img class="moniker_img" :src="scope.row.event[0].moniker.icon" />
              <span>{{ scope.row.event[0].moniker.moniker }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Amount（GAUSS）">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">More+</span>
            <span v-else-if="!scope.row.event[0].amount">--</span>
            <span v-else>{{ scope.row.event[0].amount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Type">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <span v-else-if="!scope.row.event[0].type">--</span>
            <span v-else>{{ scope.row.event[0].type }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="To">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">
              --
            </span>
            <span v-else-if="!scope.row.event[0].to">--</span>
            <span v-else>{{ scope.row.event[0].to }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Time">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <span v-else-if="!scope.row.timestamp">--</span>
            <span v-else>{{ scope.row.timestamp }}UTC</span>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        :pageIndex="pageIndex"
        :pageSize="pageSize"
        :total="total"
        @currpageChange="currpageChange"
      ></Pagination>
    </section>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getValidatorRelatedTx } from "@/api/identifier";
import { jiequStrFn } from "@/utils/public";
export default {
  data() {
    return { tableData: [], pageIndex: 1, pageSize: 15, total: 0 };
  },
  created() {
    this.getValidatorRelatedTxFn();
  },
  methods: {
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #EAEBEC;color: #000;font-weight: 500;";
      }
    },
    currpageChange(val) {
      this.pageIndex = val;
      this.getValidatorRelatedTxFn();
    },
    getValidatorRelatedTxFn() {
      getValidatorRelatedTx({
        bigType: "deposit",
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }).then(res => {
        this.tableData = res.result.records;
        this.tableData.map(item => {
          if (item.event.length > 0) {
            item.form_jiequ = jiequStrFn(item.event[0].from);
          }
        });
        this.total = res.result.total;
      });
    }
  },
  components: { Pagination }
};
</script>

<style scoped lang="less">
</style>
