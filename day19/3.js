button.onclick=function () {
    var res=0
    for (var i = 0; i < arguments.length; i++) {
        var ttp=Number(arguments[i])
       res+=ttp
        
    }
if (res%2) {
    var res = lis.sort(function (a, b) {
        return a.li - b
    })
}else{
  res=  res.reverse
}

return res
}