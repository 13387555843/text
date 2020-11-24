
/*
无论是++i，最终的i值都是加了1
var b=++i；加号在前，先自身累加，然后再赋值给b就是3
var b=i++;加号在后，先赋值，（b就是2）再自身累加
*/
var i=2
var b=i++
var b=++i
console.log(i);