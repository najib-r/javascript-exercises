const palindromes = function (string) {
    const withoutCommas = string.toLowerCase().replace(/[^a-z]/g, '');
    var splitString = withoutCommas.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray === withoutCommas;
};

// Do not edit below this line
module.exports = palindromes;
