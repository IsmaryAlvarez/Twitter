var textarea = document.getElementById('comment');
textarea.addEventListener('input', function(){
	if(textarea.length != 0 || textarea !=null || textarea.value !=''){
		document.getElementById("btn").disabled = false;
} 		
})

// Contador de caracteres

var length = 140;
var el_c = document.getElementById('count');
el_c.innerHTML = length;
textarea.onkeyup = function () {
  document.getElementById('count').innerHTML = (140 - this.value.length);
 if (document.getElementById('count').textContent < 0) {
  	document.getElementById("btn").disabled = true;

  } else if  (document.getElementById('count').textContent > 0 && document.getElementById('count').textContent <10) {
  	count.style.color= 'orange';

  } else if  (document.getElementById('count').textContent <= 0) {
  	count.style.color= 'red';

  } else if (document.getElementById('count').textContent >= 10 && document.getElementById('count').textContent < 20 ){
  	count.style.color= 'yellow';
  	return;
}};


var botoncito = document.getElementById('btn');


botoncito.addEventListener('click', function(){
	//tenemos q tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;
	
	//limpiar el textarea
	document.getElementById('comment').value= '';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//validar que textarea no tenga un mensaje
	if(comments.length=== 0 || comments ==null || comments.value ===''){
		document.getElementById("btn").disabled = true;
		return;
	} 
	
	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	// fecha
	var dateSpan = document.createElement("span");
	dateSpan.textContent = new Date();

		 Reloj();

	
function Reloj() {

var tiempo = new Date();
var hora = tiempo.getHours();
var minuto = tiempo.getMinutes();

setTimeout('Reloj()', 1000);
str_hora = new String(hora);
if (str_hora.length == 1) {
document.getElementById('hora').innerHTML = '0' + hora +  ':';
}else{document.getElementById('hora').innerHTML = hora +  ':';
}
if (str_hora.charAt(0) < 12 ){
document.getElementById('minuto').innerHTML = minuto +  'AM';
} else {document.getElementById('minuto').innerHTML = minuto + 'PM';
}
str_minuto = new String(minuto);
if (str_minuto.length == 1) {
document.getElementById('minuto').innerHTML = '0' + minuto;
}

 
}




	var contenedorElemento= document.createElement('p');
	contenedorElemento.appendChild(textNewComment);

	newComments.appendChild(dateSpan);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments)
	 document.getElementById('count').innerHTML = 140;


});




