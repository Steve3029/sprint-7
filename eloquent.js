// Minimum
function min(a, b) {
  return a > b ? b : a;
}

// Recursion
function isEven(num) {
  if (num < 0) num = -num;
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEvent(num - 2);
  }
}

//Bean counting
var countBs = function(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "B") {
      count++;
    }
  }
  return count;
};
var countChar = function(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
};