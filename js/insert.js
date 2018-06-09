(function(){

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
		url : 'php/servicios/get.alumnos.php',
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