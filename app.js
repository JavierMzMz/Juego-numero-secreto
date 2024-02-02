let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeorMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero! en ${intentos} ${(intentos === 1) ? 'intento.' : 'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();   
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeorMaximo)+1; 
   // Si ya sorteamos todos los numeros
   if(numerosSorteados.length == numeorMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   }else{
   // Si el numero genrado esta incluido en la lista
   if(numerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
   } else {
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   } 
   }
}

function condicionesInicales(){
    asignarTextoElemento('h1','Juego del numero secretor');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeorMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto); 
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Inicializar numero de intentos
    //Generar numero secrero
    //Indicar mensaje de intervalo
    condicionesInicales();
    //Desabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesInicales();
