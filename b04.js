var x = 3;
var n = 3;
// debugger;
function demTongXMu(x,n) {
    var dem = 0;
    for (var i = 1; i <= n; i++) {
        dem = dem + (x**i);
    }
    return dem;
}
console.log(demTongXMu(x,n))