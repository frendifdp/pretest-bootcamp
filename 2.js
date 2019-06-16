function primer(a){
    var c = 0;
    var pri = new Array;
    var id = 0;
    for(i=2;i<a;i++){
        for(j=2;j<a;j++){
            if(i % j == 0){
                c = c + 1;
            }
        }
        if(c == 1){
            pri[id] = i;
            id = id+1;
        }
        c = 0;
    }
    return pri;
}

function segitiga(a){
    var pri = new Array;
    pri = primer(a*a)
    console.log('2. ')
    var out = '';
    for(i=0;i<a;i++){
        for(j=0;j<=i;j++){
            var bil = a * a;
            out = out+' '+pri[j];
        }
        console.log(out)
        out = '';
    }
}
segitiga(5)