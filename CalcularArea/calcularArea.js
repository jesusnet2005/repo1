let largo;
let ancho;

function calcularArea() {
    largo = parseFloat(document.getElementById('largo').value);
    ancho = parseFloat(document.getElementById('ancho').value);

    let area = largo * ancho;

    document.getElementById('result').innerText = `El área es: ${area}`;
}
