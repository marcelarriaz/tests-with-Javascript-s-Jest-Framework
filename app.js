// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
/* console.log(sum(7,3)) */

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (usd) {
   let jpy = (usd/oneEuroIs.USD) * oneEuroIs.JPY
    return(jpy)

}
console.log(fromDollarToYen(1))

function fromEuroToDollar (euro) {
   let usd = oneEuroIs.USD * euro
    return(usd)
}
console.log(fromEuroToDollar(2))

function fromYenToPound (jpy) {
    let gbp = jpy * oneEuroIs.GBP
    return (gbp)
}
console.log(fromYenToPound(1))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };