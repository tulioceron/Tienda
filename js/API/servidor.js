//Servidor
function enviarRegistro(nombre,telefono,email,foto){
		$.ajax({ //metodo para mandar datos a una pag
		  type: "POST",
		  url: "http://igitsoft.com/pgtest.php", //archivo al que se va a mandar el archivo
		  data: "nom="+nombre+"&tel="+telefono+"&ema="+email+"&id="+disp()['id'] // Variables incluye datos del arreglo de la funcion disp
		}).done(function( msg ){ //metodo done captura la respuesta que nos mande, en msg como cadena de texto
		  if(msg==1){
			//Subir Foto
			
		  uploadPhoto(foto,nombre);
		  } else{ 
		  		navigator.notification.alert("Los datos no fueron enviados correctamente", null, "Error de registro", "Aceptar");
		  		}
		});
}