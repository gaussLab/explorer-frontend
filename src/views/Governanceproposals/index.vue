<template>
  <div class="container-children-box">
    <h3>
      Proposals
      <span>Here is a list of governance proposals</span>
    </h3>
    <section>
      <el-table :data="tableData" style="width: 100%" :header-cell-style="tableHeaderColor">
        <el-table-column prop="proposal_id" label="Proposal ID" align="center" width="100"></el-table-column>
        <el-table-column prop="name" label="Title" width="200" align="center">
          <template #default="scope">
            <span
              class="zhgili_title maodian"
              @click="clickroutesFn(scope.row.proposal_id)"
            >{{ scope.row.content.title }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Type" width="180" align="center">
          <template #default="scope">
            <span>{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Status" align="center">
          <template #default="scope">
            <span
              v-if="scope.row.status == 'PROPOSAL_STATUS_VOTING_PERIOD'"
              class="tx_yellow"
            >Voting period</span>
            <span v-else-if="scope.row.status == 'PROPOSAL_STATUS_PASSED'" class="tx_grren">Passed</span>
            <span v-else-if="scope.row.status == 'PROPOSAL_STATUS_REJECTED'" class="hongse">Rejected</span>
            <span v-else class="tx_pink">remove</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Submit Time" width="190" align="center">
          <template #default="scope">
            <span class="huise">{{ scope.row.submit_time }} UTC</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Deposit  Endtime" width="220" align="center">
          <template #default="scope" align="center">
            <span class="huise">{{ scope.row.deposit_end_time }} UTC</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Voting EndTime" width="220" align="center">
          <template #default="scope" align="center">
            <span class="huise">{{ scope.row.voting_end_time }} UTC</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Total Deposit" align="center">
          <template
            #default="scope"
          >{{ scope.row.total_deposit[0].amount / 1000000 }} {{ chainName }}</template>
        </el-table-column>
      </el-table>
    </section>
    <footer>
      <Pagination
        :total="total"
        :pageIndex="pageIndex"
        :pageSize="pageSize"
        @currpageChange="currpageChange"
      ></Pagination>
    </footer>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getProposalIdList } from "@/api/proposal";
import { getUTCTimeFn } from "@/utils/public";
export default {
  data() {
    return {
      tableData: [],
      pageIndex: 1,
      pageSize: 20,
      total: 0,
      chainName: ""
    };
  },
  created() {
    this.getProposalIdListFn();
  },
  methods: {
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #5841ac;color: #fff;font-weight: 500;";
      }
    },
    clickroutesFn(proposal_id) {
      this.$router.push({
        path: "/votegovernance",
        query: {
          proposal_id
        }
      });
    },
    currpageChange(val) {
      this.pageIndex = val;
      this.getProposalIdListFn();
    },
    getProposalIdListFn() {
      getProposalIdList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }).then(res => {
        this.tableData = res.result.records;
        if (res.result.chainName) {
          this.chainName = res.result.chainName.toUpperCase();
        }

        this.total = res.result.total;
        this.tableData.map(items => {
          items.submit_time = getUTCTimeFn(items.submit_time);
          items.voting_end_time = getUTCTimeFn(items.voting_end_time);
          items.deposit_end_time = getUTCTimeFn(items.deposit_end_time);
        });
        this.$scrollHeightFn();
      });
    }
  },

  components: { Pagination }
};
</script>

<style scoped lang="less">
h3 {
  span {
    font-size: 12px;
    font-weight: normal;
    margin-left: 10px;
    color: #696969;
  }
}
</style>
