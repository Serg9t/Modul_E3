function firstFunction(x) {
    return function(y) {
        return x + y;
    }
}

const innerFunction = firstFunction(7);
const result = innerFunction(3);

console.log(result);