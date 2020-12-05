
function average() {
   var newAry=Array.from(arguments);
   console.log(newAry)

var ttp =newAry.sort(function (a,b) {
    return a-b
})
console.log(ttp);
 var op=   ttp.slice(1, [ttp.length-1])
 console.log(op.length);
 var ptr=0;
    for (var i = 0; i <op.length; i++) {
     ptr += op[i]
     
    }
    console.log(ptr);
    return ptr/ op.length
}
var res=average(1,2,8,10);
console.log(res);




function average(...arg) {
    var ary = arg.sort(function (a, b) { return a - b });
    ary.pop();
    ary.shift();
    var total = 0;
    for (var i = 0; i < ary.length; i++) {
        total += ary[i]
    }
    return total / ary.length
}

var res = average(1, 2, 8, 10);
console.log(res);


//--------------2)

function average(...arg) {
    var ary = arg.sort(function (a, b) { return a - b });
    ary.pop();
    ary.shift();
    //var total=0;
    // for(var i=0;i<ary.length;i++){
    //   total+=ary[i]
    // }
    return eval(ary.join("+")) / ary.length

}

var res = average(1, 2, 8, 10);
console.log(res);


//3)
//veal为求和
function average() {
    var max = Math.max(...arguments);
    var min = Math.min(...arguments);
    return (eval([...arguments].join("+")) - max - min) / (arguments.length - 2)

}

var res = average(1, 2, 8, 10);