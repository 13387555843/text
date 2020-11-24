// var res=0
// for (var i = 0; i <101; i++) {
//    res=res+i;
  
    
// }
// console.log(res);

function fn(num) {
    if (num>100) {
       return 0; 
    }
    if (num%6 ==0) {
        return num+fn(num+1);
    }
   return  fn(num+1);
}
fn(1); 
console.log(fn(1));
//
res=0;
for (var i = 0; i < 101; i++) {
    if (i%6==0) {
        
        res=res+i
    }
    
}
 console.log(res);
 var str = "10:20:30";
var res = str.split(":");
 console.log(res)

 
    var str="2019-8-18 12:32:18";
    function zero(num){
        return num<10?"0"+num:num;
    }
    var ary=str.split(" ");
     var leftary=ary[0].split("-");
     var rightary=ary[1].split(":");
     var res=zero(leftary[0])+"年"+zero(leftary[1])+"月"+zero(leftary[2])+"日"+zero(rightary[0])+"时"+zero(rightary[1])+"分"+zero(rightary[2])+"秒";
     console.log(res);
var str = "http://www.baidu.com?name=zhufeng&age=10&id=14";
function getParms(str) {
    var obj = {};
    //"name=zhufeng&age=10&id=14"
    var strParms = str.split("?")[1];//["http://www.baidu.com","name=zhufeng&age=10&id=14"]
    var strAry = strParms.split("&");//["name=zhufeng","age=10","id=14"]
    for (var i = 0; i < strAry.length; i++) {
        var item = strAry[i];//"name=zhufeng"
        var key = item.split("=");//["name","zhufeng"]
        obj[key[0]] = key[1];
    }
    return obj;
}

var res = getParms(str);
console.log(res);