// Ejemplo 1: Mostrar vista previa de una imagen de tipo file.

var input = document.querySelector("input")
var imagen = document.getElementById("imagen")
input.addEventListener("change", (e) => { // CUANDO SELECCIONE UNA IMAGEN
    console.log(e.target.files[0].name) // TE MUESTRA EL ARCHIVO SELECCIONADO
    var url = URL.createObjectURL(e.target.files[0]) // CREA UN DOM STRING UTF-16
    imagen.src = url
    // imagen.setAttribute("src",url) 

})

// Ejemplo 2 DRAG && DROP (arrastrar y soltar)

let div = document.getElementById("caja")
div.addEventListener("dragover", (e) => { // Cuando esté sobre la caja la imagen
    e.preventDefault()
})
div.addEventListener("drop", (e) => { // Cuando suelte la imagen
    e.preventDefault()
    //console.log(e)
    var archivo = new FileReader() // Lee el fichero que ingresa
    archivo.addEventListener("load", (e) => {
        console.log(e.target.result)
        div.style.backgroundImage = "url('" + e.target.result + "')"
    })
    archivo.readAsDataURL(e.dataTransfer.files[0]) // Metodo del FileReader
})


// Ejemplo 3

function ejecutarOver(e) {
    e.preventDefault()
}
function ejecutarStart(e) {
    e.dataTransfer.setData("text", e.target.id) // Guarda el ID en var "text"
}
function ejecutarDrop(e) {
    e.preventDefault()
    var data = e.dataTransfer.getData("text")
    console.log(data)
    console.log(e.target)
    e.target.appendChild(document.getElementById(data))
}


