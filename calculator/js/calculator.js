
    let math;
    let operator;
    let a ;
    let b ;
    let userInput;
    let otherInput;

    math = document.getElementById("math1");
    operator = document.getElementById("op1");

    function screen() {
        //note to self find a way to use input to connect userInput and otherInput
    }

    function plus(a,b) {
        return (a + b);
    }

    function minus(a,b) {
        return (a - b);

    }

    function multiply(a,b) {
        console.log();
        return (a * b);
    }

    function divide(a,b) {
        return (a / b);
    }
    switch (math) {
        case 1:
            operator = plus(a + b);
            break;
        case 2:
            operator = minus(a - b);
            break;
        case 3:
            operator = multiply(a * b);
            break;
        case 4:
            operator = divide(a / b);
            break;

        default:
            operator = "error";




    // function clearScreen() {
    // return 0
    // }

}