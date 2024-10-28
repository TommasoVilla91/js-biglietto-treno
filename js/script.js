//DATI
// user imput statements
const userAge = prompt("Quanti anni hai?"); //string
const userKm = prompt("Quanti chilometri dovrai percorrere?"); //string
console.log(userAge, userKm);

//number transform
const userAgeAsInt = parseInt(userAge); 
const userKmAsInt = parseInt(userKm); 
console.log(userAgeAsInt, userKmAsInt)

// tickets prices statement
const fullPrice = 0.21 * userKm // full price
console.log(`fullprice`, fullPrice)

const discount20 = (fullPrice / 100) * 20 // discount 20%
console.log(`discount20%`, discount20)

const discount40 = (fullPrice / 100) * 40 //discount 40%
console.log(`discount40%`, discount40)

//ESECUZIONE LOGICA
if (userAgeAsInt < 18) {
    const ticket20 = (fullPrice - discount20)
    console.log(`finalprice`, ticket20)
} else if (userAgeAsInt > 65) {
    const ticket40 = (fullPrice - discount40)
    console.log(`finalprice`, ticket40)
} else {
    console.log(`finalprice`, fullPrice)
}