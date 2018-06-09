(function () {
	$(document).ready(function () {
		 
		$.ajax({
		type: 'POST',
		url : 'php/servicios/get.alumnos.php',
		dataType: 'json'
		}) 
		.done(function( data ){
			
			console.log("Correcto!");

			console.log( data ); // Se imprime en consola la api
			if (data.error) {
				console.log("error");
				return;
			}

			data.alumnos.forEach(function (alumno,index) {
				console.log(alumno);
			var content="";
			content+='<tr>';
			content+='<td>'+alumno.id+'</td>';
			content+='<td>'+alumno.nombre+'</td>';
			content+='<td>';
			content+='<a href="actualizar.html?id='+alumno.id+'" class="btn btn-primary botActulizar"> <i class="fa fa-edit"></i> </a>';
			content+='</td>';
			content+='<td>';
			content+='<a href="" data-id="'+alumno.id+'" class=" btn btn-dange botEliminar"> <i class="fa fa-edit"></i> </a>';
			content+=' </td>';
			content+='</tr>';

			$("#tblRegistro").append(content);
			
			});

		})
		.fail(function(){ 
			console.log("Fallo!");
		})
		.always(function(){
			console.log("Completo!");
		});
	});


$('body').on("click",".botEliminar",function (e){
		e.preventDefault();






swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});






		
		console.log("....")
		var id = $(this).data('id');
		console.log(id);

	$(document).ready(function(){
		
		$.ajax({
		type: 'POST',
		url : 'php/servicios/post.eliminaalumno.php?id='+id,
		dataType: 'json'
		}) 
		.done(function( data ){
			console.log(data);
		});
	});


	});
	
})(); 