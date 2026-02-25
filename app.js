let buttons = document.querySelectorAll(".button") ;
let input = document.querySelector("#display") ;

let expression = "" ;
let isResultShown = false ;

function calculate(value) {
    expression = eval(value) ;
    return expression ;
}

function clearDisplay() {
    expression = "" ;
    input.value = "" ;
    isResultShown = false ;
}

buttons.forEach((button) => {

    button.addEventListener("click", (event) => {

        if(!event.target.classList.contains("button")) return ;

        let num = event.target.innerText ; // other options -> let num = button.getAttribute("data-value") ;

        if(num === "=") {
            expression = calculate(expression) ;
            input.value = expression ;
            isResultShown = true ;
        } else if(num === "C") {
            clearDisplay() ;
        } else {
            if(isResultShown) {
                if(!isNaN(num)){
                    expression = "" ; // if number is pressed after result
                }
                isResultShown = false ;
            }
            expression += num ;
            input.value = expression ;
            
        }
    });
}) ;