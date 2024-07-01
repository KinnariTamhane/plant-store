import React, { useState } from 'react'

function Navigation() {

const NavMenu = [
    {
    id : 1,
    name: 'Top Picks'
    },{
    id : 2,
    name: 'Indoor'
    },
    {
    id : 3,
    name: 'Outdoor'
    },
    {
    id : 4,
    name: 'Seeds'
    }]
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
      };

  return (
    <ul className='flex gap-5 mx-8 mt-5 mb-20 justify-center'>
        {
            NavMenu.map((item,index)=>{
                return(
                    <li key={item.id} className={activeIndex === index ? 'text-[#0D986A] border-b-4 border-[#0D986A] font-bold' : ''} onClick={() => handleClick(index)}>{item.name}</li>
                )
            })
        }
    </ul>
  )
}

export default Navigation