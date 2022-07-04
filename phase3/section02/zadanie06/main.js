// const showMessage = function() {
//     console.log("prosta funkcja");
// }

// showMessage();

// const showNewMessage = function(message) {
//     console.log(message);
// }

// showNewMessage("wywolana funkcja z wprowadzonym parametrem")

// function addNumbers(x, y) {
//     return x + y;
// }

// console.log(addNumbers(2, 4));

// const funckjaStrzalkowa = txt => console.log(txt);

// funckjaStrzalkowa("trolololololo");

// let number = 0
// const add = function() {
//     number++;
//     console.log(number);
// }

// const addTwoNumbers = (x,y) => {
//     const result = x+y;
//     console.log(result);
//     return result;
// }

// function count(x, callback) {
//     return callback(x)
// }

// function addOne(number) {
//     number++
//     console.log(number);
//     return number;
// }

// function subtractOne(number) {
//     number--
//     console.log(number);
//     return number;
// }

// const result1 = count(5, addOne)
// const result2 = count(result1, addOne)
// const result3 = count(result2, addOne)
// const result4 = count(result3, addOne)
// const result5 = count(result4, addOne)
// const result6 = count(result5, addOne)
// const result7 = count(result6, addOne)
// const result8 = count(result7, addOne)

// setInterval(() => console.log("minely 2 sekundy"), 2000)

function showAllArguments(...args) {
    console.log(args)
    return args
}

// showAllArguments("1", 2, 12, "ab", true, "Adam")

function addAllWords(...words) {
    let txt = "";
    for (let i=0; i < words.length; i++) {
        txt += `${words[i]}.`;
    }
    console.log(txt);
}

addAllWords("ja", "ty", 2, "Gdansk")