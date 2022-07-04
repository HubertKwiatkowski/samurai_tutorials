for (let i = 0; i < 10; i++) {
    console.log("wyświetlenie " + i);
}

let number = 0
while (number < 1000) {
    number++;
    console.log(number)
}

console.log(`co by tu wstawic? ${number}`)
console.log("co by tu wstawic? ${number}")

let gasoline = 40;
let km = 0;

while (gasoline--) {
    km += 18;
    if (gasoline >= 0) {
        console.log(`Przejechalismy ${km} kilometrów. Zostało jeszcze ${gasoline} litrów benzyny.`);
    };
}

