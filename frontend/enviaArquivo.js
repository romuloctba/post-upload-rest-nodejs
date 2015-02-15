function enviar(){
	var formData = new FormData();
	formData.append("file", document.getElementById("arquivoInput").files[0]);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
				var div = document.getElementById('menssagem');
        var resposta = xhr.responseText;
        div.innerHTML += resposta;
    }
	}
	xhr.open("POST", "http://localhost:8080/api/upload");
	xhr.send(formData);
}