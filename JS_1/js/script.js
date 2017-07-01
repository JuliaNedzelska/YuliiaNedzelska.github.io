var mainNum = prompt("Введите число");
var invNum = prompt("Введите степень");



alert(findDegree(mainNum, invNum));

function findDegree(a, b) {
    var result = 0;

    if ( (a == null || a == "") || (b == null || b == "") ) {
        return;
    } else if (b >= 0 ) {
        return plusDegree(a, b);
    } else if (b < 0 ) {
        var mod = Math.abs(b);
        result = minusDegree(a, mod); 
    }
    return result;
}

function plusDegree(a, b) {  
    var value = 1;
    for (var i = 0; i < b; i++) {

        if (b > 0) {
            value = value * a;
        } else if (b == 0)
            value = 1;
    }
    return value;
}

function minusDegree(a, b) {
    var value = 1;
    for (var i = 0; i < b; i++) {
        value *= a;
    }
     return 1/value;
}
