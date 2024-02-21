Calcolo del prezzo del biglietto del treno
===
Attraverso un form, il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
2. va applicato uno sconto del 20% per i minorenni
3. va applicato uno sconto del 40% per gli over 65.

Il recap dei dati e l’output del prezzo finale, andranno stampati sia in console sia in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 

## Svolgimento
1. Salvare nome e cognome inseriti in input dall'utente in una variabile
2. Salvare i km da percorrere inseriti in input dall'utente in una variabile
3. Salvare la fascia d'età selezionata dall'utente in una variabile
4. Calcolare il prezzo del biglietto moltiplicando i km indicati dall'utente e il prezzo al km
5. Verificare, sulla base dell'età indicata, se l'utente ha diritto ad uno sconto e calcolare il prezzo scontato
6. Inserire negli appositi elementi predisposti in HTML i dati indicati dall'utente
7. Al click sul pulsante "Genera", mostrare in pagina il recap dei dati e l’output del prezzo finale
8. Al click sul pulsante "Annulla", resettare la pagina