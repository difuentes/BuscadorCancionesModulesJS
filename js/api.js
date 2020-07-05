export class API {

    constructor(artista,cancion)
    {
        this.artista = artista;
        this.cancion = cancion ;
    }

    async consumirAPi ()
    {
        //consultar api 
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`) ;
        //transformar respuesta a json
        const respuesta = await url.json();

        return{
            respuesta
        }
    }
}