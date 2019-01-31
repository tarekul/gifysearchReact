import axios from 'axios'

const getGifs = (search) =>{
    const api_key = 'siIyo4w5mg0REENX76Sr57QTgkt3BWvY';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`;
    return axios.get(url)
    .then(response=>{
        const {data} = response
        //return new array
        return data.data.map(currentGif =>{
            return currentGif.images.original.url   
        })
    })
}

export default getGifs