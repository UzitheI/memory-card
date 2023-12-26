import React from 'react'
import { useState } from 'react'
import SingleCard from './components/SingleCard.jsx'
const cardImages=[
    {'src':'../src/assets/angular.svg'},
    {'src':'../src/assets/aurelia.svg'},
    {'src':'../src/assets/backbone.svg'},
    {'src':'../src/assets/ember.svg'},
    {'src':'../src/assets/js-badge.svg'},
    {'src':'../src/assets/vue.svg'}
]
//array of images outside of the function because we dont want them to re render everytime the App renders


export default function App(){
    const[cards,setCards]=useState([])
    //this is for setting the turn to 0 everytime i run the game
    const[turns,setTurns]=useState(0)
    const[choiceOne, setchoiceOne]=useState(null);
    const[choiceTwo,setchoiceTwo]=useState(null);

    //created a function which duplicates the array of images, sorts it on the basis of positive and negative value of math.random and assigns an id on the basis of it
    const shuffleCards =()=>{
        const shuffledCards=[...cardImages, ...cardImages].sort(()=>Math.random() - 0.5).map((card)=>({...card,id:Math.random()}))

        setCards(shuffledCards);
        setTurns(0);
    }
    const handleChoice=(card)=>{
        choiceOne ? setchoiceTwo(card):setchoiceOne(card)
        if(choiceOne.src===choiceTwo.src){
            console.log('cards match')
        }
    }
    
    return(
        <div className='w-max mx-auto my-30'>
            <h1>Magic Match</h1>
            <button className='bg-none border border-red-200 px-6 py-12 rounded-lg text-red-300 font-bold cursor-pointer text-2 hover:bg-red-600 hover:text-red-100' onClick={shuffleCards}>New Game</button>
            <div className='mt-8 grid grid-cols-4 gap-2'>
                {cards.map(card=>(
                    <SingleCard key={card.id} card={card}
                    handleChoice={handleChoice}/>
                ))}
            </div>
        </div>
    );
}