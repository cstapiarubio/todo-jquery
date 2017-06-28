$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var job = $("#tareas").val();
		if(job == ""){
			alert("Debes ingresar una tarea");	
		}
		else{
			$("#contenedor").append("<div><span class='center-align'>"+ job + '</span>'+ '</div>');	
		}
	});
});