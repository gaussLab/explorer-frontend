<template>
  <div class="container-children-box">
    <Srachselect
      @srechclickFn="srechclickFn"
      :total="total"
      :iSsamllType="3"
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
              <span class="tiaoshu" v-if="scope.row.event.length > 1">
                {{ scope.row.event.length }}</span
              >
            </el-tooltip>
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
            <span
              v-if="
                scope.row.event[0].type == 'Delegate' ||
                  scope.row.event[0].type == 'Transfer'
              "
              class="tx_yellow"
              >{{ scope.row.event[0].type }}</span
            >
            <span
              v-else-if="
                scope.row.event[0].type == 'Voting sponsorship' ||
                  scope.row.event[0].type == 'Issue'
              "
              class="tx_grren"
              >{{ scope.row.event[0].type }}</span
            >
            <span
              v-else-if="
                scope.row.event[0].type == 'Withdraw Reward' ||
                  scope.row.event[0].type == 'Withdraw commission'
              "
              class="tx_bule"
              >{{ scope.row.event[0].type }}</span
            >
            <span
              v-else-if="
                scope.row.event[0].type == 'Initiate vate' ||
                  scope.row.event[0].type == 'Undelegate'
              "
              class="tx_pink"
              >{{ scope.row.event[0].type }}</span
            >
            <span v-else>{{ scope.row.event[0].type }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Proposal-Type" align="center">
          <template #default="scope">
            <span v-if="scope.row.isMore" class="tiaoshu">More+</span>
            <span v-else>{{ scope.row.event[0].tx_type }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="Proposal-ID"
          width="100"
          align="center"
        >
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">More+</span>
            <span v-else-if="!scope.row.event[0].proposal_id">--</span>
            <span
              v-else
              class="maodian"
              @click="votegovernanceRouterFn(scope.row.event[0].proposal_id)"
              >{{ scope.row.event[0].proposal_id }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Proposal-Title" align="center">
          <template #default="scope">
            <span v-if="scope.row.event[0].title == undefined">--</span>
            <span v-else>{{ scope.row.event[0].title }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="" align="center">
          <template #header>
            <span> Amount({{ anmot }}) </span>
          </template>
          <template #default="scope">
            <span v-if="scope.row.event[0].amount" class="tiaoshu">{{
              scope.row.event[0].amount
            }}</span>
            <span v-else>--</span>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="" align="center">
          <template #header>
            <span> Fee({{ anmot }}) </span>
          </template>
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
      tableData: [{ event: [[]] }],
      pageIndex: 1,
      pageSize: 20,
      total: 0,
      smallType: undefined,
      status: undefined,
      startTime: undefined,
      endTime: undefined,
      bigType: "gov",
      anmot: undefined
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
    votegovernanceRouterFn(id) {
      this.$router.push({
        path: "/votegovernance",
        query: {
          proposal_id: id
        }
      });
    },
    currpageChange(val) {
      this.pageIndex = val;
      this.getValidatorRelatedTxFn();
    },
    srechclickFn(obj) {
      this.smallType = obj.smallType;
      if (obj.status) {
        this.status = obj.status * 1;
      } else {
        this.status = undefined;
      }

      this.startTime = obj.startTime;
      this.endTime = obj.endTime;
      this.getValidatorRelatedTxFn();
    },
    getValidatorRelatedTxFn() {
      getValidatorRelatedTx({
        bigType: this.bigType,
        pageSize: this.pageSize,
        pageIndex: this.pageIndex,
        smallType: this.smallType,
        status: this.status,
        startTime: this.startTime,
        endTime: this.endTime
      }).then(res => {
        this.tableData = res.result.records;

        this.anmot = res.result.chainName.toUpperCase();

        this.tableData.map(item => {
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
