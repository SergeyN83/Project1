'use strict';

let title
let screens
let screenPrice
let adaptive
let rollback = 10
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется ваш проект?', "Калькулятор верстки")
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные")

    screenPrice = prompt('Сколько будет стоить данная работа?')

    while (!isNumber(screenPrice)) {
        screenPrice = prompt('Сколько будет стоить данная работа?')
    }


    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }

        sum = prompt('Сколько это будет стоить?')

        while (!isNumber(sum)) {
            sum = prompt('Сколько это будет стоить?')
        }
    }

    return sum
    // return servicePrice1 + servicePrice2
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return +screenPrice + (+allServicePrices)
}

const getServicePercentPrices = function () {
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
}

const getTitle = function () {
    if (!title) return ''
    if (title.length === 0) return ''
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
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


asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

console.log("allServicePrices", allServicePrices);

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

console.log(`Стоимость верстки экранов ${screenPrice} юани и Стоимость разработки сайта ${fullPrice} юани`);