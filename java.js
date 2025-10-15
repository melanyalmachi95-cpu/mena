const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');
const contenedorCorazones = document.querySelector('.corazones');

boton.addEventListener('click', () => {
    mensaje.innerHTML = `
        💌 Joselyn, sé que fallé y me duele saber que estás enojada conmigo.  
        Pero quiero que sepas que vales muchísimo para mí,  
        y haré lo que sea por recuperar tu sonrisa 💖.  
        <br><br><strong>¿Me perdonas?</strong> 😢
    `;

    crearCorazones();
});

function crearCorazones() {
    for (let i = 0; i < 20; i++) {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.innerHTML = '💖';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animationDuration = 3 + Math.random() * 2 + 's';
        contenedorCorazones.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }
}
