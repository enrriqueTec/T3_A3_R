function realizarConversion() {
	
	var elementos = document.getElementsByTagName('input');
	document.getElementById('caja_binario').value = (parseFloat(elementos[0].value).toString(2));
	document.getElementById('caja_octal').value = (parseFloat(elementos[0].value).toString(8));
	document.getElementById('caja_hex').value = (parseFloat(elementos[0].value).toString(16));
}