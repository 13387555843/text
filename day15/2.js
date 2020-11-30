var num=10;//==>60==>65
var obj={num:20};//==>obj={num:30}
obj.fn=(function (num) {
    //num=20 私有==>21==>22==>23
    //window.num=20*30=60
    this.num=num*3;
    num++;//
    return function (n) {
        //私有：n=5==>10
        //window.num+=n 60+5=65
        //obj.num+=10

        this.num+=n;//20+10=30
        num++;//
        console.log(num);//22 23
    }
})(obj.num)//20
var fn=obj.fn;
fn(5);//22
obj.fn(10);//23
console.log(num,obj.num);//(65,30)
