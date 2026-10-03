document.addEventListener('DOMContentLoaded', async () => {
    let botonCuentos = document.getElementById('cuentos');
    let botonDibujos = document.getElementById('dibujos');
    let botonTaller = document.getElementById('taller');
    let mensajeCarrusel = document.querySelectorAll('.carrusel-item');
    let loader = document.getElementById('loader');

    botonCuentos.setAttribute('disabled', null);
    botonDibujos.setAttribute('disabled', null);
    botonTaller.setAttribute('disabled', null);
    //mensajeCarrusel.textContent = 'Esperando';
    let mensajeActual = 0;

    mensajeCarrusel.forEach((mensaje, index) => {
        mensaje.style.display = index === 0 ? 'flex' : 'none';
    });

    const intervaloCarrusel = setInterval(() => {
        mensajeCarrusel[mensajeActual].style.display = 'none';
        mensajeActual = (mensajeActual + 1) % mensajeCarrusel.length;
        mensajeCarrusel[mensajeActual].style.display = 'flex';
    }, 3500);

    const llamadaHealth = await fetch(`https://relatos-backend-2.onrender.com`, {
        method: 'GET'
    });

    console.log(llamadaHealth, 'funcionando correctamente');

    if(llamadaHealth.ok){

        clearInterval(intervaloCarrusel);

        //mensajeCarrusel.textContent = 'Todo listo';
        mensajeCarrusel.forEach(mensaje => {
            mensaje.style.display = 'none';
        });

        mensajeCarrusel[mensajeCarrusel.length -1].style.display = 'flex';
        mensajeCarrusel[mensajeCarrusel.length -1].textContent = 'Todo listo';
        
        botonCuentos.removeAttribute('disabled', null);
        botonDibujos.removeAttribute('disabled', null);
        botonTaller.removeAttribute('disabled', null);
        
        loader.style.display = 'none';

        /*botonCuentos.addEventListener('click', () =>{
            window.location.href="../vistas/login.html";
        });

        botonRegistro.addEventListener('click', () =>{
            window.location.href="../vistas/registro.html";
        });*/
    }
});