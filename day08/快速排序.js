var fhsd = [2, 3, 56, 6, 8, 9];
function pre(fhsd) {
    if (fhsd.length <= 1) {
        return fhsd;

    }

    var centerIndex = Math.floor(fhsd.length / 2);
    var centervalue = fhsd.splice(centerIndex, 1)[0];
    var leftary = [], rightary = [];
    for (var i = 0; i < fhsd.length; i++) {
        if (fhsd[i] < centervalue) {
            leftary.push(fhsd[i]);
        } else {
            rightary.push(fhsd[i]);
        }
    }
    return pre(leftary).concat(centervalue).concat (rightary);


}


console.log(pre(fhsd)); 