<template>
  <div class="container">
    <section class="c-section">
      <div class="left">
        <h3 class="s-b-t">Delegations</h3>
        <div class="tables">
          <el-table
            :data="Delegator_tableData"
            style="width: 100%"
            :header-cell-style="tableHeaderColor"
          >
            <el-table-column label="Adderss" width="240">
              <template #default="scope">
                <span
                  class="maodian"
                  @click="
                    $headerRouterFn(scope.row.delegation.delegator_address)
                  "
                  >{{ scope.row.delegation.delegator_address_jiequ }}</span
                >
              </template>
            </el-table-column>
            <el-table-column :label="`Amount(${chainName})`" width="180">
              <template #default="scope">
                {{ scope.row.balance.amount / 1000000 }}
              </template>
            </el-table-column>
            <el-table-column label="Shares">
              <template #default="scope">
                {{ (scope.row.delegation.shares * 1).toFixed(2) }}
              </template>
            </el-table-column>
          </el-table>
        </div>
        <Pagination
          :pageSize="Delegator_pageSize"
          :pageIndex="Delegator_pageIndex"
          :total="Delegator_total"
          @currpageChange="DelegatorcurrpageChangeFn"
        ></Pagination>
      </div>
      <div class="right">
        <h3 class="s-b-t">Unbonding Delegations</h3>
        <div class="tables">
          <el-table
            :data="UnDelegator_tableData"
            style="width: 100%"
            :header-cell-style="tableHeaderColor"
          >
            <el-table-column prop="date" label="Adderss" width="240">
              <template #default="scope">
                <span
                  class="maodian"
                  @click="$headerRouterFn(scope.row.delegator_address)"
                  >{{ scope.row.delegator_address_jiequ }}</span
                >
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              :label="`Amount(${chainName})`"
              width="180"
            >
              <template #default="scope">
                {{ scope.row.countAounmnt / 1000000 }}
              </template>
            </el-table-column>

            <el-table-column prop="address" label="End Time">
              <template #default="scope">
                <span>{{ scope.row.maxTimeData }} UTC</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <Pagination
          :pageSize="UnDelegator_pageSize"
          :pageIndex="UnDelegator_pageIndex"
          :total="UnDelegator_total"
          @currpageChange="UnDelegatorcurrpageChangeFn"
        ></Pagination>
      </div>
    </section>
  </div>
</template>

<script>
import {
  getDelegatorByOperatorAddress,
  getUnDelegatorByOperatorAddress
} from "@/api/identifier";
import Pagination from "@/components/Pagination";
import { jiequStrFn, timestamp, getUTCTimeFn } from "@/utils/public";
export default {
  data() {
    return {
      Delegator_tableData: [],
      Delegator_pageSize: 6,
      Delegator_pageIndex: 1,
      Delegator_total: 0,
      UnDelegator_tableData: [],
      UnDelegator_pageSize: 6,
      UnDelegator_pageIndex: 1,
      UnDelegator_total: 0,
      routers_name: undefined,
      chainName: ""
    };
  },
  created() {
    this.routers_name = this.$route.params.name;
    this.getDelegatorByOperatorAddressFn();
    this.getUnDelegatorByOperatorAddressFn();
  },
  watch: {
    $route(from, to) {
      if (from.name == "Validatorinfo") {
        this.routers_name = this.$route.params.name;
        this.getDelegatorByOperatorAddressFn();
        this.getUnDelegatorByOperatorAddressFn();
      }
    }
  },
  methods: {
    getDelegatorByOperatorAddressFn() {
      getDelegatorByOperatorAddress({
        operatorAddress: this.routers_name,
        pageSize: this.Delegator_pageSize,
        pageIndex: this.Delegator_pageIndex
      }).then(res => {
        this.Delegator_tableData = res.result.records;
        if (res.result.chainName) {
          this.chainName = res.result.chainName.toUpperCase();
        }
        this.Delegator_tableData.map(items => {
          items.delegation.delegator_address_jiequ = jiequStrFn(
            items.delegation.delegator_address
          );
        });

        this.Delegator_total = res.result.total;
      });
    },
    DelegatorcurrpageChangeFn(val) {
      this.Delegator_pageIndex = val;
      this.getDelegatorByOperatorAddressFn();
    },
    getUnDelegatorByOperatorAddressFn(name) {
      getUnDelegatorByOperatorAddress({
        operatorAddress: this.routers_name,
        pageSize: this.UnDelegator_pageSize,
        pageIndex: this.UnDelegator_pageIndex
      }).then(res => {
        this.UnDelegator_tableData = res.result.records;
        this.UnDelegator_tableData.map(items => {
          items.delegator_address_jiequ = jiequStrFn(items.delegator_address);
          items.countAounmnt = 0;
          items.maxTimeArr = [];
          items.entries.map(children => {
            items.countAounmnt += children.balance * 1;
            items.maxTimeArr.push(timestamp(children.completion_time));
          });
          items.maxTimeData = getUTCTimeFn(Math.max(...items.maxTimeArr));
          //取最大值
        });
        console.log(this.UnDelegator_tableData);
        this.UnDelegator_total = res.result.total;
      });
    },
    UnDelegatorcurrpageChangeFn(val) {
      this.UnDelegator_pageIndex = val;
      this.getUnDelegatorByOperatorAddressFn();
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #5841ac;color: #fff;font-weight: 500;";
      }
    }
  },
  components: { Pagination }
};
</script>

<style scoped lang="less">
.c-section {
  display: flex;
  .left,
  .right {
    width: 50%;
  }
  .left {
    margin-right: 10px;
  }
  .right {
    margin-left: 10px;
  }
  .tables {
    border: 1px solid #eaebec;
    box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
    border-radius: 5px;
  }
  .buttons {
    width: 96%;
    height: 34px;
    background: #eceefd;
    border-radius: 5px;
    color: #592ec3;
    margin: 20px 2%;
  }
}
</style>