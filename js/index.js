
/* Animacion para el selector de modo claro - oscuro */
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

/* Animacion typed para el titulo Hola soy hernan...*/
const typed = new Typed('.typed', {

    stringsElement: '#titulo-tipeado', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
	startDelay: 0, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 65, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings, que se borre y vuelva a iniciar
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
