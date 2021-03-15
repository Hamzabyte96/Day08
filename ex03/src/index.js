var MyGlobalVariable = 10;
function function1() {
  notGlobalVariable = 5;
  console.log(notGlobalVariable);
}

function function2() {
  MyGlobalVariable;
  console.log(MyGlobalVariable);
}

function1();
function2();

module.exports = {
  function1,
  function2,
};
