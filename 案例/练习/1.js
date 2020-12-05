var ttp=[3,2,5,9,8,];
function lp(ttp) {
for (var i = 0; i < ttp.length; i++) {
   for (var j = i+1; j < ttp.length-1; j++) {
       if (ttp[j]<ttp[j+1]) {
           var res=ttp[j];
           ttp[j]=ttp[j+1];
           ttp[j+1]=res;
       }
     
   }
} 
    return ttp
}
var res=lp(ttp)
console.log(res);