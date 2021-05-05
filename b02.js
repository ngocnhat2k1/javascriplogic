var x = 10;
function demTongBinhPhuong(x) {
    var dem = 0;
    for (var i = 1; i <= x; i++) {
        dem = dem + (i*i);
    }
    return dem;
}
console.log(demTongBinhPhuong(x))