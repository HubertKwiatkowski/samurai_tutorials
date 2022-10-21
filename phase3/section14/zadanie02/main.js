// FILTER (I PRZYPOMNIENIE MAP)


// Filter
const arr = [34,355,4324,52523,23432,423,432];

const oddNumbers = arr.filter((number) => number%2);
const evenNumbers = arr.filter((number) => !(number%2));


//Map
const double = arr.map(number => number*2);


// forEach

// arr.forEach(number => number * 2)
arr.forEach((number, index) => arr[index] = number * 2)

