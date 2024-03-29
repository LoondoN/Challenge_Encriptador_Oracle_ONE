var botonEncriptar = document.querySelector(".btn_encriptar");
var botonDesencriptar = document.querySelector(".btn_desencriptar");
var muneco = document.querySelector(".contenedor_muneco");
var h3 = document.querySelector(".contenedor_h3");
var parrafo = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".texto_resultado")
var botonCopiar = document.querySelector(".btn_copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar(){
    ocultarAdelante();
    resultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

function copiar(){
    navigator.clipboard.writeText(resultado.innerHTML);
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i ++){
        if(texto[i]  == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i]  == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i]  == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i]  == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i]  == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}


function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i ++){
        if(texto[i]  == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i]  == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i]  == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i]  == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i]  == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

