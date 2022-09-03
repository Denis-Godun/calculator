const userInput = document.querySelector("#user_input");
let expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
};

equal = () => {
  userInput.value = eval(expression);
  expression = "";
};
 erace = () => {
    expression = ""
    userInput.value = expression;
 }