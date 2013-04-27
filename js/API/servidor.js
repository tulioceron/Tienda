//Servidor
function enviarRegistro(nombre, telefono, email){
		$.ajax({ //metodo para mandar datos a una pag
		  type: "POST",
		  url: "http://igitsoft.com/pgtest.php", //archivo al que se va a mandar el archivo
		  data: "nom="+nombre+"&tel="+telefono+"&ema="+email // Variables
		}).done(function( msg ){ //metodo done captura la respuesta que nos mande, en msg como cadena de texto
		  if(msg==1){
		  navigator.notification.confirm("Datos guardados satisfactoriamente", function(botones)
				{
			switch(botones){
					case 1:
						navigator.notification.beep(5);
						break;
					case 2:
						navigator.notification.vibrate(500);
						break;
							}
					}, "Titulo","Beep, Vibrar, Salir");
		  } else{ 
		  		navigator.notification.alert("Los datos no fueron enviados correctamente", null, "Error de registro", "Aceptar");
		  		}
		});
}