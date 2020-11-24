function box() {
  var ball=0;
    for (let i = 0; i < arguments.length; i++) {
    var vue = Number(arguments[i]);
    if (isNaN(vue)==false) {
        ball=ball+vue;
    }
        
    }
    return ball;
}
(2, 0)box("22.3px",3,6,"red" ,1.2);
console.log(box("22.3px", 3, 6, "red", 1.2));
function gall() {
    var pill=0;
    for (let i = 0; i < arguments.length; i++) {
      var bell = arguments[i];
      if (isNaN(Number(bell))==false) {
          pill=pill+bell;
      }
        
    }
    return pill;
}
console.log(gall(box(2,"34px","3",8)));
var ary = [1.3,5.7,2.1,4]
var res = ary.indexOf
console.log(res);
console.log(ary);
