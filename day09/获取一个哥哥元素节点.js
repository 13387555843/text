var main=document.getElementById("main");
var p2=document.getElementById("p2");

function mypreSibling(ele) {
    var pre=ele.previousSibling;
    while (pre&&pre.nodeType!==1) {
        // pre存在，且不是标签元素
        pre=pre.previousSibling;
        
    }
    return pre;
    
}
var res=mypreSibling(p2);
var res=mypreSibling(p1);