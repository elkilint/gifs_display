import React, {useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, SetInputValue] = useState ('');

    const handleInputChange = (e) => {

        SetInputValue(e.target.value);

    }
    const handleSubmit = (e) => {

        e.preventDefault();

       if (inputValue.trim().length >2){

        setCategories (cate => 
            [inputValue, ...cate]
        )
        SetInputValue ('');
        console.log('ping');

       }
        
    }
    return (
        <form onSubmit = {handleSubmit}>
            <h2> Add Category</h2>

            <input 
            
            type = 'text'
            value = {inputValue}
            onChange = {handleInputChange}
            
            />


        </form>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired


}