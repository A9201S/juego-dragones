let inputMorgoth = document.getElementById('Morgoth')
let inputGlaurung = document.getElementById('Glaurung')
let inputUngoliant = document.getElementById('Ungoliant')
let inputAncalagon = document.getElementById('Ancalagon')

let seleccionarBotonDragon = document.getElementById('seleccionar-dragon'); //aqui la declaracion de js sera ubicada en el archivo de html por document.getelementbyid //
seleccionarBotonDragon.addEventListener('click',seleccionarDragonJugador); //este metodo de addeventlistener es para escuchar el evento de click sobre el boton de seleccionar//

let spanDragonJugador = document.getElementById('dragon-jugador')
let spanDragonEnemigo =  document.getElementById('dragon-enemigo')

let seleccionDragon = document.getElementById('seleccion-dragon')

let seleccionAtaque = document.getElementById('seccion-ataque')
seleccionAtaque.style.display = 'none'

let dragonAleatorioEnemigo = aleatorio(1, 5) //para q la pc escoja un dragon aleatorio(1=morgoth, 2=glaurung,etc)//
let seleccionarAtaque
let ataqueEnemigo
let ataqueAleatorioEnemigo = aleatorio(1, 5);


let botonFuego = document.getElementById('boton-fuego');
botonFuego.addEventListener('click', ataqueFuego );
let botonAgua = document.getElementById('boton-agua');
botonAgua.addEventListener('click', ataqueAgua );
let botonTierra = document.getElementById('boton-tierra');
botonTierra.addEventListener('click', ataqueTierra );
let botonViento = document.getElementById('boton-viento');
botonViento.addEventListener('click', ataqueViento );
let botonRayo = document.getElementById('boton-rayo');
botonRayo.addEventListener('click', ataqueRayo );

let spanAtaqueDragon = document.getElementById("ataque-dragon")
let spanAtaqueEnemigo = document.getElementById("ataque-enemigo")

let spanMensajeFinal = document.getElementById("mensaje-final")

let vidasJugador = 5
let spanVidasJugador = document.getElementById("vidas-jugador")
let vidasEnemigo = 5
let spanVidasEnemigo = document.getElementById("vidas-enemigo")

let botonReiniciar = document.getElementById("reiniciar-juego")
botonReiniciar.addEventListener("click", reiniciarJuego)
botonReiniciar.style.display = 'none'

function seleccionarDragonJugador() {
    if (inputMorgoth.checked) {
        spanDragonJugador.innerHTML = 'Morgoth';
    } else if (inputGlaurung.checked) {
        spanDragonJugador.innerHTML = 'Glaurung';
    } else if (inputUngoliant.checked) {
        spanDragonJugador.innerHTML = 'Ungoliant';
    } else if (inputAncalagon.checked) {
        spanDragonJugador.innerHTML = 'Ancalagon';
    } else {
        alert("Por favor, selecciona un dragón antes de continuar.");
        return; // Evita continuar si no se ha seleccionado un dragón
    }
    seleccionarDragonEnemigo();
}

function seleccionarDragonEnemigo() {
    if (dragonAleatorioEnemigo === 1) {
        spanDragonEnemigo.innerHTML = 'Morgoth';
    } else if (dragonAleatorioEnemigo === 2) {
        spanDragonEnemigo.innerHTML = 'Glaurung';
    } else if (dragonAleatorioEnemigo === 3) {
        spanDragonEnemigo.innerHTML = 'Ungoliant';
    } else {
        spanDragonEnemigo.innerHTML = 'Ancalagon';
    }
    seleccionAtaque.style.display = 'block'
    seleccionDragon.style.display = 'none'
}

function ataqueFuego() {                                                 
    ataqueJugador = 'fuego';
    ataqueEnemigoFunc();
    spanAtaqueDragon.innerHTML = 'fuego';
}
function ataqueAgua() {
    ataqueJugador = 'agua';
    ataqueEnemigoFunc();
    spanAtaqueDragon.innerHTML = 'agua';
}
function ataqueTierra() {
    ataqueJugador = 'tierra';
    ataqueEnemigoFunc();
    spanAtaqueDragon.innerHTML = 'tierra';
}
function ataqueViento() {
    ataqueJugador = 'viento';
    ataqueEnemigoFunc();
    spanAtaqueDragon.innerHTML = 'viento';
}
function ataqueRayo() {
    ataqueJugador = 'rayo';
    ataqueEnemigoFunc();
    spanAtaqueDragon.innerHTML = 'rayo';
}

function ataqueEnemigoFunc() {
    if (ataqueAleatorioEnemigo === 1){
        ataqueEnemigo = 'fuego';
        spanAtaqueEnemigo.innerHTML = 'fuego';
    } else if (ataqueAleatorioEnemigo === 2) {
        ataqueEnemigo = 'agua';
        spanAtaqueEnemigo.innerHTML = 'agua';
    } else if (ataqueAleatorioEnemigo === 3) {
        ataqueEnemigo = 'tierra';
        spanAtaqueEnemigo.innerHTML = 'tierra';
    } else if (ataqueAleatorioEnemigo === 4) {
        ataqueEnemigo = 'viento';
        spanAtaqueEnemigo.innerHTML = 'viento';
    } else {
        ataqueEnemigo = 'rayo';
        spanAtaqueEnemigo.innerHTML = 'rayo';
    }
    combate();
}

function combate() {
    if (ataqueJugador === ataqueEnemigo) {
        spanMensajeFinal.innerHTML = 'Quedaron EMPATADOS';
    } else if ((ataqueJugador === 'fuego' && ataqueEnemigo === 'tierra') ||
               (ataqueJugador === 'fuego' && ataqueEnemigo === 'viento') ||
               (ataqueJugador === 'agua' && ataqueEnemigo === 'fuego') ||
               (ataqueJugador === 'agua' && ataqueEnemigo === 'tierra') ||
               (ataqueJugador === 'tierra' && ataqueEnemigo === 'agua') ||
               (ataqueJugador === 'viento' && ataqueEnemigo === 'fuego') ||
               (ataqueJugador === 'rayo' && ataqueEnemigo === 'tierra') ||
               (ataqueJugador === 'rayo' && ataqueEnemigo === 'agua')) {
        spanMensajeFinal.innerHTML = '¡Ganaste!';
        vidasEnemigo--;  //hace q reste vidas al enemigo
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        spanMensajeFinal.innerHTML = 'Perdiste';
        vidasJugador--;   //hace q reste vidas al jugador
        spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo === 0) {
        spanMensajeFinal.innerHTML = '¡Felicitaciones Ganaste la BATALLA!';
        botonReiniciar.style.display = 'block'; // Muestra el botón de reinicio
    }
    else if (vidasJugador === 0) {
        spanMensajeFinal.innerHTML = 'PERDISTE CHANGO, vuelve a intentarlo';
        botonReiniciar.style.display = 'block'; // Muestra el botón de reinicio
    }
}

function reiniciarJuego() {
    location.reload ()
}

function iniciarJuego() {
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}