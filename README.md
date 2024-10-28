## DATI
* Numero chilometri
* Età passeggero
* prezzo biglietto
* sconto minorenni
* sconto over 65

## ESECUZIONE LOGICA
* chiedere ad utente età
* chiedere ad utente numero chilometri che deve percorrere
* controllare che età sia numero e non stringa
* controllare che km sia numero e non stringa

prezzo intero = 0.21€ * km da percorrere
sconto 20% = prezzo intero / 100 * 20
sconto 40% = prezzo intero / 100 * 40
prezzo sconto 20% = prezzo intero - sconto 20%
prezzo sconto 40% = prezzo intero - sconto 40%

SE età utente è MINORE di 18
    risultato è "prezzo sconto 20%"
ALTRIMENTI SE età utente è MAGGIORE di 65
    risultato è "prezzo sconto 40%"
ALTRIMENTI
    risultato è " prezzo intero"

## OUTPUT
stampo risultato