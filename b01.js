var x = 10;
function demtong(x) {
    var dem = 0;
    for (var i = 1; i <=x; i++) {
        dem = dem + i;
    }
    return dem;
}
console.log(demtong(x))