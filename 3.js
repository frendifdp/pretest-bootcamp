function tree(a,b){
    var x = a; //tinggi awal
    var y = b; //setelah ... tahun

    for(i=1;i<=y;i++){
        x = x * 2 + 1;
    }

    return x;
}
console.log('3. '+tree(1, 2));