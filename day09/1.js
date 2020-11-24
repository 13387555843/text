
//索引0-61
function ftr() {
    var str = "qwertyuiopsdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    var resStr="";
    var index=Math.round(Math.random()*61);
    for (var i = 0; i < 4; i++) {
        if (resStr.indexOf(str[index])>-1) {
            i--;
            continue;
        }
        resStr+=str[index];
    }
   return resStr;
  
}
ftr();