import React, {useState, useEffect}from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';
// import { getGift} from '../helpers/GetGifs';


export const GiftGrid = ({category}) => {

    // const [images, setimages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    // useEffect( ()=> {

    //     getGift(category)
    //     .then (setimages);

    // }, [category])
   

    return (
        <> 
        <h3 className = 'animate__fadeInLeft' > {category } </h3>

        {loading && <p> Cargando...</p>}
                        
            <div className = "card-grid"> 
            
            {                
                 images.map ((img) => (
                    <GifGridItem  
                    key = {img.id}
                    { ...img }
                     />

                 ))
    
                 }
        </div>

        </>

    )
                }