const regex = /(?=.*[A-Z])|(?=.*[ÁÉÍÓÚáéíóúñÑ])/;
const textArea = document.querySelector(".contenedor__input textarea")
const seleccion = document.querySelector(".seccion__mensaje")
const alerta = document.querySelector(".contenedor__bottom span")


function encriptar() {

    if (alertaFunction()) {
        console.log("cumple")
        cambiarDisplay(textArea.value)
    } else {
        return;
    }

}

function desencriptar() {

    if (alertaFunction()) {
        console.log("cumple")
        cambiarDisplay(textArea.value)
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
        console.log("Indefinido")
        if (texto != "") {
            seccionNingunMensaje.style.display = "none"
            const seccions = document.createElement("section")
            seccions.classList.add("seccion__mensaje__encriptado")
            seccions.innerHTML = `
        <div class="seccion__mensaje__body__encriptado">
                 <p class="texto__encriptado">${texto}</p>
                <a href="" id="boton__copiar">Copiar  </a>
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
                <a href="" id="boton__copiar">Copiar  </a>
        </div>
        `

        } else {
            document.querySelector("main").removeChild(seccionMensaje)
            seccionNingunMensaje.style.display = "flex"    

        }
    }
}
