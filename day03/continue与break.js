// continue：结束本次循环，进行下一轮循环；
//   break：强制终止本次循环
for(var i=0;i<5;i++){
    if (i<5) {
        i++;//
        continue;
        
    }
    if(i>7){
        i+=2;
        break;
    }
    i+=1
}
console.log(i);

for(var i = 1; i <= 10; i += 2) {
    if (i <= 5) {
        i++;//
        continue;
    } else {
        i -= 2;
        break;
    }
    i--;
    console.log(i);

}
console.log(i)//==>5