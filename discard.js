
      /*
      Reading input example

      var name = window.prompt("Enter your name");
      alert("Your name is " + name);
      */

      //pass id to this function
      //create an array and put each id in the array
      //check if [0] is a number, if not then send error
      //check if [1] is a number too, if so [0] and [1] are op1
      //check if [2] is of id "plus" || "minus" || "divide", || "multiply"

      //find index of operand
      //split before
      //split after

//just make the array in this function.
var a = new Array();
//var b;

function AddtoEquation(id)
{
  a.push(id);
  //console.log(a);
}

//turn the numbers into strings
function compute(){
var equation = a.join(" ");
console.log("string 1:");
console.log(equation);
//var split = checkSign(equation);
//console.log(split);
var op = opCheck(equation);
if (op != "0") {
  var indexOfOp = equation.indexOf(op);
  console.log(op);
} else {
  console.log("You need an operator");
}

//equation.replace(","," ");
//equation.split();
}

function display(answer)
{

}

function opCheck(equation) //takes a string, returns string
{
  if ((equation.includes("+"))
  {
    return "+";
  }
  if ((equation.includes("-"))
  {
    return "-";
  }
  if ((equation.includes("/"))
  {
    return "/";
  }
  if ((equation.includes("*"))
  {
    return "*";
  }
  else {
    return "0";
  }
}
/*
function checkSign(equation){
  if (equation.includes("+"))
  {

    //equation.split("+");
    //console.log("split up:");
  } else if (equation.includes("-"))
  {
    equation.split("-");
  } else {

  }
  return equation;
}
*/
/*
function search(equation, x){ //returns index of x
  for(int i = 0; i < equation.length; i++){
    if (i = "x"){
      return i;
    }
    return console.log("cant find");
  }
}
*/
