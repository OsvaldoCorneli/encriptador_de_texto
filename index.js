const regex = /(?=.*[A-Z])|(?=.*[ÁÉÍÓÚáéíóúñÑ])/;
const textArea = document.querySelector(".contenedor__input textarea")
const seleccion = document.querySelector(".seccion__mensaje")
const alerta = document.querySelector(".contenedor__bottom span")


function encriptar() {

    if (alertaFunction()) {
        cambiarDisplay(encriptarTexto(textArea.value))
    } else {
        return;
    }

}

function desencriptar() {

    if (alertaFunction()) {
        cambiarDisplay(desencriptarTexto(textArea.value))
    } else {
        return;
    }
}



function alertaFunction() {

    if (regex.test(textArea.value)) {
        alerta.style.color = "red"
        return false
    } else {
        alerta.style.color = "black"
        return true
    }

}

function cambiarDisplay(texto) {
    const seccionMensaje = document.querySelector(".seccion__mensaje__encriptado")
    const seccionNingunMensaje = document.querySelector(".seccion__mensaje")
    if (seccionMensaje == undefined) {
        if (texto != "") {
            seccionNingunMensaje.style.display = "none"
            const seccions = document.createElement("section")
            seccions.classList.add("seccion__mensaje__encriptado")
            seccions.innerHTML = `
        <div class="seccion__mensaje__body__encriptado">
                 <p class="texto__encriptado">${texto}</p>
                <a onclick="copiarTexto()" id="boton__copiar">Copiar  </a>
        </div>
        `

            document.querySelector("main").appendChild(seccions)
        }
        else {
            return;
        }
    } else {
        if (texto != "") {
            seccionMensaje.innerHTML = `
        <div class="seccion__mensaje__body__encriptado">
                 <p class="texto__encriptado">${texto}</p>
                <a onclick="copiarTexto()" id="boton__copiar">Copiar  </a>
        </div>
        `

        } else {
            document.querySelector("main").removeChild(seccionMensaje)
            seccionNingunMensaje.style.display = "flex"

        }
    }
}


function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


function copiarTexto() {
    const texto = document.querySelector(".texto__encriptado").innerText;

    const campoTemporal = document.createElement("textarea");
    campoTemporal.value = texto;
    document.body.appendChild(campoTemporal);
    campoTemporal.select();
    campoTemporal.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(campoTemporal);

    alert("Texto Copiado");
}