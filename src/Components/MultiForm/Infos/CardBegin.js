import React from 'react'
import './Card.css'

export default function CardBegin(props) {


  return (
  <div className='card'>
      <h1> 🍣 Aidez nous à ravir vos papilles 🌶️</h1>
      <button onClick={() => props.modifyIndex(2)}>COMMENCER</button>
  </div>
  )
}
