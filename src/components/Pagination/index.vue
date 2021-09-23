<template>
  <div class="container">
    <div class="pages-zujian">
      <button
        type="button"
        class="frist shubiao"
        @click="handleSizeChange('frist')"
      >
        First
      </button>
      <button type="button" class="left_button noclick">
        <i
          class="el-icon-arrow-left shubiao"
          @click="handleSizeChange('subtract')"
        ></i>
      </button>
      <div class="center-text">
        <span>Page</span>
        <span>{{ pageIndex }}</span>
        <span>of</span>
        <span>{{ Math.ceil(total / pageSize) }}</span>
      </div>
      <button type="button">
        <i
          class="right_button el-icon-arrow-right shubiao"
          @click="handleSizeChange('add')"
        ></i>
      </button>

      <button
        type="button"
        class="last shubiao"
        @click="handleSizeChange('last')"
      >
        Last
      </button>
    </div>
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      :current-page="pageIndex"
      @current-change="handleSizeChange"
    >
    </el-pagination> -->
  </div>
</template>

<script>
export default {
  props: ["pageIndex", "pageSize", "total"], // pageIndex 当前页  pageSize每页多少条 total总条数
  data() {
    return {
      pages_size_num: 1,
      maxPage: undefined
    };
  },
  created() {
    var left_button = document.getElementsByClassName("left_button")[0];
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      var left_button = document.getElementsByClassName("left_button")[0];
      var right_button = document.getElementsByClassName("right_button")[0];
      console.log(right_button);
      switch (val) {
        case "frist":
          this.pages_size_num = 1;
          break;
        case "add":
          this.pages_size_num++;
          console.log(
            this.pages_size_num == Math.ceil(this.total / this.pageSize)
          );
          if (this.pages_size_num == Math.ceil(this.total / this.pageSize)) {
            // right_button.classList.add("noclick");
          }
          if (this.pages_size_num >= Math.ceil(this.total / this.pageSize)) {
            this.pages_size_num = Math.ceil(this.total / this.pageSize);
          } else {
            console.log("执行了");
            // left_button.classList.remove("noclick");
            // right_button.classList.remove("noclick");
          }
          break;
        case "subtract":
          this.pages_size_num--;
          if (this.pages_size_num == 1) {
            // left_button.classList.add("noclick");
          }
          if (this.pages_size_num <= 1) {
            this.pages_size_num = 1;
          } else {
            // left_button.classList.remove("noclick");
            // right_button.classList.remove("noclick");
          }
          break;
        case "last":
          this.pages_size_num = Math.ceil(this.total / this.pageSize);
          break;
      }
      console.log(this.pages_size_num);

      this.$emit("currpageChange", this.pages_size_num);
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  text-align: right;
  padding: 30px 0px;
  color: #2a2a2a;
}
.pages-zujian {
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  button,
  div {
    padding: 8px 10px;
    background: #e5defc;
    margin-left: 13px;
    border-radius: 5px;
  }
  .center-text {
    span {
      margin-right: 7px;
    }
  }
  .frist,
  .last:hover {
    color: #2a2a2a;
  }
  .slect_color {
    color: #c4b4fa;
  }

  .noclick {
    // color: #a8a5a5;
    // pointer-events: none;
    // cursor: default;
    // opacity: 0.6;
  }
}
</style>
