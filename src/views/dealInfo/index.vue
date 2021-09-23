<template>
  <div class="container-children-box">
    <DealInfotop :data="Tradinghash_data"></DealInfotop>

    <div v-for="(item, key) of Tradinghash_data.event" :key="key">
      <DefiDelegate v-if="item.type == 'Defi Delegate'" :data="item"></DefiDelegate>
      <WithdrawDefiDelegatorReward
        v-if="item.type == 'Withdraw Defi Delegator Reward'"
        :data="item"
      ></WithdrawDefiDelegatorReward>

      <DefiUndelegate v-if="item.type == 'Defi Undelegate'" :data="item"></DefiUndelegate>
      <SwapWithinBatch v-if="item.type == 'Swap Within Batch'" :data="item"></SwapWithinBatch>
      <DepositWithinBatch v-if="item.type == 'Deposit Within Batch'" :data="item"></DepositWithinBatch>
      <WithdrawWithinBatch v-if="item.type == 'Withdraw Within Batch'" :data="item"></WithdrawWithinBatch>
      <SetOrchestratorAddress v-if="item.type == 'Set Orchestrator Address'" :data="item"></SetOrchestratorAddress>
      <ValsetConfirm v-if="item.type == 'Valset Confirm'" :data="item"></ValsetConfirm>
      <DepositClaim v-if="item.type == 'Deposit Claim'" :data="item"></DepositClaim>
      <ValsetUpdatedClaim v-if="item.type == 'Valset Updated Claim'" :data="item"></ValsetUpdatedClaim>
      <SendToEth v-if="item.type == 'Send To Eth'" :data="item"></SendToEth>
      <ConfirmBatch v-if="item.type == 'Confirm Batch'" :data="item"></ConfirmBatch>
      <RequestBatch v-if="item.type == 'Request Batch'" :data="item"></RequestBatch>
      <WithdrawClaim v-if="item.type == 'Withdraw Claim'" :data="item"></WithdrawClaim>

      <Tradinghash
        v-if="
          item.type == 'Send' ||
            item.type == 'Withdraw Delegator Reward' ||
            item.type == 'Delegate' ||
            item.type == 'Multi Send' ||
            item.type == 'Transfer' ||
            item.type == 'Undelegate'
        "
        :data="item"
      ></Tradinghash>
      <Extracttheaddress v-if="item.type == 'Set Withdraw Address'" :data="item"></Extracttheaddress>
      <Begantoentrust v-if="item.type == 'Begin Delegate'" :data="item"></Begantoentrust>
      <ExtractValidator v-if="item.type == 'Withdraw Validator Commission'" :data="item"></ExtractValidator>
      <AccessValidator v-if="item.type == 'Unjail'" :data="item"></AccessValidator>
      <SubmitProposal v-if="item.type == 'Submit Proposal'" :data="item"></SubmitProposal>
      <Issuanceofassets v-if="item.type == 'Issue Token'" :data="item"></Issuanceofassets>
      <Distractattention v-if="item.type == 'Transfer Token Owner'" :data="item"></Distractattention>
      <Secondaryassets v-if="item.type == 'Mint Token'" :data="item"></Secondaryassets>
      <Createachain v-if="item.type == 'Create Client'" :data="item"></Createachain>
      <Dealmakers v-if="item.type == 'Agree Order Pair'" :data="item"></Dealmakers>
      <Tradecreation v-if="item.type == 'Create Pool'" :data="item"></Tradecreation>
      <Updateachain v-if="item.type == 'Update Client'" :data="item"></Updateachain>
      <ConnectionOpened v-if="item.type == 'Connection Open Confirm'" :data="item"></ConnectionOpened>
      <UpdateTimeout v-if="item.type == 'Timeout'" :data="item"></UpdateTimeout>
      <ChannelOpenInit v-if="item.type == 'Channel Open Init'" :data="item"></ChannelOpenInit>
      <ConnectionOpenInit v-if="item.type == 'Connection Open Init'" :data="item"></ConnectionOpenInit>
      <Unlocktheassets v-if="item.type == 'Unlock Token'" :data="item"></Unlocktheassets>
      <CreateValidator v-if="item.type == 'Create Validator'" :data="item"></CreateValidator>
      <UpdateValidator v-if="item.type == 'Edit Validator'" :data="item"></UpdateValidator>
      <ChannelOpenAck v-if="item.type == 'Channel Open Ack'" :data="item"></ChannelOpenAck>
      <Votetosponsor v-if="item.type == 'Deposit'" :data="item"></Votetosponsor>
      <ConnectionOpenAck v-if="item.type == 'Connection Open Ack'" :data="item"></ConnectionOpenAck>
      <RecvPacket v-if="item.type == 'Recv Packet'" :data="item"></RecvPacket>
      <ChannelOpenTry v-if="item.type == 'Channel Open Try'" :data="item"></ChannelOpenTry>
      <ConnectionOpenTry v-if="item.type == 'Connection Open Try'" :data="item"></ConnectionOpenTry>
      <DealVte v-if="item.type == 'Vote'" :data="item"></DealVte>
      <Addmoney v-if="item.type == 'Add Pledge'" :data="item"></Addmoney>
      <Tradeorder v-if="item.type == 'Place Order'" :data="item"></Tradeorder>
      <RedeemPledge v-if="item.type == 'Redeem Pledge'" :data="item"></RedeemPledge>
      <CreateDefi v-if="item.type == 'Create Defi'" :data="item"></CreateDefi>
      <BurnToken v-if="item.type == 'Burn Token'" :data="item"></BurnToken>
      <RevokeOrder v-if="item.type == 'Revoke Order'" :data="item"></RevokeOrder>
      <MintCoin v-if="item.type == 'Mint Coin'" :data="item"></MintCoin>
      <LoanCoin v-if="item.type == 'Loan Coin'" :data="item"></LoanCoin>
      <BurnCoin v-if="item.type == 'Burn Coin'" :data="item"></BurnCoin>
      <ChannelOpenConfirm v-if="item.type == 'Channel Open Confirm'" :data="item"></ChannelOpenConfirm>
      <BeginRedelegate v-if="item.type == 'Begin Redelegate'" :data="item"></BeginRedelegate>
    </div>
  </div>
</template>

<script>
import WithdrawClaim from "./components/WithdrawClaim";
import RequestBatch from "./components/RequestBatch";
import SendToEth from "./components/SendToEth";
import ChannelOpenConfirm from "./components/ChannelOpenConfirm";
import RevokeOrder from "./components/RevokeOrder";
import BeginRedelegate from "./components/BeginRedelegate";
import MintCoin from "./components/MintCoin";
import LoanCoin from "./components/LoanCoin";
import BurnCoin from "./components/BurnCoin";
import ValsetUpdatedClaim from "./components/ValsetUpdatedClaim";
import BurnToken from "./components/BurnToken";
import CreateDefi from "./components/CreateDefi";
import RedeemPledge from "./components/RedeemPledge";
import ChannelOpenTry from "./components/ChannelOpenTry";
import ConnectionOpenTry from "./components/ConnectionOpenTry";
import ChannelOpenAck from "./components/ChannelOpenAck";
import Secondaryassets from "./components/Secondaryassets";
import { getTransactionByHash } from "@/api/deal";
import { getUTCTimeFn } from "@/utils/public";
import DealInfotop from "./components/dealInfo_top";
import Tradinghash from "./components/Tradinghash";
import Extracttheaddress from "./components/Extracttheaddress";
import Begantoentrust from "./components/Begantoentrust";
import CreateValidator from "./components/CreateValidator";
import UpdateValidator from "./components/UpdateValidator";
import ExtractValidator from "./components/extractValidator";
import AccessValidator from "./components/AccessValidator";
import Votetosponsor from "./components/Votetosponsor";
import DealVte from "./components/dealVte";
import SubmitProposal from "./components/SubmitProposal";
import Issuanceofassets from "./components/Issuanceofassets";
import Unlocktheassets from "./components/Unlocktheassets";
import Distractattention from "./components/distractattention";
import Addmoney from "./components/addmoney";
import Tradeorder from "./components/Tradeorder";
import Dealmakers from "./components/dealmakers";
import Tradecreation from "./components/Tradecreation";
import Createachain from "./components/Createachain";
import Updateachain from "./components/Updateachain";
import ConnectionOpened from "./components/ConnectionOpened";
import UpdateTimeout from "./components/updateTimeout";
import ChannelOpenInit from "./components/ChannelOpenInit";
import ConnectionOpenInit from "./components/ConnectionOpenInit";
import ConnectionOpenAck from "./components/ConnectionOpenAck";
import RecvPacket from "./components/RecvPacket";
import ConfirmBatch from "./components/ConfirmBatch";
import DefiDelegate from "./components/DefiDelegate";
import WithdrawDefiDelegatorReward from "./components/WithdrawDefiDelegatorReward";
import DefiUndelegate from "./components/DefiUndelegate";
import SwapWithinBatch from "./components/SwapWithinBatch";
import DepositWithinBatch from "./components/DepositWithinBatch";
import WithdrawWithinBatch from "./components/WithdrawWithinBatch";
import SetOrchestratorAddress from "./components/SetOrchestratorAddress";
import ValsetConfirm from "./components/ValsetConfirm";
import DepositClaim from "./components/DepositClaim";

export default {
  data() {
    return {
      Tradinghash_data: {
        event: [{ commission: {}, description: {}, from: {} }]
      }
    };
  },
  created() {
    this.getTransactionByHashFn();
  },
  watch: {
    $route(from, to) {
      if (from.name == "dealInfo") {
        this.getTransactionByHashFn();
      }
    }
  },
  methods: {
    getTransactionByHashFn() {
      getTransactionByHash({ txHash: this.$route.params.name }).then(res => {
        this.Tradinghash_data = res.result;
        if (this.Tradinghash_data.time) {
          this.Tradinghash_data.time = getUTCTimeFn(this.Tradinghash_data.time);
        }
        this.Tradinghash_data.timestamp = getUTCTimeFn(
          this.Tradinghash_data.timestamp
        );
      });
    }
  },
  components: {
    RequestBatch,
    ConfirmBatch,
    SendToEth,
    DepositClaim,
    ValsetConfirm,
    SetOrchestratorAddress,
    DefiDelegate,
    BeginRedelegate,
    DefiUndelegate,
    DepositWithinBatch,
    SwapWithinBatch,
    RevokeOrder,
    BurnCoin,
    LoanCoin,
    MintCoin,
    BurnToken,
    CreateDefi,
    RedeemPledge,
    RecvPacket,
    DealInfotop,
    Tradinghash,
    Extracttheaddress,
    Begantoentrust,
    CreateValidator,
    UpdateValidator,
    ExtractValidator,
    AccessValidator,
    Votetosponsor,
    DealVte,
    SubmitProposal,
    Issuanceofassets,
    Unlocktheassets,
    Distractattention,
    Secondaryassets,
    Addmoney,
    Tradeorder,
    Dealmakers,
    Tradecreation,
    Createachain,
    Updateachain,
    ConnectionOpened,
    UpdateTimeout,
    ChannelOpenInit,
    ConnectionOpenInit,
    ChannelOpenAck,
    ConnectionOpenAck,
    ConnectionOpenTry,
    ChannelOpenTry,
    WithdrawDefiDelegatorReward
  }
};
</script>

<style scoped lang="less">
</style>
