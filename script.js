const btn = document.getElementById('btn')
const salida = document.getElementById('salida')
let contador = 0

btn.addEventListener('click', () => {
    contador++
    salida.textContent = contador
})
