function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 
}



function search(pharse, word){
    var total = 0;
    temp = pharse;
    while(temp.search(word) >= 0){
         total = total + 1;
         temp = temp.substring(temp.search(word)+1);
    }
    temp = reverseString(pharse);
    while(temp.search(word) >= 0){
        total = total + 1;
        temp = temp.substring(temp.search(word)+1);
    }

    return total;
}

console.log('5. '+search('banananana', 'nana'))