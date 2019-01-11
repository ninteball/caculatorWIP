
    let math;
    let operator;
    let a = 3 ;
    let b = 2 ; //gave numbers to a and b because i am trying to find a way so it won't return null error in html
    let userInput;
    let otherInput;
    //let result = +document.getElementById("math1").value;

    //math = document.getElementById("math1").value = a && b;
    operator = document.getElementById("op1").value = a && b;

    console.log(operator);
    //$('#math1').val();

    // $('#op1').val();
    // $('.operator').click(function(){
    //    plus();
    //    divide();
    //    multiply();
    //    minus()
    //
    // });

    function screen() {
        //note to self find a way to use input to connect userInput and otherInput
    }

    function plus(a,b) {
        $('#op1').val();
        $('.operator').click(function(){

        return (a + b);
    });

    function minus(a,b) {
        $('#op1').val();
        $('.operator').click(function(){
        return (a - b);

        });

    function multiply(a,b) {
        $('#op1').val();
        $('.operator').click(function(){
        return (a * b);
        });

    function divide(a,b) {
        $('#op1').val();
        $('.operator').click(function(){
        return (a / b);
        });
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
    }