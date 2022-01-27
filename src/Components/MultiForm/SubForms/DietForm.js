import React from 'react'
import './SubForm.css'

export default function DietForm(props) {

  const handleRadio = () => {

  }  

  const preventFunc = e => e.preventDefault()

  return (
  <form
  onSubmit={preventFunc} 
  className='diet-form'>

      <p>Quel est ton régime alimentaire ?</p>

    <label htmlFor="nodiet">Pas de régime en particulier</label>
    <input 
    onChange={handleRadio}
    name="diet"
    type="radio" 
    id="nodiet"
    value="nodiet" 
    // Rappel : id lie au label; name lie les radio entre eux et est utilisé en back; value est utilisé en front.
    />

    <label htmlFor="homnivorous">Homnivore</label>
    <input 
    onChange={handleRadio}
    name="diet"
    type="radio" 
    id="homnivorous"
    value="homnivorous" 
    />

    <label htmlFor="vegetarian">Végétarien</label>
    <input 
    onChange={handleRadio}
    name="diet"
    type="radio" 
    id="vegetarian"
    value="vegetarian" 
    />

    <label htmlFor="vegan">Végan</label>
    <input 
    onChange={handleRadio}
    name="diet"
    type="radio" 
    id="vegan"
    value="vegan" 
    />

    <button onClick={() => props.modifyIndex(3)}>Valider</button>

  </form>
  )
}
