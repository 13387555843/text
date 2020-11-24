//让不确定多少的数组，且有效的进行打印的方法
function total() {

    var res = 0;
    /*
    i=0==>的时候,
    res=0+argument[0]=0+1=1
    i=====1
    res=1(上一次计算出来的结果)+arguments[1](2)===1+2=3
    i=====2
    res=1res+arguments[2](3)===3+3=6;*/
    for (var i = 0; i < arguments.length; i++) {
        // 先把每项转为数字
        //argument收集当前组中所有的元素
        var item=Number(arguments[i]);
        //判断当前项，如果是有效数字，我再累加，此处的判断的条件可以改写成if（！isNaN）
        if (isNaN(item) == false) {
            res = res + item;
        }
    }
    return res;
}
total(1,2,3,"1","1px")
console.log(total(1, 2, 3, "1", "1px"));

