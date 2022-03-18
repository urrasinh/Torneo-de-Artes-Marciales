import { Saiyayin, Humano } from './clases/Razas.js'

let participantes = []

document.getElementById('btnRegistrar').addEventListener('click', () => {
    let nombre = document.getElementById('nombre')
    let raza = document.getElementById('raza')
    let previewElement = document.getElementById('preview')
    let imagenSrcBg = previewElement.style.backgroundImage
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2)
    let ki = document.getElementById('poderPelea')

    let nuevoParticipante

    if (raza.value === 'Saiyayin') {
        nuevoParticipante = new Saiyayin(
            nombre.value,
            imgSrc.value,
            ki.value,
            raza.valueI

        )
    } else if (raza.value == 'Humano'){
        nuevoParticipante = new Humano(
            nombre.value,
            imgSrc.value,
            ki.value,
            raza.valueI

        )
    }

    participantes.push(nuevoParticipante)
    console.log(participantes)
})