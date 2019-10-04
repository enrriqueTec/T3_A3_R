function realizarFunciones(){
	
	var elementos = document.getElementsByTagName('input');

	document.getElementById('caja_vocales').value = (contarVocales(elementos[0].value));
	document.getElementById('caja_consonantes').value = (contarConsonantes(elementos[0].value));
	document.getElementById('caja_cantletras').value = (contarLetra(elementos[0].value, elementos[1].value));
	document.getElementById('caja_cadenaloca').value = (cadenaLoca(elementos[0].value));
}

function contarVocales(cadena){
	var contador = 0;

	for(var i = 0; i<cadena.length; i++){
		if(cadena.charAt(i) == 'A'|| cadena.charAt(i) == 'E'|| cadena.charAt(i) == 'I'|| cadena.charAt(i) == 'O'|| cadena.charAt(i) == 'U'||
		 cadena.charAt(i) == 'a'|| cadena.charAt(i) == 'e'|| cadena.charAt(i) == 'i'|| cadena.charAt(i) == 'o'|| cadena.charAt(i) == 'u'){
			contador ++;
		}
	}
	return contador;
}

function contarConsonantes(cadena){
	var contador = 0;

	for(var i = 0; i<cadena.length; i++){
		if(cadena.charAt(i) == 'A'|| cadena.charAt(i) == 'E'|| cadena.charAt(i) == 'I'|| cadena.charAt(i) == 'O'|| cadena.charAt(i) == 'U'||
		 cadena.charAt(i) == 'a'|| cadena.charAt(i) == 'e'|| cadena.charAt(i) == 'i'|| cadena.charAt(i) == 'o'|| cadena.charAt(i) == 'u' || cadena.charAt(i) == ' '){
			
		}else{
			contador ++;
		}
	}
	return contador;
}

function contarLetra(cadena, letra){
	var contador = 0;

	for(var i = 0; i<cadena.length; i++){
		if(cadena.charAt(i) == letra){
			contador ++;
		}
	}
	return contador;
}

function cadenaLoca(cadena){
	var cadLoca = "";
	for(var i = 0; i < cadena.length; i++ ){
		if(i%2 == 0){
			cadLoca = cadLoca + cadena.charAt(i).toUpperCase();
		}else{
			cadLoca = cadLoca + cadena.charAt(i).toLowerCase();
		}

	}
	return cadLoca;
}