var sum = 0;
function addThree() {
    sum = sum + 3;

}

function addFive() {
    sum = sum + 5;

} 

addThree(3);
addFive(5);

module.exports = {
    addThree,
    addFive
};