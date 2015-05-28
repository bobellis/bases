function changeBase(integer, base){
  var dividend = integer;
  var divisor = base;
  var quotient = Math.floor(dividend/divisor);
  var remainders = [dividend % divisor];

  while( quotient > 0 ){
    remainders.unshift(quotient % divisor);
    quotient = Math.floor(quotient/divisor);
  }
  return remainders.join("")
}

function toBaseTen(string, base){
  var length = string.length;
  var reverseString = string.split("").reverse().join("");
  var baseTen = 0;
  for(var i = 0; i <= length - 1 ; i++ ){
    baseTen = baseTen + (parseInt(reverseString.charAt(i)) * (Math.pow(base,i)));
  }
  return baseTen;
}
