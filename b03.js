var x = 10;
function demTongBieuThuc(x) {
    var dem = 0;
    for (var i = 1; i <= x; i++) {
        dem = dem + (1/i);
    }
    return dem;
}
console.log(demTongBieuThuc(x))