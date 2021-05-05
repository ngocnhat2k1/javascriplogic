var x = 3;
debugger;
function giaiThua(x) {
    dem=0;
    if (x == 1)
        return 1;
    return x * giaiThua(x - 1);
}
console.log(giaiThua(x))