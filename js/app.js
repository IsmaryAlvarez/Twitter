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
/*  if (document.getElementById('count') > 140) {
  	document.getElementById("btn").disabled = true;

  } else if  (count > 120 && count <130) {
  	span.style.color= 'grey';

  } else if (count >= 130 && count < 140 ){
  	document.getElementById('count').style.color=red;
}*/};


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
	
	//crear checkbox

	var chck = document.createElement('input');
	chck.type = 'checkbox';

	//creamos icono de corazon
	var heart = document.createElement('i');
	heart.classList.add('fa', 'fa-heart', 'heart');

	//creamos icono de basura
	var trash = document.createElement('i');
	trash.classList.add('fa', 'fa-trash', 'trash');

	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	// fecha
	var dateSpan = document.createElement("span");
	dateSpan.textContent = new Date();

	var contenedorElemento= document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(dateSpan);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments)

});


