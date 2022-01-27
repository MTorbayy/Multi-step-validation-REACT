import React, {useRef, useEffect} from 'react'
import './SubForm.css'

export default function FoodStyle(props) {

    const handleReturn = () => {
        props.modifyIndex(2)
    }

    const allCheckboxes = useRef([])

    const addCheck = el => {
        if(el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el)
        }
    }

    console.log(allCheckboxes)    

    const preventFunc = e => {
        e.preventDefault()

        const styleData = {
            foodStyle: []
        }

        allCheckboxes.current.forEach(checkbox => {
            if(checkbox.checked) {
                styleData.foodStyle.push(checkbox.value)
            }
        })

        props.modifyIndex(4, styleData)
    }

  return (
  <form
  className='checkbox-form'
  onSubmit={preventFunc}
  >
      <p>Quelles sont tes cuisines préférées ?</p>
      <span>Choix muliptles.</span>

      <label htmlFor="italian">Italienne</label>
      <input 
      ref={addCheck}
      type="checkbox"
      id="italian"
      value="italian" />

    <label htmlFor="japanese">Japonnaise</label>
      <input 
      ref={addCheck}
      type="checkbox"
      id="japanese"
      value="japanese" />

    <label htmlFor="indian">Indienne</label>
      <input 
      ref={addCheck}
      type="checkbox"
      id="indian"
      value="indian" />

    <label htmlFor="french">Française</label>
      <input 
      ref={addCheck}
      type="checkbox"
      id="french"
      value="french" />

    <label htmlFor="chinese">Chinoise</label>
      <input 
      ref={addCheck}
      type="checkbox"
      id="chinese"
      value="chinese" />

      <div className="container-nav-btns">
          <button 
          onClick={handleReturn}
          type="button" 
          //Remarque : le type button évite l'effet submit
          className='prev'>Précédent</button>
          <button>Valider</button>
          
      </div>
  </form>
  )
}
