import React, { useState } from 'react'
import CounterContextProvider from '../Context/CounterContext'
import { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

const Create = () => {

    const {count, increaseCount, decreaseCount} = useContext(CounterContext)

  return (

 
 <>
      <div> Counter Component: {count} </div>

        <button className='btn-signup' onClick={increaseCount}>Increase count</button>
        <button className='btn-signup ml-2' onClick={decreaseCount}>Decrease count</button>
      </>
  
     
    
  )
}

export default Create