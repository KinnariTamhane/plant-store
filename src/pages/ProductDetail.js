import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product';

function ProductDetails () {
    const plantItem = useSelector((state) => state.plant.items);
    return(
        <>
         {
            plantItem && plantItem.map((item)=>{
                return(
                    <Product key={item.id} plant={item}/>
                )
            })
            
         }
        </>
    )

}

export default ProductDetails