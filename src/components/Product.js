import React from 'react'

function Product({plant,selectedPlant}) {
  return (
    <div className='bg-[#9CE5CB] my-6 ml-4 mr-10 relative h-auto border rounded-3xl' onClick={selectedPlant}>
         <p className='category text-[#002140] text-left text-xl pl-8 pt-4 mb-2 font-bold text-wrap'>{plant.category}</p>
        <p className='name text-[#002140] text-left text-5xl pl-8 pt-3 mb-6 font-bold text-wrap mr-8'>{plant.name}</p>
        <p className='price text-[#002140] text-left text-xl pl-8 pt-4 mb-4'>{plant.price}</p>
        <img className='h-[180px] absolute right-[-50px] top-[-45px]' src={plant.image} alt={plant.name}/>
    </div>
  )
}

export default Product