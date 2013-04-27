//Dispositivo
function disp(){
	//var arr = new Array(); Formas de declarar arreglos
	//var arr = new Array('hola',2,5,'adios'); Formas de declarar arreglos
	var arr = [];
	arr['name'] = device.name;
	arr['phonegap'] = device.cordova;
	arr['platform'] = device.platform;
	arr['id'] = device.uuid;
	arr['model'] = device.model;
	arr['version'] = device.version;
	
	return arr;
}