
import {createI18n} from 'vue-i18n';
const i18n = createI18n({
  locale:localStorage.lang || 'en', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
      'zh':require('./common/lang_zh'), // 中文语言包
      'en':require('./common/lang_en') // 英文语言包
  },
})
export default i18n