function isPrimeNumber(number) {
    if (number > 1000 || number === 0 || number === 1) {
        return 'Данные не верны!'
    }

    let flag = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            flag = false;
        }
    }

    return flag ? 'Простое число' : 'Составное число';

}

const num = +prompt('Введите число: ');

console.log(isPrimeNumber(num));