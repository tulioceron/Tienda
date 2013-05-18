//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function() {
		if(!isLogin())
			window.location.href = '#login';
		$('#regFoto').tap(function(){
			tomarFoto();
		});
		$('#regEnviar').tap(function(){ // tap es igual que click pero mas rapido
			var nom = $('#regNom').val();
			var email = $('#regMail').val();
			var tel= $('#regTel').val();
			var foto= $('#regFoto').attr('rel');
			//validar campos vacios
			if(nom != '' && email != '' && tel != '' && foto != undefined && foto != '')
			{ 
				enviarRegistro(nom, tel, email, foto);//mandar a traer la funcion servidor
				
				}
				else{
					navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Registro', "Aceptar");
			}
	}); //click es un metodo
	}, false);
});

