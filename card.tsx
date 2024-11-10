import React from 'react'

const card = (props) => {
  return (
    <div>
        <h1>Name: Nazish</h1>
        <h1>RollNo: 123445</h1>
        <h1>Day: Monday</h1>
      
    </div>
  )
}

export default card;


import React from 'react'

const Card = () => {
  return (
    <div>
        <h1>Name: {props.name} </h1>
        <h1>RollNo: {props.rollno}</h1>
        <h1>Day: {props.day}</h1>
      
    </div>
  )
}

export default Card

