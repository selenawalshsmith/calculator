function calculator(){
      try {
/*
        var op1 = window.prompt("Enter an operand");
        var operand = window.prompt("Enter an operator");
        var op2 = window.prompt("Enter an operand");
*/
        if ((typeof op1 && typeof op2) == 'number'){
          throw x;
        }
        var answer;
        switch (operand) {
          case "*":
            answer = op1*op2;
            break;
          case "+":
            answer = op1+op2;
            break;
          case "/" :
            answer = op1/op2;
            break;
          case "-":
            answer = op1 - op2;
            break;
        }

        console.log(answer);

    }
    catch (x) {
      console.log("Enter a number.");
    }
  }



  /*
    var op1 = a[0];
    if (isNaN(a[1]) == false ){
      op1.concat(a[1]);
      console.log("fluffy");
      console.log(op1);
    }
    */
