function onlyNumbers(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789";
    especiales = [8, 45, 47];

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}
/*
function clean() {
    var val = document.getElementById("whatDay").value;
    var tam = val.length;
    for (i = 0; i < tam; i++) {
        if (!isNaN(val[i]))
            document.getElementById("whatDay").value = '';
    }
}
*/
textAreaContent = ""
numCharactersAllowed = 500;

function longTextArea() {
    numCharacter = document.forms[0].textoArea.value.length

    if (numCharacter > numCharactersAllowed) {
        document.forms[0].textoArea.value = textoAreaContent;
    } else {
        textoAreaContent = document.forms[0].textoArea.value
    }
}
textTitleC = ""
numCharactersAllowedT = 26;

function longTitle() {
    numCharacter = document.forms[0].textTitle.value.length

    if (numCharacter > numCharactersAllowedT) {
        document.forms[0].textTitle.value = textTitleC;
    } else {
        textTitleC = document.forms[0].textTitle.value
    }
}
