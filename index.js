let counterEl = document.getElementById("counter");
let count=0;

function onCheckDec (){
    
    count = count - 1;

    counterEl.textContent = count;
   
    if ( count === 0){ 

        counterEl.style.color ="black";

    }
    else if( count < 0){

        counterEl.style.color ="red";
    
    }
    else{
        
        counterEl.style.color ="green";

    }
    
}

function    onCheckInc (){
    
    count = count + 1;

    counterEl.textContent = count;

    if ( count === 0){

        counterEl.style.color ="black";

    }
    else if( count > 0){
   
        counterEl.style.color ="green";
   
    }
    else{

        counterEl.style.color ="red";

    }

}
