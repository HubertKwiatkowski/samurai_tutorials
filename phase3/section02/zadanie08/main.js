let var1 = 1;
const var2 = 2;
var var3 = 3;

// {
//     let var1 = "wewnetrzne 1";
//     const var2 = "vewnetrzne 2";
//     var var3 = "wewnetrzne 3";
//     console.log(var1);
//     console.log(var2);
//     console.log(var3);
// }

const a = "1 w zakresie globalnym";
let b = "2 w zakresie globalnym";
var c = "3 w zalresoe globalnym";

// if (true) {
//     // console.log(a)
//     // a = "przypisanie do a? ale ktorego?"
//     const a = "1 w bloku";
//     console.log("a w bloku to: " + a);
//     b = "2 w bloku";
//     console.log("b w bloku to: " + b);
//     var c = "3 w bloku";
// };

// console.log("c poza blokiem to: " + c);

let i = 9;

// for (let i = 0; i < 10; i++) {
//     // let i =10;
//     // console.log(i);
//     const inFor = "wewnątrz pętli"
//     if (i < 4) {
//         i = 10;
//         console.log("i wewnątrz instrukcji warunkowej, w pętli " + i);
//     }
// }

let example1 = "globalna"

if (true) {
    let example2 = "zakres lokalny, dla którego zakresem zewnętrznym jest zakres globalny"
    console.log(example1);


    if (true) {
        let example3 = "zakres lokalny, dla którego zakresem zewnętrznym jest inny zakres lokalny"
        example1 = "nowa wartość";
        console.log(example1);
        console.log(example2);
        console.log(example3);

    }
}
