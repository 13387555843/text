
var tyr="http://www.baidu.com?name=zhufeng&age=10&id=14";
function iit(tyr) {
    
debugger;
var obj={};
var res=tyr.split("?")[1];
var tores=res.split("&");
//console.log(tores);
for (var i = 0; i < tores.length; i++) {
  var lefttores=tores[i].split("=");
    console.log(lefttores)
    obj[lefttores[0]] = lefttores[1];
    
}
return obj;
}
console.log(iit(tyr));