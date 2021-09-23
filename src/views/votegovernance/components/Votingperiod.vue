<template>
  <div class="container margin30">
    <section class="borders"></section>
    <section class="select-datas-box">
      <ul class="ulclick">
        <li
          class="lis_button"
          v-for="(item, key) of lis_html"
          :key="key"
          @click="clicklis_color_selectFn(item)"
        >
          <div :class="item.color"></div>
          <span :class="`${li_index == key ? ' select' : ''}`">
            {{
            item.text
            }}
          </span>
        </li>
      </ul>
      <div>Number of votes: {{total}}</div>
    </section>
    <section class="tables-box">
      <el-table :data="tableData" border style="width: 100%" :header-cell-style="tableHeaderColor">
        <el-table-column prop="date" label="Voter" align="center">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1 || !scope.row.event[0].from">--</span>
            <div
              v-if="scope.row.event[0].moniker != null"
              class="maodian"
              @click="$userInfoRouterFn(scope.row.event[0].from)"
            >
              <img class="moniker_img" :src="scope.row.event[0].moniker.icon" />
              <span>{{ scope.row.event[0].moniker.moniker }}</span>
            </div>
            <span
              v-else
              class="maodian"
              @click="$headerRouterFn(scope.row.event[0].from)"
            >{{ scope.row.from_jiequ }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Vpte Option" align="center">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <span v-else-if="!scope.row.event[0].option">--</span>
            <span v-else>{{ scope.row.event[0].option }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Block" align="center">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <span v-else-if="!scope.row.height">--</span>
            <span
              class="maodian"
              v-else
              @click="$blockChainInfosRouterFn(scope.row.height)"
            >{{ scope.row.height }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Time" align="center">
          <template #default="scope">
            <span v-if="scope.row.event.length > 1">--</span>
            <span v-else-if="!scope.row.timestamp">--</span>
            <span v-else class="huise">{{ scope.row.timestamp_jiequ }}UTC</span>
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
import { getByBlockNumber } from "@/api/deal";
import Pagination from "@/components/Pagination";
import _ColorPicker from "element-plus/lib/el-color-picker";
import { getUTCTimeFn, jiequStrFn } from "@/utils/public";
export default {
  data() {
    props: ["final_tally_result"];
    return {
      tableData: [{ event: [{ moniker: {} }] }],
      lis_html: [
        {
          color: "color1",
          text: "Yes",
          val: "yes",
          key: 0
        },
        {
          color: "color2",
          text: "No",
          val: "no",
          key: 1
        },
        {
          color: "color3",
          text: "Abstain",
          val: "nowithveto",
          key: 2
        },
        {
          color: "color4",
          text: "NoWithVeto",
          val: "abstain",
          key: 3
        }
      ],
      pageIndex: 1,
      voteType: "yes",
      pageSize: 5,
      total: 0,
      li_index: 0
    };
  },
  mounted() {
    this.getByBlockNumberFn();
  },

  methods: {
    currpageChange(val) {
      this.pageIndex = val;
      this.getByBlockNumberFn();
    },
    clicklis_color_selectFn(item) {
      this.pageIndex = 1;
      this.li_index = item.key;
      this.voteType = item.val;
      this.getByBlockNumberFn();
    },
    getByBlockNumberFn() {
      getByBlockNumber({
        smallType: "vote",
        voteType: this.voteType,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }).then(res => {
        this.tableData = res.result.records;
        this.tableData.map(item => {
          item.timestamp_jiequ = getUTCTimeFn(item.timestamp);
          item.from_jiequ = jiequStrFn(item.event[0].from);
        });
        this.total = res.result.total;
      });
    },

    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #EAEBEC;color: #000;font-weight: 500;";
      }
    }
  },
  components: { Pagination }
};
</script>

<style scoped lang="less">
.container {
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
  padding-bottom: 30px;
}

.borders {
  border: 3px solid #eaebec;
  margin: 30px 12px;
}
.tables-box {
  padding: 0px 30px;
}

.select-datas-box {
  display: flex;
  justify-content: space-between;
  & > div {
    margin-right: 30px;
  }
  ul {
    display: flex;
    margin-left: 40px;
  }
  li {
    display: flex;
    cursor: pointer;
    margin: 0px 30px 30px 0px;
    div {
      width: 14px;
      height: 13px;
      margin-right: 10px;
    }
    .select {
      color: #5026ef;
      font-weight: bold;
    }
    .color1 {
      background: #0de3ac;
    }
    .color2 {
      background: #da1430;
    }
    .color3 {
      background: #3194f6;
    }
    .color4 {
      background: #faba1f;
    }
  }
}
</style>
