const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      result.value = "";
    } 
    else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      result.value = currentInput;
    } 
    else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        result.value = currentInput;
      } catch {
        result.value = "Error";
        currentInput = "";
      }
    } 
    else {
      currentInput += value;
      result.value = currentInput;
    }
  });
});