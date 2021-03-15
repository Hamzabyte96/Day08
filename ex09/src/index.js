function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        a > b
        return false;
    }
    
}

console.log(isLess(10, 15));
console.log(isLess(15, 10));

module.exports = isLess;