import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product';

function ProductDetails () {
    const plantItem = useSelector((state) => state.plant.items);
    return(
        <div className='mt-36'>
         {
            plantItem && plantItem.map((item)=>{
                return(
                    <Product key={item.id} plant={item}/>
                )
            })
            
         }
        </div>
    )

}

export default ProductDetails