const fibonacci = function(number) {
  let a = 1, b = 0, temp;

  if (number < 0){
    return "OOPS";
  }

  while (number > 0){
    temp = a;
    a = a + b;
    b = temp;
    number --;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
