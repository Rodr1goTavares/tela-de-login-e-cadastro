

//Animação: botão confirm
let bt = document.getElementById('bt');
bt.addEventListener("click", btConfirm)
bt.addEventListener("mouseenter", btmouseEnter)
bt.addEventListener("mouseleave", btmouseLeave)


function btConfirm(){

    let errormsg = document.getElementById('errormsg');
    errormsg.innerHTML = 'Usuário ou senha incorretos';
    /* Como ainda não tem um back end para armazenar as informações
    do usuário, o programa vai sempre mostrar essa mensagem */
}

function btmouseEnter(){

    let btstyle = document.getElementById('bt');
    btstyle.style.backgroundColor = "rgba(255, 255, 255, 0.507)";
}

function btmouseLeave(){ 

    let btstyle = document.getElementById('bt');
    btstyle.style.backgroundColor = "rgba(255, 255, 255, 0.349)";
}



//Animação: Forgot Password ? 
let fgp = document.getElementById('fgpassword');
fgp.addEventListener("mouseenter", fgpmouseenter)
fgp.addEventListener("mouseleave", fgpmouseleave)


function fgpmouseenter(){
    fgp.style.color = "rgba(251, 255, 255, 0.712)"
}

function fgpmouseleave(){ 
    fgp.style.color ="rgba(251, 255, 255, 0.397)"
}



//Animação: create Account
let ca = document.getElementById('register');
ca.addEventListener('mouseenter', camouseenter);
ca.addEventListener('mouseleave', camouseleave);


function camouseenter(){
    ca.style.color = "rgba(251, 255, 255, 0.712)";
}

function camouseleave(){
    ca.style.color ="rgba(251, 255, 255, 0.397)";
}
