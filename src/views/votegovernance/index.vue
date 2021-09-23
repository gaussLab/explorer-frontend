<template>
  <div class="container-children-box">
    <header>
      <h3 class="s-b-t">Proposals</h3>
    </header>

    <div class="header-state">
      <div class="span-t">Proposal Status:</div>
      <div class="hongse">
        <span
          v-if="
                    ProposalByPropos.status == 'PROPOSAL_STATUS_VOTING_PERIOD'
                  "
          class="tx_yellow"
        >
          <img class="imgerw" src="../../assets/tpzhing.png" />Voting period
        </span>
        <span
          v-else-if="
                    ProposalByPropos.status == 'PROPOSAL_STATUS_PASSED'
                  "
          class="tx_grren"
        >
          <img class="imgerw" src="../../assets//tpsuccess.png" /> Pass
        </span>
        <span
          v-else-if="
                    ProposalByPropos.status == 'PROPOSAL_STATUS_REJECTED'
                  "
          class="hongse"
        >
          <img class="imgerw" src="../../assets/tperror.png" />Reject
        </span>
        <span v-else class="tx_pink">remove</span>
      </div>
    </div>
    <ProposalDetails :ProposalByPropos="ProposalByPropos"></ProposalDetails>
    <div>
      <header class="s-title">
        Tally Result ————
        <span
          v-if="
                    ProposalByPropos.status == 'PROPOSAL_STATUS_VOTING_PERIOD'
                  "
        >Voting period</span>
        <span
          v-else-if="
                    ProposalByPropos.status == 'PROPOSAL_STATUS_PASSED'
                  "
        >Pass</span>
        <span
          v-else-if="
                    ProposalByPropos.status == 'PROPOSAL_STATUS_REJECTED'
                  "
        >Reject</span>
        <span v-else>remove</span>
      </header>
      <section class="Progress select-datas-box">
        <!-- <p class="grenn">30.40% of online voting power has been voted.</p> -->
        <div class="total-box">
          <div class="Total-left">
            <span>Total:</span>
            <span>{{ ProposalByPropos.totalVote }}</span>
            <span>{{ ProposalByPropos.chainName }}</span>
          </div>
          <div
            v-if="ProposalByPropos.status == 'PROPOSAL_STATUS_VOTING_PERIOD'"
            class="Total-right"
          >
            <div class="total-top">
              <div class="total-top-left">
                <span>Current Turnout:</span>
                <span style="margin-left:5px">{{ ProposalByPropos.CurrentTurnout * 100 }}%</span>
              </div>
              <div>
                <span>Quorum :</span>
                <span style="margin-left:5px">
                  {{
                  ProposalByPropos.Quorum
                  }}
                </span>
              </div>
            </div>
            <div class="total-bottom">
              {{ ProposalByPropos.mTotalVote }} M of
              {{ ProposalByPropos.mBondedTokens }} M has voted
            </div>
          </div>
        </div>
        <ul>
          <li>
            <span class="span-title">Yes:</span>
            <div>
              <span class="top-title">
                {{ final_tally_result.yes }}（Threshold
                {{ ProposalByPropos.yesRate }}%）
              </span>
              <el-progress
                :text-inside="true"
                :stroke-width="15"
                :percentage="ProposalByPropos.yesRate"
                :color="color1"
              ></el-progress>
            </div>
          </li>
          <li>
            <span class="span-title">Abstain:</span>
            <div>
              <span class="top-title">
                {{ final_tally_result.abstain }}（Threshold{{
                ProposalByPropos.abstainRate
                }}%）
              </span>
              <el-progress
                :text-inside="true"
                :stroke-width="15"
                :percentage="ProposalByPropos.abstainRate"
                :color="color2"
              ></el-progress>
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <span class="span-title">No:</span>
            <div>
              <span class="top-title">
                {{ final_tally_result.no }}（Threshold
                {{ ProposalByPropos.noRate }}%）
              </span>
              <el-progress
                :text-inside="true"
                :stroke-width="15"
                :percentage="ProposalByPropos.noRate"
                :color="color3"
              ></el-progress>
            </div>
          </li>
          <li>
            <span class="span-title">NoWithVeto:</span>
            <div>
              <span class="top-title">
                {{ final_tally_result.no_with_veto }}（Threshold
                {{ ProposalByPropos.noWithVoteRate }}%）
              </span>
              <el-progress
                :text-inside="true"
                :stroke-width="15"
                :percentage="ProposalByPropos.noWithVoteRate"
                :color="color4"
              ></el-progress>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <Votingperiod></Votingperiod>
    <Votingsponsorship></Votingsponsorship>
  </div>
</template>

<script>
import ProposalDetails from "./components/ProposalDetails";
import Votingperiod from "./components/Votingperiod";
import Votingsponsorship from "./components/Votingsponsorship";
import { getProposalByProposalId } from "@/api/proposal";
import { getUTCTimeFn } from "@/utils/public";
export default {
  data() {
    return {
      color1: "#0DE3AC",
      color2: "#DA1430",
      color3: "#3194F6",
      color4: "#FABA1F",
      ProposalByPropos: {
        content: { changes: {} },
        total_deposit: [{}],
        final_tally_result: {}
      },
      final_tally_result: {}
    };
  },
  created() {
    this.getProposalByProposalIdFn();
  },
  methods: {
    getProposalByProposalIdFn() {
      getProposalByProposalId({
        proposalId: this.$route.query.proposal_id
      }).then(res => {
        this.ProposalByPropos = res.result;
        console.log(this.ProposalByPropos);
        this.final_tally_result = this.ProposalByPropos.final_tally_result;
        this.ProposalByPropos.voting_start_time = getUTCTimeFn(
          res.result.voting_start_time
        );
        this.ProposalByPropos.voting_end_time = getUTCTimeFn(
          res.result.voting_end_time
        );
        this.ProposalByPropos.deposit_end_time = getUTCTimeFn(
          res.result.deposit_end_time
        );
        this.ProposalByPropos.submit_time = getUTCTimeFn(
          res.result.submit_time
        );
        this.ProposalByPropos.abstainRate =
          this.ProposalByPropos.abstainRate * 100;
        this.ProposalByPropos.noRate = this.ProposalByPropos.noRate * 100;
        this.ProposalByPropos.yesRate = this.ProposalByPropos.yesRate * 100;
        this.ProposalByPropos.noWithVoteRate =
          this.ProposalByPropos.noWithVoteRate * 100;
      });
    }
  },
  components: { ProposalDetails, Votingperiod, Votingsponsorship }
};
</script>

<style scoped lang="less">
.header-state {
  line-height: 25px;
  display: flex;
  span {
    margin-left: 10px;
    display: inline-block;
  }
}
.imgerw {
  width: 25px;
  height: 25px;
}
.grenn {
  color: #269b02;
  line-height: 50px;
}

.Progress {
  p {
    margin-left: 30px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    li {
      display: flex;
      align-items: center;
      width: 50%;
      div {
        width: 400px;
      }
      .span-title {
        font-weight: bold;
        font-size: 14px;
        width: 120px;
        text-align: right;
        margin-right: 20px;
      }
      .top-title {
        font-size: 12px;
        display: inline-block;
        line-height: 20px;
        color: #2a2a2a;
        text-indent: 30px;
      }
    }
  }
}
.total-top-left {
  margin-right: 20px;
}
.total-box {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  margin: 0px 20px;
  font-size: 14px;
}
.total-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.total-bottom {
  color: #afa3c1;
  font-size: 12px;
}
</style>
