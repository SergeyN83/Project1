'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 10;


const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10 %'
    } else if
        (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена'
    } else if ((price < 0)) {
        return 'Что то пошло не так'
    }
}

const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2
}

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
}

const fullPrice = getFullPrice(screenPrice, allServicePrices)

function getTitle(str) {
    if (!str) return ''
    if (str.length === 0) return ''
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getServicePercentPrices() {
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
}

const servicePercentPrice = getServicePercentPrices(fullPrice)


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);