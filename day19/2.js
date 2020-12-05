var res=[{age:10},{age:5},{age:20}]
res.sort(function (a,b) {
    //a,b为一个个
    return    a.age-b.age
})
console.log(res);

