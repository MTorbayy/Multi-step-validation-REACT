import React, { useState } from 'react'
import './MultiForm.css'
import Indicator from "./Indicator/Indicator"
import CardBegin from './Infos/CardBegin'
import CardEnd from './Infos/CardEnd'
import DietForm from './SubForms/DietForm'

export default function Multiform() {

    const [formIndex, setFormIndex] = useState(1)
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        foodStyle: [],
        allergies: [],
        prefs: {}
    })

    const modifyIndex = (index, data) => {
        
        setFormIndex(index)

        if(data) {

            const newData = {...allFormData}
            const firstPropNewData = Object.keys(data)[0]
            //Ici on récupère la première propriété de l'objet data (dietForm)

            newData[firstPropNewData] = data[firstPropNewData]

            setAllFormData(newData)
        }
        
    }

    console.log(allFormData)

  return (
  <div className="container-multiform">
      <Indicator />

      {formIndex === 1 ? <CardBegin modifyIndex={modifyIndex}/> 
      : formIndex === 2 ? <DietForm modifyIndex={modifyIndex}/> 
      : ""}
      
  </div>
  )
}
