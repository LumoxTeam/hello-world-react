import React from 'react'

import '../styles/people.css'


const People = props => {
  const { people, handleOpenModal } = props
  
  return(
    <p className="People"
      onClick={ (event) => handleOpenModal(people) }
    >
      { people.name }
    </p>
  )
}

export default People