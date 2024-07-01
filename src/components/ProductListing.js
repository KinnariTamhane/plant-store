import React, { useEffect, useState} from 'react';
import Product from './Product';
import { updatePlant, clearList } from '../store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProductListing () {

    const [plantData, setPlantData] = useState([]);

    const dispatch = useDispatch();

    let navigate = useNavigate();

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
        dispatch(clearList())
        dispatch(updatePlant(plant));
        navigate('/pdp');
    }

    return(
       <div className='mt-10'>
                {
                    plantData.length > 0 && plantData.map((item) => {
                       return(
                            <Product key={item.id} plant={item} selectedPlant={() => choosenPlant(item)}/>
                       )
                    })
                }
       </div>
    )
}

export default ProductListing;