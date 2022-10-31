const fibonacci = function(n) {
    array = [1,1];
    for (i=2;i<50;i++) {
        num=array[i-1]+array[i-2];
        array.push(num);
    }
    if (n>=0){
        return array[n-1];
    } 
    else {
        return "OOPS";
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
