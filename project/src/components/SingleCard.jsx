import React from 'react'

export default function SingleCard( {card,handleChoice} ){
    const handleClick=()=>{
        handleChoice(card)
    }
return(

    <div className='relative'>
                        <img src={card.src} alt="front-image" className='w-1/2 h-1/2 block border border-black rounded-lg'/>
                        <img src="../src/assets/images.png" alt="back-image" onClick={handleClick} className='w-1/2 h-1/2 block border border-black rounded-lg'/>
                    </div>
)
}