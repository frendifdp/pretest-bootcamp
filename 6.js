function binner(a){
    var b = '';
    while(a>0){
        b = a%2+' '+b;
        a = a/2;
        a = Math.floor(a);
    }
    console.log('6. '+b);
}

binner(100);