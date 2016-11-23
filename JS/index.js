// #1
  function bitwiseAnd(x, y)
  {
    return x & y;
  };
  
    function bitwiseOr(x, y)
  {
    return x | y;
  };
  
  function bitwiseXor(x, y)
  {
    return x ^ y;
  };
  
    function bitwiseLShift(x, y)
  {
    return x << y;
  };
  
      function bitwiseRShift(x, y)
  {
    return x >> y;
  };
// #2
  function removeSubStr(text, subStr) 
  {
    return text.split(subStr).join("");
  };
  
// #4
  function reverse(text2)
  {
    return text2.split("").reverse().join("");
  }
// #5
function sort
var numbers = ["1", "2", "3"];
numbers.sort();
document.write(numbers.sort);



// #6

function getLetterGrade(percentage)
  {
    var letterGrade = "";
    
    switch(true)
    {
      case (percentage >= 90 && percentage <= 100):
        letterGrade = "A";
        break;
      case (percentage >= 80 && percentage <= 90):
        letterGrade = "B";
        break;
      case (percentage >= 70 && percentage <= 80):
        letterGrade = "C";
        break;
      case (percentage >= 60 && percentage <= 70):
        letterGrade = "D";
        break;
      case (percentage >= 0 && percentage <= 60):
        letterGrade = "F";
        break;
    }
  
    return letterGrade;
  }