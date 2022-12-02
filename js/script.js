


const bottone = document.getElementById("output");


let conteggio = 0;

bottone.addEventListener("click", function(){

        
    
    
    if(conteggio < 10){
        conteggio++;
        bottone.innerHTML = `# ${conteggio}`;
        
    }else{
        bottone.classList.add("inattivo");
        setTimeout(() => {
            conteggio = 0;
            bottone.innerHTML = `# ${conteggio}`;
            bottone.classList.remove("inattivo");
        }, 2 * 1000);
    }





});


