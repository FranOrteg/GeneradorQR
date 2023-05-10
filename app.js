const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    QR.makeCode(formulario.input.value);
});