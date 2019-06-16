var arr = new Array(34,62,13,74,23,52,56,65,12,81)

function min(a){
    var i = 0;
    var tmp = a[0];
    while(i<a.length){
        if(tmp>a[i]){
            tmp = a[i];
        }
        i++;
    }
    return tmp;
}
console.log('4. a = '+min(arr));

function max(a){
    var i = 0;
    var tmp = a[0];
    while(i<a.length){
        if(tmp<a[i]){
            tmp = a[i];
        }
        i++;
    }
    return tmp;
}
console.log('4. b = '+max(arr));

function ascsort(a){
    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                var t = a[i];
                a[i] = a[j];
                a[j] = t;
            }
        }
    }
    return JSON.stringify(a)
}

console.log('4. c = '+ascsort(arr));

function descsort(a){
    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            if(a[i]<a[j]){
                var t = a[i];
                a[i] = a[j];
                a[j] = t;
            }
        }
    }
    return JSON.stringify(a)
}

console.log('4. d = '+descsort(arr));