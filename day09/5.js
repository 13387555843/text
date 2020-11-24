function pre(tr) {
    var iuo = tr.childNode;
    var opp=iuo.indexOf(m,0)

    var rpt = opp.previousSibling;
   
    var ary=[]
    for (var i = 0; index < opp.length; index++) {
        if (NoteType(rpt[i])==1) {
            ary.push(rpt[i])
        }
        
    }
    return  ary
}