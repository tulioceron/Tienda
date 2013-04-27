//Eventos
$(document).ready(function(){
	document.addEventListener("devicereyady", function() {
		window.location.href = '#login';
		$('#regEnviar').tap(function(){ // tap es igual que click pero mas rapido
			var nom = $('#regNom').val();
			var email = $('#regMail').val();
			var tel= $('#regTel').val();
			//validar campos vacios
			if(nom != '' && email != '' && tel != '')
			{
				enviarRegistro(nom, tel, email);//mandar a traer la funcion servidor
				
				}
				else{
					navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Registro', Aceptar);
			}
	}); //click es un metodo
	}, false);
});

