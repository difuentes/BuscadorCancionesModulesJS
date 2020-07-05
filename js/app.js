import * as UI from './interfaz.js';
import {API} from './api.js';

UI.formularioBuscar.addEventListener('submit', (e) => {

    e.preventDefault();

    //obtener valores del formulario
    const artista = document.getElementById('artista').value;
    const cancion = document.getElementById('cancion').value;

    if(artista === '' || cancion === '' ){

        //error campos vacios
        UI.divMensaje.innerHTML = `
            <div class="container bg-danger" style="text-align:center"> 
                <h2 style="color:white;"> Error</h2>
                <hr style="color:white ">
                <p style="color:white;">todos los campos son obligatorios</p>
            </div>`

        setTimeout(() => {
            UI.divMensaje.innerHTML = ''
            UI.divMensaje.remove();
        }, 3000);
    }else{
        //realizar consulta a API
        const api = new API(artista,cancion);
        //realizar promise
        api.consumirAPi()
            .then(data => {
                if(data.respuesta.lyrics)
                {
                    console.log("existe");
                    //cancion existente 
                    const letra = data.respuesta.lyrics;
                    UI.divResultado.innerHTML = letra;

                }
                else{
                    console.log("no existe");
                            UI.divMensaje.innerHTML = `
                            <div class="container bg-danger" style="text-align:center"> 
                                <h2 style="color:white;"> Error</h2>
                                <hr style="color:white ">
                                <p style="color:white;">Cancion no existe</p>
                            </div>`
                
                            setTimeout(() => {
                                UI.divMensaje.innerHTML = ''
                                UI.divMensaje.remove();
                                UI.formularioBuscar.reset();
                            }, 3000);
                                
                }
                
            })
       
    }

})
