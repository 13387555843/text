function Fn(num) {
    this.x = this.y = num;
}
Fn.prototype = {
    x: 20,
    sum: function () {
        console.log(this.x + this.y);
    }
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum);//true
f.sum();//20
Fn.prototype.sum();//NaN
console.log(f.constructor);//[function:object]












  Array.prototype.MyPush=function () {
      for (let i = 0; i < arguments.length; i++) {
         this[this.length] = arguments[i];
          
      }
      return this.length
  }
  function Fn() {
      var a =3
  }