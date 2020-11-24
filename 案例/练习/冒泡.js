var tp=[2,8,6,7,4,9];
function tre(tp) {
    for (var i = 0; i < tp.length-1; i++) {
      for (var j = 0; j < tp.length-1-i; j++) {
         if (tp[j]<tp[j+1]) {
             var rtp = tp[j];
           
             tp[j]=tp[j+1];
             tp[j+1]=rtp;

         }
          
      }
        
    }
    return tp;
}
console.log(tre(tp));