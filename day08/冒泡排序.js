var ary=[8,2,1,5];
/*
需求：排序（升序）
第一轮：
[2,1,5,8] 经过第一轮比较，得到了第一个最大数8；
第二轮：
[1,2,5,8]经过第二轮比较，得到了第二个最大数：5；
第三轮：
[1,2,5,8]经过第三轮比较，得到了第三个最大数2；
第四轮还用比较么，总共有四个数，已经得到了3个最大数，所以最后一个肯定是最小的
轮数的规律：ary.length-1;
第一次：[2,1,5,8];正常的比较的时候：俩俩比较：ary.length-1-0;(3)
第二次[2,1,5,8]; ary.length-1-1;
第三次[1，2,5,8]; ary.length-1-2
 
轮数的规律：ary.length-1;
俩俩比较的规律：ary.length-1-已经比过的轮数
*/
var ary=[8,2,1,5];
function mySort() {
    for (var i = 0; i < ary.length-1; i++) {
      for (var j = 0; j < ary.length-1-i; j++) {
        if (ary[j]>ary[j+1]) {
            var temp=ary[j];
            ary[j]=ary[j+1];
            ary[j+1]=temp;
        }
          
      }
        
    }
    return ary;
}
var res=mySort(ary);
console.log(res);