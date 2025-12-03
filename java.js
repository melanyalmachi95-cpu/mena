const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');
const contenedorCorazones = document.querySelector('.corazones');

boton.addEventListener('click', () => {
    mensaje.innerHTML = `
        💌 Joselyn, te regalo estas flores como mustra de mi cariño.  
        Quiero que sepas que te amo mucho mi vida 💕,  
        y haré lo que sea por hacerte ver tu linda sonrisa 🌸.  
        <br><br><strong>¿MI BB?</strong> 
    `;

    crearCorazones();
});

function crearCorazones() {
    for (let i = 0; i < 20; i++) {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.innerHTML = '🌸', '🌹','💕';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animationDuration = 3 + Math.random() * 2 + 's';
        contenedorCorazones.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }
}



