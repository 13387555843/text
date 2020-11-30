var num = 1;
var obj = {
    num: 2,
    fn: (function () {
        this.num *= 2;
        num += 3;
        var num = 1;
        return function () {
            num += 2;
            this.num += 2
            console.log(++num);
        }
    })()
};
var f = obj.fn;
f();
obj.fn();
console.log(window.num, obj.num);