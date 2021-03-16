var sum = 0;
function addThree() {
    var sum = 3;
    console.log(sum);

}

function addFive() {
    var sum = 5
    console.log(sum);
    

} 

addThree();
addFive();

module.exports = {
    addThree,
    addFive
};