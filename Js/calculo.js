let descEstudiante	= 0.2;
let descTrainee	= 0.5;
let descJunior 	= 0.85;
let publicoGeneral = 200;

const btnNumber 		= document.getElementById('cantidad');
const btnResumen		= document.getElementById('resumen');
const btnReestablecer 	= document.getElementById('borrar')

const optionCategoria	= document.getElementById('categoria');

btnNumber.addEventListener("click", precioFinal);
btnResumen.addEventListener("click", resumen);
btnReestablecer.addEventListener("click", reestablecer);


function precioFinal(){

	let precio = 0;

	if (optionCategoria.value == 'Estudiante') {
		precio = (publicoGeneral * descEstudiante) * btnNumber.value;
	} else if (optionCategoria.value == 'Trainee') {
		precio = (publicoGeneral* descTrainee) * btnNumber.value;
	} else if (optionCategoria.value == 'Junior') {
		precio = (publicoGeneral* descJunior) * btnNumber.value;
	} else { 
		precio = publicoGeneral * btnNumber.value;
	}

	return precio;
}

function reestablecer(){
	document.getElementById("total_a_pagar").innerHTML = '0.00';
}

function resumen(){
	document.getElementById("total_a_pagar").innerHTML = precioFinal()
}