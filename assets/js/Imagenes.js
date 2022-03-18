import Personajes from './Consulta.js'

document.getElementById('buttonImages').addEventListener('click', async () => {
    const { personajes } = await Personajes.getData()
    
    // obteniendo valor del selector nombre
    const pj = document.getElementById('nombre').value
    // template de imagenes de personajes
    const imagenesPjTemplate = personajes.find((p) => p.name === pj)
    .imagenes.map((i) => `<img width="200" src="assets/imgs/${pj}/${i}"/>`) // ruta de personaje ${pj} (nombre)/ ${i} (nombre imagen)
    .join('') // transformar arreglo en un string con metodo join

    document.getElementsByClassName('personajes')[0].innerHTML = imagenesPjTemplate // accedemos al primer elemento del HtmlColection [0] e ingresamos el template 
    // agregar evento click con forEach // i = etiquetas de imagenes
    document.querySelectorAll('.personajes img').forEach((i) => {
        i.addEventListener('click', (e)=>{
            $('#imagenesModal').modal('toggle') 
            const imagenSrc = e.target.src
            document.getElementById('preview').style.backgroundImage = `url(${imagenSrc})`
        })
    })
})