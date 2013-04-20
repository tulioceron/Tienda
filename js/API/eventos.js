//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function() {
		$('#regEnviar').tap(function(){ // tap es igual que click pero mas rapido
			var nom = $('#regNom').val();
			var email = $('#regMail').val();
			var tel= $('#regTel').val();
			//validar campos vacios
			if(nom != '' && email != '' && tel != '')
			{
				navigator.notification.confirm("Nombre: "+nom+"\nEmail: "+email+"\nTeléfono: "+tel, function(botones)
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
				}
				else{
					navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Registro', Aceptar);
			}
	}); //click es un metodo
	}, false);
});

