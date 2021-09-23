<template>
  <div class="public-minwidth">
    <div class="container-children-box">
      <header>
        <h3 class="s-b-t">
          Validator <span>List</span> <span>{{ total }}</span> Active
        </h3>
      </header>
      <section>
        <el-radio-group
          v-model="tabPosition"
          style="margin-bottom: 30px;"
          @change="tabPositionChange"
        >
          <el-radio-button label="BOND_STATUS_BONDED">Active</el-radio-button>
          <el-radio-button label="BOND_STATUS_UNBONDED"
            >Candidate</el-radio-button
          >
          <el-radio-button label="JAILED">Jailed</el-radio-button>
        </el-radio-group>
      </section>
      <section class="section-bottom">
        <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
        >
          <el-table-column
            type="index"
            width="130"
            label="#"
            align="center"
            style="margin:0px 30px"
          >
          </el-table-column>
          <el-table-column prop="date" label="Moniker">
            <template #header>
              <div class="creat-icon " @click="clickSortFn('moniker')">
                <span>
                  Moniker
                </span>
                <i v-if="sortData.moniker" class="el-icon-caret-top"></i>
                <i v-else class="el-icon-caret-bottom"></i>
              </div>
            </template>
            <template #default="scope">
              <div
                class="user-name shubiao"
                @click="$userInfoRouterFn(scope.row.operator_address)"
              >
                <div class="images" v-if="scope.row.description.moniker == ''">
                  <img :src="scope.row.icon" />
                  <span class="address-style">{{ scope.row.address }}</span>
                </div>
                <div class="images user-name" v-else>
                  <img :src="scope.row.icon" />
                  <span
                    class="address-style"
                    @click="$userInfoRouterFn(scope.row.operator_address)"
                  >
                    {{ scope.row.description.moniker }}
                  </span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Commission" align="center">
            <template #header>
              <div class="creat-icon" @click="clickSortFn('commission')">
                <span>
                  Commission
                </span>
                <i v-if="sortData.commission" class="el-icon-caret-top"></i>
                <i v-else class="el-icon-caret-bottom"></i>
              </div>
            </template>
            <template #default="scope">
              <span
                >{{
                  (scope.row.commission.commission_rates.rate * 100).toFixed(2)
                }}%</span
              >
            </template>
          </el-table-column>
          <el-table-column prop="tokens" label="Bonded-Tokens" align="center">
            <template #header>
              <div class="creat-icon" @click="clickSortFn('tokens')">
                <span>
                  Bonded-Tokens
                </span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="`${chainName}`"
                  placement="top-start"
                >
                  <i class="el-icon-question"></i>
                </el-tooltip>
                <i v-if="sortData.tokens" class="el-icon-caret-top"></i>

                <i v-else class="el-icon-caret-bottom"></i>
              </div>
            </template>
            <template #default="scope">
              <span>{{ (scope.row.tokens / 1000000).toFixed(2) }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="votingPower"
            label="Voting-Power"
            align="center"
            v-if="tabPosition == 'BOND_STATUS_BONDED'"
          >
            <template #header>
              <div class="creat-icon" @click="clickSortFn('votingPower')">
                <span>
                  Voting-Power
                </span>
                <i v-if="sortData.votingPower" class="el-icon-caret-top"></i>
                <i v-else class="el-icon-caret-bottom"></i>
              </div>
            </template>
            <template #default="scope" align="center">
              <span>{{ (scope.row.votingPower * 100).toFixed(2) }}%</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="uptime"
            label="Uptime"
            v-if="tabPosition == 'BOND_STATUS_BONDED'"
            align="center"
          >
            <template #header>
              <div class="creat-icon" @click="clickSortFn('uptime')">
                <span>
                  Uptime
                </span>
                <i v-if="sortData.uptime" class="el-icon-caret-top"></i>
                <i v-else class="el-icon-caret-bottom"></i>
              </div>
            </template>
            <template #default="scope" align="center">
              <span>{{ scope.row.uptime || 0 }}%</span>
            </template>
          </el-table-column>
          <el-table-column prop="selfDelegateAmount" width="150" align="center">
            <template #header>
              <div
                class="creat-icon"
                @click="clickSortFn('selfDelegateAmount')"
              >
                <span>
                  Self-Bonded
                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="`${chainName}`"
                    placement="top-start"
                  >
                    <i class="el-icon-question"></i>
                  </el-tooltip>
                </span>
                <i
                  v-if="sortData.selfDelegateAmount"
                  class="el-icon-caret-top"
                ></i>
                <i v-else class="el-icon-caret-bottom"></i>
              </div>
            </template>
            <template #default="scope" align="center">
              <span>{{
                parseFloat(scope.row.selfDelegateAmount).toFixed(2)
              }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="totalDelegations"
            label="Delegators"
            align="center"
            v-if="
              tabPosition == 'BOND_STATUS_UNBONDED' ||
                tabPosition == 'BOND_STATUS_BONDED'
            "
          >
            <template #header>
              <div class="creat-icon" @click="clickSortFn('totalDelegations')">
                <span>
                  Delegators
                </span>
                <i
                  v-if="sortData.totalDelegations"
                  class="el-icon-caret-top"
                ></i>
                <i v-else class="el-icon-caret-bottom"></i>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            label=""
            align="center"
            v-if="
              tabPosition == 'BOND_STATUS_UNBONDED' || tabPosition == 'JAILED'
            "
          >
            <template #header>
              <div class="creat-icon" @click="clickSortFn('unbonding_height')">
                Unboding_Height

                <i
                  v-if="sortData.unbonding_height"
                  class="el-icon-caret-top"
                ></i>
                <i v-else class="el-icon-caret-bottom"></i>
              </div>
            </template>
            <template #default="scope" align="center">
              <span>{{ scope.row.unbonding_height }}</span>
            </template>
          </el-table-column>
        </el-table>
      </section>

      <footer>
        <Pagination
          :total="total"
          :pageSize="pageSize"
          :pageIndex="pageIndex"
          @currpageChange="currpageChange"
        ></Pagination>
      </footer>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getValidatorsByStatus } from "@/api/identifier";
export default {
  data() {
    return {
      tabPosition: "BOND_STATUS_BONDED",
      tableData: [],
      pageIndex: 1,
      pageSize: 100,
      total: 0,
      sortMethod: 1,
      chainName: "",
      pramsName: "tokens",
      sortData: {
        moniker: true,
        commission: true,
        tokens: true,
        votingPower: true,
        uptime: true,
        selfDelegateAmount: true,
        totalDelegations: true,
        unbonding_height: true
      }
    };
  },
  created() {
    this.httpgetValidatorsByStatusFn();
  },

  methods: {
    clickSortFn(caqnbool) {
      this.sortData[caqnbool] = !this.sortData[caqnbool];
      this.headerSwitchFn(caqnbool);
    },
    currpageChange(pageIndex) {
      this.pageIndex = pageIndex;
      this.httpgetValidatorsByStatusFn();
    },
    headerSwitchFn(caqnbool) {
      switch (caqnbool) {
        case "moniker":
          this.pramsName = "description.moniker";
          break;
        case "commission":
          this.pramsName = "commission.commission_rates.rate";
          break;
        case "tokens":
          this.pramsName = "tokens";
          break;
        case "votingPower":
          this.pramsName = "votingPower";
          break;
        case "uptime":
          this.pramsName = "uptime";
          break;
        case "selfDelegateAmount":
          this.pramsName = "selfDelegateAmount";
          break;
        case "unbonding_height":
          this.pramsName = "unbonding_height";
          break;
        default:
          this.pramsName = "totalDelegations";
          break;
      }

      this.sortMethod = this.sortData[caqnbool] ? 1 : 0;
      this.httpgetValidatorsByStatusFn();
    },
    tabPositionChange(val) {
      this.pramsName = "tokens";
      this.sortData = {
        moniker: true,
        commission: true,
        tokens: true,
        votingPower: true,
        uptime: true,
        selfDelegateAmount: true,
        totalDelegations: true
      };
      this.httpgetValidatorsByStatusFn();
    },
    httpgetValidatorsByStatusFn() {
      getValidatorsByStatus({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        pramsName: this.pramsName,
        sortMethod: this.sortMethod,
        status: this.tabPosition
      }).then(res => {
        this.tableData = res.result.records;
        this.total = res.result.total;
        this.chainName = res.result.chainName.toUpperCase();
        this.$scrollHeightFn();
      });
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
header span {
  display: inline-block;
  margin: 0px 5px;
}
.images {
  // border: 1px solid #000;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }
  span {
    position: relative;
    top: -3px;
  }
}
.miyao-style {
  display: inline-block;
  width: 210px;
  height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
.address-style {
  display: inline-block;
  width: 150px;
  height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.user-name {
  display: flex;
  align-items: center;
  line-height: 30px;

  span {
    color: #5b1cf6;
    cursor: pointer;
  }
}
.creat-icon {
  // display: flex;
  display: inline-block;
  cursor: pointer;
  margin-left: 3px;
  .icon-topbottom {
    margin-left: 3px;
    div {
      position: absolute;
    }
  }
}
</style>
