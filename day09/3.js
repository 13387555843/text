function getcode() {
    var str = "qwertyuiopsdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    var resStr="";
    while(resStr.length<4){
        var index=Math.round(Math.random()*61)
        if (resStr.indexOf[index]==-1) {
            resStr=resStr+str[index];
        }
    }
    return resStr
}
console.log (getcode());