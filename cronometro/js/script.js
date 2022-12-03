/*


    cronometro 
    pulsante avvio parte, cliccando piu volte non aumenta la velocita
    pulsante pausa mette in pausa il cronometro
    pulsante azzera lo riporta a zero




    (tasto riprendere/ se separato o unito a pausa)
    (divisione millisecondi/secondi/minuti/ora/....)

*/





const tempoMillisecondi = document.getElementById('tempoMillisecondi');
const tempoSecondi = document.getElementById('tempoSecondi');
const tempoMinuti = document.getElementById('tempoMinuti');
const tempoOre = document.getElementById('tempoOre');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');


let millisecondi = 0;
let pausa = false;
let inizio;
let secondi = 0;
let minuti = 0;
let ore = 0;




start.addEventListener("click", function(){

    if(!pausa){

        
        inizio = setInterval(function(){
            
            millisecondi = millisecondi + 4;
            tempoMillisecondi.innerHTML = "Millisecondi: " + millisecondi;
    
            if(millisecondi == 1000){
                secondi++;
                millisecondi = 0;
                tempoSecondi.innerHTML = "Secondi: " + secondi;
            }
            if(secondi == 60){
                minuti++;
                secondi = 0;
                tempoMinuti.innerHTML = "Minuti: " + minuti;
            }
            if(minuti == 60){
                ore++;
                minuti = 0;
                tempoOre.innerHTML = "Ore: " + ore;
            }


    
        },1);

        pausa = true;

    }



})

pause.addEventListener("click", function(){


    clearInterval(inizio);

    pausa = false;


})


reset.addEventListener("click", function(){

    secondi = 0;
    millisecondi = 0;
    minuti = 0;
    ore = 0;
    tempoMillisecondi.innerHTML = "Millisecondi: " + millisecondi;
    tempoSecondi.innerHTML = "Secondi: " + secondi;
    tempoMinuti.innerHTML = "Minuti: " + minuti;
    tempoOre.innerHTML = "Ore: " + ore;





})