// Habilitando el botón con el input en el textarea
var textarea = document.getElementById('comment');
textarea.addEventListener('input', function(){
	if(textarea.length != 0 || textarea !=null || textarea.value !=''){
	document.getElementById("btn").disabled = false;
} 		
});

// Agregando el Contador de caracteres

var length = 140;
var contador = document.getElementById('count');
contador.innerHTML = length;
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

// Función del botón de twittear
var TwettBtn = document.getElementById('btn');
TwettBtn.addEventListener('click', function(){

	// Tomando el input ingresado en el TextArea
	var comments = document.getElementById('comment').value;

	// Limpiando el textarea
	document.getElementById('comment').value= '';

	// Creando el contenedor que esta en el html
	var cont = document.getElementById('cont');

	// Creando el div que contiene cada comentario
	var newComments = document.createElement('div');

	// Validando que textarea no tenga un mensaje
	if(comments.length=== 0 || comments ==null || comments.value ===''){
		document.getElementById("btn").disabled = true;
	}

	// Creando nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	// Agregando la Hora
	var dateSpan = document.createElement("p");
	var tiempo = new Date();
	var hora = tiempo.getHours();
	var minuto = tiempo.getMinutes();
	dateSpan.textContent= hora + ':' + minuto;

	// Creando el nodo del comentario
	var elementContainer= document.createElement('p');
	elementContainer.appendChild(textNewComment);

	// Agregando los elementos al contenedor
	newComments.appendChild(elementContainer);
	newComments.appendChild(dateSpan);
	cont.appendChild(newComments)

	// Regresando el contador de caracteres a 0
	document.getElementById('count').innerHTML = 140;
});