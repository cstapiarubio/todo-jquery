$(document).ready(function(){
	$("#button").click(function(e){
		e.preventDefault();
		var job = $("#tareas").val();
		if(job == ""){
			alert("Debes ingresar una tarea");	
		}
		else{
			$("#contenedor").append("<div><span class='center-align'>"+ job + '</span>'+ '</div>'+'<button id="jobRemove">Remove</button>'+ "<p><input type='checkbox'></p>");	
		}
	});
});

  $('#jobRemove').click(function(){
         $("#contenedor").child().remove();
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
