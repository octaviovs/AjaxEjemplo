(function () {
	function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
	}

	$(document).ready(function(){
		var id= $_GET('id');
		console.log(id);
		$.ajax({
		type: 'POST',
		url : 'php/servicios/get.alumnos.php?id='+id,
		dataType: 'json'
		}) 
		.done(function( data ){
			
			console.log("Correcto!");
			console.log(data);
			var alumno=data.alumnos[0];
			$("#txtnombre").val(alumno.nombre);
			$("#cmbestado").val(alumno.estado);
			$("#txtid").val(alumno.id);
		});
	});



	$("#frmData").on("submit ",function(e){

		e.preventDefault();
		var formulario=$(this);
		console.log(formulario);
		console.log(".....");
		var dataSerializada=formulario.serialize(); 
		console.log(dataSerializada );
		console.log(".....");

		$.ajax({
		type: 'POST',
		url : 'php/servicios/post.guardaralumno.php',
		dataType: 'json',
		data:dataSerializada
		})
		.done(function( data ){
			
			console.log("Correcto!");

			console.log( data ); // Se imprime en consola la api


		})
		.fail(function(){ 
			console.log("Fallo!");
		})
		.always(function(){
			console.log("Completo!");
		});

	});

})();