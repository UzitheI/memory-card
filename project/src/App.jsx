import React, { useEffect } from 'react'
import { useState } from 'react'
import SingleCard from './components/SingleCard.jsx'
const cardImages=[
    {'src':'../src/assets/eight.jpeg',matched:false},
    {'src':'../src/assets/one.png',matched:false},
    {'src':'../src/assets/seven.png',matched:false},
    {'src':'../src/assets/king.png'},
    {'src':'../src/assets/five.jpeg',matched:false},
    {'src':'../src/assets/joker.png',matched:false}
]
//array of images outside of the function because we dont want them to re render everytime the App renders


export default function App(){
    const[cards,setCards]=useState([])
    //this is for setting the turn to 0 everytime i run the game
    const[turns,setTurns]=useState(0)
    const[choiceOne, setchoiceOne]=useState(null);
    const[choiceTwo,setchoiceTwo]=useState(null);
    const[disabled,setDisabled]=useState(false)

    //created a function which duplicates the array of images, sorts it on the basis of positive and negative value of math.random and assigns an id on the basis of it
    const shuffleCards =()=>{
        const shuffledCards=[...cardImages, ...cardImages].sort(()=>Math.random() - 0.5).map((card)=>({...card,id:Math.random()}))
        setchoiceOne(null)
        setchoiceTwo(null)
        setCards(shuffledCards);
        setTurns(0);
    }
    const handleChoice=(card)=>{
        choiceOne ? setchoiceTwo(card):setchoiceOne(card)
    }
    //reset choices and increse turn

    //compare 2 cards id
    useEffect(()=>{
        if(choiceOne && choiceTwo){
            setDisabled(true)
            if(choiceOne.src===choiceTwo.src){
               setCards(prevCards=>{
                return prevCards.map(
                    card=>{
                        if(card.src === choiceOne.src){
                            return{
                                ...card,matched:true
                            }
                        }
                        else{
                            return card
                        }
                    }
                )
               })
                resetTurn()
            }
            else{
                setTimeout(()=>
                resetTurn(),1000
                )
            }
        }
    },[choiceOne, choiceTwo])
    const resetTurn=()=>{
        setchoiceOne(null)
        setchoiceTwo(null)
        setTurns(prevTurns=>prevTurns+1)
        setDisabled(false)
    }
    useEffect(()=>{
        shuffleCards()
    },[])
    console.log(cards)
    return(
        <div className='w-max mx-auto my-30'>
            <h1 className='mb-6 mt-6'>Magic Match</h1>
            <button className='bg-none border border-red-200 px-6 py-6 rounded-lg text-red-300 font-bold cursor-pointer text-2 hover:bg-red-600 hover:text-red-100 mt-6' onClick={shuffleCards}>New Game</button>
            <div className='mt-8 grid grid-cols-6 gap-14'>
                {cards.map(card=>(
                    <SingleCard key={card.id} card={card}
                    handleChoice={handleChoice} 
                    flipped={card === choiceOne ||card === choiceTwo ||card.matched}
                    disabled={disabled}/>
                ))}
            </div>
            <p className='mt-6'>turns:{turns}</p>
            <div className='flex justify-end'>

            <a href='https://github.com/UzitheI/memory-card' className='relative bottom-8 border border-white rounded-lg p-2 pointer '>Github</a>
            </div>
            
        </div>
    );
}