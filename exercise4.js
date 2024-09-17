function printNumbers(x, y) {
    let currentNumber = x;

    const interval = setInterval(() => {
        console.log(currentNumber);
        if (currentNumber === y) {
            clearInterval(interval);
        }
        currentNumber++;
    }, 1000);
}

printNumbers(5, 15);