export function getUTCTimeFn (times) {
        var now = new Date(times) 
        var year=now.getUTCFullYear();  //取得4位数的年份
        var month=now.getUTCMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
        var date=now.getUTCDate();      //返回日期月份中的天数（1到31）
        var hour=now.getUTCHours();     //返回日期中的小时数（0到23）
        var minute=now.getUTCMinutes(); //返回日期中的分钟数（0到59）
        var second=now.getUTCSeconds(); //返回日期中的秒数（0到59）
        if(month < 10){
              month = "0"+month;
        }
        if(date < 10){
              date = "0"+date;
        }
        if(hour < 10){
            hour = "0"+hour;
      }
      if(minute < 10){
            minute = "0"+minute;
      }
      if(second < 10){
            second = "0"+second;
      }
        return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
 } 
 export function TimeremainingFn (times) {
      var dangqianTime = new Date(getUTCTimeFn(new Date())).getTime();
      var nowTime= new Date(getUTCTimeFn(times)).getTime()
      var end_Times =(dangqianTime - nowTime);
      var date = Math.floor(end_Times / (1000 * 60 * 60 * 24));
      var hours = Math.floor(( end_Times / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor(( end_Times / (1000 * 60)) % 60);
      var seconds = Math.floor(( end_Times / 1000) % 60);
      var milliseconds = Math.floor(end_Times % 1000);
            if(date != 0){
            return date +"day";
            }
            if(hours != 0){
                  return hours +"H";
            }
            if(minutes != 0){
                  return minutes +"M";
            }
            if(seconds != 0){
                  return seconds +"S";
            }
            if(milliseconds != 0){
                  return hours +"N";
            }
 
 }
 
 export function getDateFn (times) {
      var now = new Date(times) 
      var year=now.getFullYear();  //取得4位数的年份
      var month=now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
      var date=now.getDate();      //返回日期月份中的天数（1到31）
      var hour=now.getHours();     //返回日期中的小时数（0到23）
      var minute=now.getMinutes(); //返回日期中的分钟数（0到59）
      var second=now.getSeconds(); //返回日期中的秒数（0到59）
      if(month < 10){
            month = "0"+month;
      }
      if(date < 10){
            date = "0"+date;
      }

      return year+"-"+month+"-"+date; 
}
 export function jiequStrFn (str) {  
       if(str){
            var start_str = str.slice(0,7);
            var end_str = str.substr(str.length-7,7);
            return start_str +"......" +end_str;
       }else{
             return "NULL"
       }
       
 }
 export function jiequStrFnmax (str) {  
      if(str){
           var start_str = str.slice(0,12);
           var end_str = str.substr(str.length-12,12);
           return start_str +"......" +end_str;
      }else{
            return "NULL"
      }
      
}
 export function timestamp (data) {
       var times = new Date(data).getTime();
       return times
 }

 export function TimeRemaining (data) {
      var times = (new Date().getTime() - new Date(data).getTime()) / 1000;
      return times;
 }
 export function userInfoRouterFn(operatorAddress) {
      this.$router.push({
              path: "/Validatorinfo/"+operatorAddress      
            });
 }
export function blockChainInfosRouterFn (name) {
      this.$router.push({ path: "/blockchainInfo/"+name});  
}
export function clickHshRouterFn (datas) {
      this.$router.push({ path: "/dealInfo/"+datas.txhash  });
}
export function  headerRouterFn(addr,refresh) {
      var reg = /cosmosvaloper[[a-z0-9]+$/; 
      var regs = /gaussvaloper[[a-z0-9]+$/;
      var regs_usdg = /usdgvaloper[[a-z0-9]+$/;
      var regs_igpc = /igpcvaloper[[a-z0-9]+$/;
      var regs_fec = /fecvaloper[[a-z0-9]+$/;
      var pathName = "";
      if(!refresh){      
            sessionStorage.setItem(addr,null);
         }

      if (reg.test(addr) || regs.test(addr) || regs_usdg.test(addr) || regs_igpc.test(addr) || regs_fec.test(addr) ) {
            pathName = "/Validatorinfo/"
      } else {
            pathName = "/Accountbalance/"
      }
      this.$router.push({
            path:pathName+addr
      })

      
    }


export function copyFn(copy_id) {
      var e = document.getElementById(copy_id);
      e.select();
      document.execCommand("Copy");
      this.$message({
        showClose: true,
        message: "Copied！",
        type: "success"
      });
    }

export function scrollHeightFn() {
      // setTimeout(() => {
      //   var box_cocent = document.getElementById("box-cocent");
      //   var footer = document.getElementById("footer");
      //   console.log(document.body.scrollHeight)
      //   console.log(document.body.scrollHeight)
      //   if(document.body.scrollHeight > box_cocent.offsetHeight){
      //       footer.style.top = document.body.scrollHeight - 50 + "px";
      //   }else{
      //         console.log("大于")
      //       footer.style.top =  box_cocent.offsetHeight + 50 + "px";
      //   }   
      // })
    }