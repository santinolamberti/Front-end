let check = document.querySelector("#swich")
let precio1 = document.querySelector("#precio1")
let precio2 = document.querySelector("#precio2")
let precio3 = document.querySelector("#precio3")
let botonBlanco = document.querySelectorAll(".boton-blanco")
let botonCentral = document.querySelector(".boton-central")

check.addEventListener("change", function(e){
    if(e.target.checked){
        precio1.innerText = "$199.99";
        precio2.innerText = "$249.99";
        precio3.innerText = "$399.99";
        botonBlanco[0].classList.remove("boton-blanco")
        botonBlanco[0].classList.add("boton-central")
        botonBlanco[1].classList.remove("boton-blanco")
        botonBlanco[1].classList.add("boton-central")
        botonCentral.classList.remove("boton-central")
        botonCentral.classList.add("boton-blanco")

    }else{
        precio1.innerText = "$19.99";
        precio2.innerText = "$24.99";
        precio3.innerText = "$39.99";
        botonBlanco[0].classList.add("boton-blanco")
        botonBlanco[0].classList.remove("boton-central")
        botonBlanco[1].classList.add("boton-blanco")
        botonBlanco[1].classList.remove("boton-central")
        botonCentral.classList.add("boton-central")
        botonCentral.classList.remove("boton-blanco")
    }
})