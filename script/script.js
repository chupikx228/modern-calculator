let display = document.querySelector(".calculator__display");

let buttons = Array.from(document.querySelectorAll(".calculator__key"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.textContent) {
            case "AC":
                display.textContent = "0";
                break;
            case "=":
                try{
                    display.textContent = eval(display.textContent);
                } catch (e) {
                    display.textContent = "error";
                }
                break;

            case "%":
                let passedText = display.textContent + "/100";
                display.textContent = eval(passedText);
                break;

            case "+/-":
                   if (display.textContent.startsWith("-")) {
                       display.textContent= display.textContent.slice(1);
                   } else {
                       display.textContent = "-" + display.textContent;
                    }
                break;
            default:
                if(display.textContent === "0" && e.target.textContent !== ".") {
                    display.textContent = e.target.textContent;
                } else {
                    display.textContent += e.target.textContent;
                }
        }
    });
});