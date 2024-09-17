// способ 1-й
const pow = (x, n) => x ** n;

console.log(pow(2, 4));


// способ 2-й
const powFunc = (x, n) => {
    let res = x;

    for (let i = 1; i < n; i++) {
        res *= x;
    }

    return res;
}

console.log(powFunc(3, 6));