$(document).ready(function(){
	/*botón que si dejo espacio en blanco, 
	me alerta que ingresar un tarea*/
	$("#button").click(function(e){
		e.preventDefault();
		var job = $("#tareas").val();
		if(job == ""){
			alert("Debes ingresar una tarea");	
		}
		/*sino, me guarda la tarea que ingrese, no me sale el checkbox*/
		else{
			$("#contenedor").append("<div><span class='center-align'>"+ job + '</span>'+ '</div>'+'<button id="jobRemove">Remove</button>'+ "<input type='checkbox'>"+ "<form><p><input type='checkbox' class='filled-in' id='filled-in-box' checked='checked'/></p></form>");	
		}
		/*al apretar el boton "remove" me borra las tareas añadidas*/
		$('#jobRemove').click(function(){
  		var parentItem= $(this).parent();
         $(parentItem).remove();
	});
});
	});


/*
$(function() {
    $("#eliminar").click(function () {
        $('.check:checked').parent().remove(); 
    });
});


$(document).ready(function(){
	$("#jobRemove").click(function(event) {
			$("#tareas").remove();

			});
		});

$('#btRemoveAll').click(function() { // Elimina todos los elementos del contenedor
 
$(container).empty();
$(container).remove();
$('#btSubmit').remove(); iCnt = 0;
$('#btAdd').removeAttr('disabled');
$('#btAdd').attr('class', 'bt');
 
});
});*/
