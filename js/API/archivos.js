//archivos
function uploadPhoto(foto) {
            var options = new FileUploadOptions();
            options.fileKey="archivo";
            options.fileName="Marco";
            options.mimeType="image/jpeg";

            var params = {};
            params.value1 = "test";
            params.value2 = "param";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(foto, "http://igitsoft.com/pgtest.php", function(r){
			navigator.notification.confirm("Datos guardados satisfactoriamente\n"+disp()['id']+'\n'+r.response, function(botones)
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
			}, function(err){
				navigator.notification.alert("Error: "+err.code, null, "Error de Envío","De acuerdo");	
			}, options);
        }