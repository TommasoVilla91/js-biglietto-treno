//DATI
// user imput statements
const userAge = prompt("Quanti anni hai?"); //string
const userKm = prompt("Quanti chilometri dovrai percorrere?"); //string
console.log(userAge, userKm);

if (isNaN(userAge, userKm)) {
    alert("Quello che hai scritto non sono dei numeri. Per favore riscrivi bene!")
} else {
    //number transform
    const userAgeAsInt = parseInt(userAge); 
    const userKmAsInt = parseInt(userKm); 
    console.log(userAgeAsInt, userKmAsInt)

    //ESECUZIONE LOGICA
    // tickets prices statement
    const fullPrice = 0.21 * userKm // full price
    console.log(`fullPrice`, fullPrice)

    const discount20 = (fullPrice / 100) * 20 // discount 20%
    console.log(`discount20%`, discount20)

    const discount40 = (fullPrice / 100) * 40 //discount 40%
    console.log(`discount40%`, discount40)

    // OUTPUT
    if (userAgeAsInt < 18) {
        const ticket20 = (fullPrice - discount20)
        console.log(`finalPrice`, ticket20)
    } else if (userAgeAsInt > 65) {
        const ticket40 = (fullPrice - discount40)
        console.log(`finalPrice`, ticket40)
    } else {
        console.log(`finalPrice`, fullPrice)
    }
}