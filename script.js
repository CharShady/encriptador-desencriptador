function encriptar() {
    const inputText = document.getElementById('textoEntrada').value;
    const outputText = document.getElementById('textoSalida');
    outputText.value = rot13(inputText);
}

function desencriptar() {
    const inputText = document.getElementById('textoEntrada').value;
    const outputText = document.getElementById('textoSalida');
    outputText.value = rot13(inputText);
}

function limpiar(){
    document.getElementById('textoEntrada').value = '';
    document.getElementById('textoSalida').value = '';
}

function rot13(text) {
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (/[a-z]/.test(char)) {
            var charCode = char.charCodeAt(0);
            var newCharCode = ((charCode - 97 + 13) % 26) + 97;
            text = text.substring(0, i) + String.fromCharCode(newCharCode) + text.substring(i + 1);
        } else {
            alert("Recuerda solo usar letras minúsculas.");
            return "";
        }
    }
    return text;
}
