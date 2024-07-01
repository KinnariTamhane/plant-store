import React, { useEffect, useState } from 'react';
import Product from './Product';


function ProductListing () {

    const [plantData, setPlantData] = useState([]);

    useEffect(()=>{
        const  fetchPlantData = async() =>{
            try{
                const response =  await fetch('https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/');
                const data = await (response.json());
                setPlantData(data);
            }
            catch(e){
                console.log(e);
            }
        }
        fetchPlantData()
    },[])

    const choosenPlant = (plant) =>{

    }

    return(
       <div className='mt-10'>
                {
                    plantData.length > 0 && plantData.map((item) => {
                       return(
                            <Product key={item.id} plant={item} selectedItem={choosenPlant}/>
                       )
                    })
                }
       </div>
    )
}

export default ProductListing;