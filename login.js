

//Botão confirm
let bt = document.getElementById('bt');
bt.addEventListener("click", btConfirm)
bt.addEventListener("mouseenter", btmouseEnter)
bt.addEventListener("mouseleave", btmouseLeave)


function btConfirm(){

    let errormsg = document.getElementById('errormsg');
    errormsg.innerHTML = 'Usuário ou senha incorretos, tente novamente';
    /* Como ainda não tem um back end para armazenar as informações
    do usuário o programa vai sempre mostrar essa mensagem */
}



function btmouseEnter(){

    let btstyle = document.getElementById('bt');
    btstyle.style.backgroundColor = "rgba(255, 255, 255, 0.507)";
}



function btmouseLeave(){ 

    let btstyle = document.getElementById('bt');
    btstyle.style.backgroundColor = "rgba(255, 255, 255, 0.349)";
}



//Esqueceu senha ? 
let fgp = document.getElementById('fgpassword');
fgp.addEventListener("mouseenter", fgpmouseenter)
fgp.addEventListener("mouseleave", fgpmouseleave)


function fgpmouseenter(){
    fgp.style.color = "rgba(251, 255, 255, 0.712)"
}

function fgpmouseleave(){ 
    fgp.style.color ="rgba(251, 255, 255, 0.397)"
}