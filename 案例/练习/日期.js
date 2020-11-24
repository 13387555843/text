var  str="2020-5-3 4:5:32" ;
function frt(str) {
    return str<10?"0"+str:str
}
var res=str.split(" ");
// console.log(res);
var leftres=res[0].split("-");
var rightres=res[1].split(":");
// console.log(leftres);
// console.log(rightres);
var res=frt(leftres[0])+'年'+frt(leftres[1])+"月"+frt(leftres[2])+"月"+frt(rightres[0])+"时"+frt(rightres[1])+"分"+frt(rightres[2])+"秒"
console.log(res);