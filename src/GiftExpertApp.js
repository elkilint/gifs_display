import React, {useState} from 'react'
import { AddCategory } from './Component/AddCategory';
import { GiftGrid } from './Component/GiftGrid';



export const GiftExpertApp = () => {

    const [ categories, setCategories] = useState (['blues']);

    //const handleAdd = ()=>{

      //  setCategories ( [...categories, 'punk']);

    

    return (
        <>
            <h2> Gift Expert App  </h2>
            <AddCategory setCategories = {setCategories}/>

            <hr />

            

            <ol>
            {
            categories.map( category => (

                //return <li key = {category}> {category}</li>

                <GiftGrid 
                    key={ category }
                    category = { category}
                
                    />
            )
            )
            }
            </ol>
            
            </>
    )

        }