/*


    cronometro 
    pulsante avvio parte, cliccando piu volte non aumenta la velocita
    pulsante pausa mette in pausa il cronometro
    pulsante azzera lo riporta a zero




    (tasto riprendere/ se separato o unito a pausa)
    (divisione millisecondi/secondi/minuti/ora/....)

*/





const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');


let contatore = 0;
let pausa = false;
let inizio;

start.addEventListener("click", function(){

    if(!pausa){

        
        inizio = setInterval(function(){
            
            contatore++;
            tempo.innerHTML = contatore;
    
    
    
        }, 1);

        pausa = true;

    }



})

pause.addEventListener("click", function(){


    clearInterval(inizio);

    pausa = false;


})


reset.addEventListener("click", function(){

    contatore = 0;
    tempo.innerHTML = contatore;


})