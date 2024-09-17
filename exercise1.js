function getCountNumbers() {
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"];

    let even = 0,
        odd = 0,
        zero = 0;

    for (const elem of arr) {
        if (typeof elem === 'number' && !isNaN(elem)) {
            if (elem === 0) {
                zero += 1;
            } else if (elem % 2 === 0) {
                even += 1;
            } else { 
                odd += 1;
            }
        }
    }

    console.log('Четные: ', even)
    console.log('Нечетные: ', odd)
    console.log('Нули: ', zero)
}

getCountNumbers();