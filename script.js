let title = "New Lesson";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 150;
let rollback = 33;
let fullPrice = 150000;
let adaptive = true;

console.log('//First task//');
console.log('Тип данных title:', typeof title);
console.log('Тип данных fullPrice:', typeof fullPrice);
console.log('Тип данных adaptive:', typeof adaptive);
console.log()


console.log('//Second task//');
console.log("длину строки из переменной screens:", screens.length);


console.log('//Third task//');
const RUB = screenPrice
const USD = screenPrice / 86
const UAH = screenPrice / 1.94
const CNY = screenPrice / 12.09
console.log(`Стоимость верстки экранов: ${RUB} "рублей / ${USD.toFixed(2)} долларов / ${UAH.toFixed(2)} гривен / ${CNY.toFixed(2)} юаней`);

console.log('//Fourth task//');
console.log(screens.toLowerCase());
console.log(screens.split(","));

console.log('//Fifth task//');
const kickbackPercentage = fullPrice * (rollback / 100)
console.log("Процент отката посреднику:", kickbackPercentage, "%")
