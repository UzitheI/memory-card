import React from 'react'
import css from './SingleCard'

export default function SingleCard( {card,handleChoice,flipped,disabled} ){
    const handleClick=()=>{
        if(!disabled){

            handleChoice(card)
        }
    }
return(

    <div className='relative'>
        <div className={flipped? "flipped":" "}>

                        <img src={card.src} alt="front-image" 
                        style={flipped ? { transform: "rotateY(0deg)"} : { transform: "rotateY(90deg)" }}
                        className='w-full block border border-white rounded-md absolute '/>
                        <img 
                        src="../src/assets/images.png" alt="back-image" 
                        onClick={handleClick} className=''/>
                        </div>
        </div>
)
}