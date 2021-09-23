<template>
  <div class="container-children-box">
    <header class="public-head">
      <h3>Transaction Details</h3>
      <p>gauss1mpsycnjnsknqk8372zw064wp90m7j5vw4j9y8d</p>
    </header>
    <el-radio-group v-model="radio3">
      <el-radio-button label="Asset"></el-radio-button>
      <el-radio-button label="Lssue"></el-radio-button>
      <el-radio-button label="Deal"></el-radio-button>
    </el-radio-group>
    <section class="public-tbs-accoun-top">
      <div class="s-title">Lssue Asset 1</div>
      <ul>
        <li>
          <span class="accoun-t">Address: </span>
          <div class="lianjie">
            gaussvaloper1jp2k5zpz334shle7xp2gu68aun7cxwlah09xc8
          </div>
          <span class="copystyle"
            ><i class="el-icon-document-copy lianjie"></i
          ></span>
        </li>
        <li>
          <span class="accoun-t"> Token: </span>
          <div>GAUSS</div>
        </li>
        <li>
          <span class="accoun-t"> Total Amount: </span>
          <div>5232.02500 GAUSS</div>
        </li>
      </ul>
    </section>

    <section class="public-tbs-accoun-top">
      <div class="s-title">Lssue Asset 2</div>
      <ul>
        <li>
          <span class="accoun-t">Address: </span>
          <div class="lianjie">
            gaussvaloper1jp2k5zpz334shle7xp2gu68aun7cxwlah09xc8
          </div>
          <span class="copystyle"
            ><i class="el-icon-document-copy lianjie"></i
          ></span>
        </li>
        <li>
          <span class="accoun-t"> Token: </span>
          <div>GAUSS</div>
        </li>
        <li>
          <span class="accoun-t"> Total Amount: </span>
          <div>5232.02500 GAUSS</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio3: ""
    };
  },
  components: {}
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
</style>
