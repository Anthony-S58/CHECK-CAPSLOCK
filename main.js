document.getElementById("input").addEventListener("keyup",
function(event) {
 //votre code ici

 let message = document.getElementById('warning');
 let active = event.getModifierState('CapsLock');
 
    // if(event.keyCode == 20){
    //     message.setAttribute("style", "display:block");
    // }else {
    //     message.setAttribute("style", "display:none");
    // }

    if (active) {
        message.setAttribute("style", "display:block");

    }
    else {
        message.setAttribute("style", "display:none");
    }

});

document.getElementById("input").addEventListener("keyup",
function(event) {

    let num = event.getModifierState('NumLock');
    let message2 = document.getElementById('warning2');

    if (num) {
        message2.setAttribute("style", "display:none");
    }
    else {
        message2.setAttribute("style", "display:block");       
    }
});

document.getElementById("input").addEventListener("keyup",
function(event) {

    let message = document.getElementById('warning');
    let message2 = document.getElementById('warning2');
    let message3 = document.getElementById('warning3');
    let active = event.getModifierState('CapsLock');
    let num = event.getModifierState('NumLock');


    if (num==false && active==true) {
        message3.setAttribute("style", "display:block");
        message.setAttribute("style", "display:none");
        message2.setAttribute("style", "display:none");   
    }
    else {
        message3.setAttribute("style", "display:none");
    }
});