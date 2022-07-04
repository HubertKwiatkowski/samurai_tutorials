var varFun = "a";
let letFun = "b";
const constFun = "c";

function variablesInFunction() {
    var inFunction = "jestem";
    let varFun = 0;
    // var varFun = 4;
    const constFun = 6;

    function showVariable() {
        const constFun = "funkcja w funkcji";
        varFun = "nadpisuje wartość zmiennej z wyższego zakresu";
        console.log(varFun, letFun, constFun);
    }
    showVariable();
};

// variablesInFunction();




function calculate(a, b) {
    const number1 = a;
    const number2 = b;
    console.log(a);
    console.log(b);
    console.log(number1);
    console.log(number2);
    function add() {
        // number2 = 10;
        const number2 = 10;
        console.log(number1 + number2)
    };
    add();
};

calculate(2, 3);