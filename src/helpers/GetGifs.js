

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=gsnDLbfNdRmKKdtcVJfkXj9O7nfayurg&q=${encodeURI(category)}&limit=10` //ojo con los backtics
 
    const respuesta = await fetch(url);
    const { data } = await respuesta.json(); //ojo con la desustructuración de data

    const gifs =data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, // signo de interrogación para preguntar si vienen las imagenes
        }
    })
return gifs;
}
