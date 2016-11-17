function validateForm(){

//NOMBRE
		var apellido = $('#lastname').val();//rescatando el valor input
			var textosAZ = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/; 
		var nombre = $('#name').val(); //rescatando el valor input

	function nombre(){
		if (nombre ==="") { // comprando si name esta vacio
			$('.name-container').append('<span>Ingrese su Nombre</span>') // asignado span como hijo a name container
		return false;

		}else if(!textosAZ.test(nombre)){ // comprobando si nombre solo tiene letras de A a la Z
			$('.name-container').append('<span>Su nombre solo debe contener Letras</span>')
		return false;
		}

	}
	nombre();

	//APELLIDO
	function apellido(){
		if (apellido==="") { // comprando si apellido esta vacio
			$('.lastname-container').append('<span>Ingrese su Apellido</span>') // asignado span como hijo a name container
		return false;
		}else if(!textosAZ.test(apellido)){ // comprobando si apellido solo tiene letras de A a la Z
			$('.lastname-container').append('<span>Su Apellido solo debe contener Letras</span>')
		return false;
		}

	}

	apellido();

//MAYUSCULAS

	function validarMayusculas(){
		if (nombre.charAt(0)!==nombre.charAt(0).toUpperCase()){
			$('.name-container').append('<span>Su nombre debe comenzar con Mayúscula</span>');
			return false;

		}if (apellido.charAt(0)!==apellido.charAt(0).toUpperCase()){
			$('.lastname-container').append('<span>Su apellido debe comenzar con Mayúscula</span>');
			return false;
		}
	}
	mayusculas();

//CORREO ELECTRNICO

		function correoElectronico (){
			var letrasCorreo = /\w+@\w+\.+[a-z]/; 

			var correoElectronico = $('#input-email').val();
		if(correoElectronico ===""){
			$('.email-container').append('<span>Ingrese su correo Electrónico</span>');
			return false;

		}else if (!letrasCorreo.test(correoElectronico )){
			$('.email-container').append('<span>Verifique su Correo Electrónico</span>');
			return false;
		}
	}
	correoElectronico ();

//CONTRASEÑA
	function password(){
		var passWord = $('#input-password').val();
		if(clave===""){
			$('.form-group').eq(0).append('<span>Ingrese su contraseña</span>');
			return false;

		}else if (password.length < 5 || password==="password" || password==="123456" || clave==="098754"){
			$('.form-group').append('<span>Ingrese una contraseña más segura</span>');
			return false;
		}
	}
	password();


// ELEGIR BICIS
	function bicicleta()
	var bicicleta= $('.form-group').eq(1).val();{
		if (bicicleta==0){
			$('.form-group').eq(1).append('<span>Debes seleccionar una de las opciones</span>');
				return false;
		}else{
			return true;
		}
	}
	bicicleta();


}