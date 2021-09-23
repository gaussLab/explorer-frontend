<template>
  <div class="container">
    <div v-if="recordsData.length">
      <section
        class="public-tbs-accoun-top"
        v-for="(item, key) of recordsData"
        :key="key"
      >
        <div class="s-title">Issue Asset {{ key + 1 }}</div>
        <ul>
          <li>
            <span class="accoun-t"> Token: </span>
            <div>
              {{ item.event[0].symbol }}
            </div>
          </li>
          <li>
            <span class="accoun-t">
              Initial Supply:
            </span>
            <div>
              {{ item.event[0].initial_supply }}
            </div>
          </li>
          <li>
            <span class="accoun-t">
              Total Supply:
            </span>
            <div>
              {{ item.event[0].total_supply }}
            </div>
          </li>
          <li>
            <span class="accoun-t">
              Smallest Unit
            </span>
            <div>
              {{ item.event[0].smallest_unit }}
            </div>
          </li>

          <li>
            <span class="accoun-t">
              Decimal:
            </span>
            <div>
              {{ item.event[0].decimals }}
            </div>
          </li>
        </ul>
      </section>
    </div>
    <div v-else>
      <NoDatepages></NoDatepages>
    </div>
  </div>
</template>

<script>
import { getByBlockNumber } from "@/api/deal";
import NoDatepages from "@/components/noDatepages";
export default {
  data() {
    return {
      recordsData: [{ event: [{}] }]
    };
  },
  created() {
    this.getByBlockNumberFn();
  },
  methods: {
    getByBlockNumberFn() {
      getByBlockNumber({
        address: this.$route.params.name,
        smallType: "issuetoken"
      }).then(res => {
        this.recordsData = res.result.records;
      });
    }
  },
  components: { NoDatepages }
};
</script>

<style scoped lang="less">
section {
  margin-top: 25px;
  background: #fff;
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
  padding-bottom: 20px 0px;
}
.borders-center .center-content {
  border-bottom: 3px solid #eaebec;
}
.borders-center .center-content:last-child {
  border: none;
}
</style>
