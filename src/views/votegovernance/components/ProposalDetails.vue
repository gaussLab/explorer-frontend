<template>
  <div class="container margin30">
    <header>
      <div class="s-title">Proposal Details</div>
    </header>
    <div class="content-box">
      <section>
        <div class="left">
          <ul>
            <li>
              <div class="span-t">Proposal ID:</div>
              <div>{{ ProposalByPropos.proposal_id }}</div>
            </li>
            <li>
              <div class="span-t">Proposer：</div>
              <div
                class="maodian"
                @click="$headerRouterFn(ProposalByPropos.proposer)"
              >{{$jiequStrFnmax(ProposalByPropos.proposer)}}</div>
            </li>
            <li>
              <div class="span-t">Submit Hash:</div>
              <div
                class="maodian"
                @click="$clickHshRouterFn(ProposalByPropos)"
              >{{ $jiequStrFnmax(ProposalByPropos.txhash) }}</div>
            </li>
            <li>
              <div class="span-t">Title：</div>
              <div>{{ ProposalByPropos.content.title }}</div>
            </li>
            <li>
              <div class="span-t">Proposal Type：</div>
              <div>{{ ProposalByPropos.type }}</div>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li>
              <div class="span-t">Deposit:</div>
              <div>{{ ProposalByPropos.total_deposit[0].amount / 1000000 }} GAUSS</div>
            </li>
            <li>
              <div class="span-t">Submit Time:</div>
              <div class="huise">{{ ProposalByPropos.submit_time }} UTC</div>
            </li>
            <li>
              <div class="span-t">Deposit End Time:</div>
              <div class="huise">{{ ProposalByPropos.deposit_end_time }} UTC</div>
            </li>
            <li>
              <div class="span-t">Voting Start Time:</div>
              <div class="huise">{{ ProposalByPropos.voting_start_time }} UTC</div>
            </li>
            <li>
              <div class="span-t">End Voting Time:</div>
              <div class="huise">{{ ProposalByPropos.voting_end_time }} UTC</div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <p>Description:</p>
        <div>{{ ProposalByPropos.content.description }}</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ProposalByPropos"],
  data() {
    return {
      pageIndex: 1,
      pageSize: 15,
      total: 0
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.container {
  background: #fff;
  border: 1px solid #eaebec;
  box-shadow: 0px 3px 7px 1px rgba(56, 54, 54, 0.06);
  border-radius: 5px;
}
.content-box {
  padding: 30px 50px;
}
section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    display: flex;
    flex: 1;
    width: 500px;

    border: 1px solid #eaebec;
    border-bottom: none;
  }
  .left {
    margin-right: 40px;
  }
  li {
    display: flex;
    height: 40px;
    vertical-align: middle;
    line-height: 40px;
    // padding: 0px 10px;
    border-bottom: 1px solid #eaebec;
    & div:last-child {
      width: 370px;
    }
  }
  .ul-title {
    line-height: 20px;
  }
  .span-t {
    width: 140px;
    text-indent: 10px;
  }
}
footer {
  p {
    margin: 30px 0px;
  }
  div {
    border: 1px solid #eaebec;
    color: #9196c1;
    line-height: 30px;
    padding: 17px;
  }
}
</style>
