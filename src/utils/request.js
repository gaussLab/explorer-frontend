import axios from 'axios'
import { useRouter } from 'vue-router';
import router from '../router';
// const router = useRouter();
// import {ElLoading } from 'element-plus';
var HTTP = window.location.href.split(":")[0] == "https" ? "https" : "http";
var host = HTTP+"://"+location.host +"/api"; //获取主机名+端口号 例如：192.168.0.1:8080
// var host = sessionStorage.getItem("host");
// // console.log(host)
// if(host == null){
//   host = "http://192.168.2.102:8001/api/";
// }
const service = axios.create({
  // baseURL:process.env.VUE_APP_BASE_API,
  baseURL:host
})

service.interceptors.request.use(
  config => {
//     loadingInstance1 = ElLoading.service({lock: true,
// spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0)' });

    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {   
      if(res.code == -200){
        router.push("/pagesnodatae");
      }
      return Promise.reject(new Error('前端抛的错误请求接口失败'))
    } else {
      // loadingInstance1.close();
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
  
    return Promise.reject(error)
  }
)

export default service
