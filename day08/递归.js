//求一个1到10
function fn(num) {
    if (num>10) {
       return 
    }
    console.log(num);
    fn(num+1);//fn(2) fn(3)
}
fn(1)
//递归求和
function total(num) {
    if (num>100) {
        return 0;
    }
    return num+(num+1);
}
total(1)