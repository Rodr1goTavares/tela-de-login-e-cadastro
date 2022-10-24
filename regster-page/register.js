
//Animação: botão confirm
let bt = document.getElementById('registerbt');

bt.addEventListener('click', register);
bt.addEventListener('mouseenter', regmouseenter);
bt.addEventListener('mouseleave', regmouseleave);

function register(){

    let bt = document.getElementById('registerbt');
    
}

function regmouseenter(){

    let bt = document.getElementById('registerbt');
    bt.style.backgroundColor = "rgba(255, 255, 255, 0.507)";
}

function regmouseleave(){

    let bt = document.getElementById('registerbt');
    bt.style.backgroundColor = "rgba(255, 255, 255, 0.349)";
}
