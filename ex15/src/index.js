function convertToInt(str) {
    var str = parseInt(str, 16);
    console.log(str);
    return parseInt(str, 16);
}

convertToInt("BA");
convertToInt("BA");
convertToInt("F1");
convertToInt("JeffBezos");
module.exports = convertToInt;