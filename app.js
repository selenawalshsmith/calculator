var a = new Array();

function AddtoEquation(id)
{
  a.push(id);
}


function compute()
{
  var equation = a.join(" ");
  //check what kind of operator
  var operand = opCheck(equation);
  if (operand != "0") {
    var indexOfOp = equation.indexOf(operand);
  } else {
    console.log("You need an operator"); //change this to a window laters
  }
  s_op1 = removeSpaces(equation.substring(0,indexOfOp));
  //inner -> cuts equation up to  the operand, returning string containing operand and op2
  //remove the operand
  //remove all spaces
  s_op2 = removeSpaces((equation.substring(indexOfOp,equation.length)).substring(1));

  //convert to numbers
  op1 = Number(s_op1);
  op2 = Number(s_op2);

  switch(operand)
  {
    case "+":
      answer = op1+op2;
      break;
    case "/":
      answer = op1-op2;
      break;
    case "*":
      answer = op1*op2;
      break;
    case "/":
      answer = op1/op2;
      break;
  }
  console.log(answer);
  display(answer);
}

function display(answer)
{
  document.getElementById("answer-display").textContent = answer;
  //delete array a here.

}

function opCheck(equation) //takes a string, returns string
{
  if (search(equation, "+"))
  {
    return "+";
  }
  if (search(equation, "-"))
  {
    return "-";
  }
  if (search(equation, "/"))
  {
    return "/";
  }
  if (search(equation, "*"))
  {
    return "*";
  }
  else {
    return "0";
  }
}

function search(equation, x){ //returns index of x
  for(var i = 0; i < equation.length; i++){
    if (i = "x"){
      return true;
    }
    return console.log("cant find");
  }
}

function removeSpaces(s)
{
  x = s.replace(/\s+/g, '');
  return x;
}
