const cat = new Object();

cat.name = "Gacek";
cat['age'] = 2;
cat['eye color'] = 'red';
cat.meow = function() {
    console.log("miau miau")
}

const dog = {
    name: 'Fafik',
    age: 9,
    'eye color': 'back',
    barking: function() {
        console.log("hau hau")
    },

    // dostępne od ES6, rownoznaczne z powyższym sposobem dodania metody
    squeaking() {
        console.log('aaaa o!')
    }

}