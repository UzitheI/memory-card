import React from 'react'
import { useState } from 'react'
const cardImages=[
    {'src':'./assets/angular.svg'},
    {'src':'./assets/aurelia'},
    {'src':'./assets/backbone.svg'},
    {'src':'./assets/ember.svg'},
    {'src':'./assets/js-badge.svg'},
    {'src':'./assets/vue.svg'}
]
//array of images outside of the function because we dont want them to re render everytime the App renders


export default function App(){
    const[cards,setCards]=useState([])
    //this is for setting the turn to 0 everytime i run the game
    const[turns,setTurns]=useState(0)

    //created a function which duplicates the array of images, sorts it on the basis of positive and negative value of math.random and assigns an id on the basis of it
    const shuffleCards =()=>{
        const shuffledCards=[...cardImages, ...cardImages].sort(()=>Math.random() - 0.5).map((card)=>({...card,id:Math.random()}))

        setCards(shuffledCards);
        setTurns(0);
    }
    console.log(cards,turns);
    return(
        <div className='w-max mx-auto my-30'>
            <h1>Magic Match</h1>
            <button className='bg-none border border-red-200 px-6 py-12 rounded-lg text-red-300 font-bold cursor-pointer text-2 hover:bg-red-600 hover:text-red-100' onClick={shuffleCards}>New Game</button>
        </div>
    );
}