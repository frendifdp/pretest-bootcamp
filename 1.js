function simplemath(){
    var uang = 50000;
    var harga = 2500;
    
    var hasil = uang / harga;
    var bonus = hasil / 4;
    
    var total = hasil + bonus;
    
    return total;
}
    
console.log('1. '+simplemath())