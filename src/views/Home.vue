<template>
  <div class="home">
      {{$t("lang.home")}}
      <button @click="onclickFn">切换语言</button>
    <HelloWorld msg="datas"/>
  </div>
</template>

<script>
import moduleName from '@/i18n/common/lang_en';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: {
    datas: {"key": "value"}
  },
  mounted () {
      console.log(this.$i18n.locale) 
  },
  methods: {
      onclickFn () {
        if(localStorage.lang == "zh"){
          localStorage.setItem("lang","en");
        }else{
          localStorage.setItem("lang","zh");
        }
        console.log("点击成功")

        console.log(localStorage.lang)
      }
  },
  components: {
    HelloWorld
  }
}
</script>
