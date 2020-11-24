function mychildren(context) {
    // 先获取所有子节点
    var allNode=context.childNodes;
    var ary=[];
    for (var I = 0; I < allNode.length; I++) {
        if (allNode[i].noteType==1) {
            //说明就是元素
            ary.push(allNode[i]);
        }
      
        
    }
    return ary
}