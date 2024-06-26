// functional programming - distinction between data and functions - data can exist out 

var currencyOne = 100
var currencyTwo = 0
var exchangeRate = 1.2

function convertCurrency(amount, rate) {
    return amount*rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate)

console.log(currencyTwo)

// many functions by default return - undefined
console.log("hello")

function doubleIt(num){
    return num*2
}
console.log(doubleIt(5))
console.log(doubleIt(10).toString())

function objectMaker(val){
    return{
        prop:val
    }
}
console.log(objectMaker(20))
console.log(objectMaker(doubleIt(100)))
console.log()

function getTotal(a,b){
    return a+b
}
console.log(getTotal(10,20))

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);

// oop
var virtualPet = {
    sleepy: true,
    nap:function(){
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy)
virtualPet.nap()
console.log(virtualPet.sleepy)
