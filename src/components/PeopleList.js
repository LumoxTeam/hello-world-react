import React from 'react'

import People from './People'

import '../styles/people-list.css'

const PeopleList = props => {
  const { data, handleOpenModal } = props
  return(
    <div className='People-container'>
      <h1>People List</h1>
      <div className="People-list">
        {
          data.map(people => {
            return (
              <People 
                people={ people }
                handleOpenModal={ handleOpenModal }
              />
            )

          })
        }
      </div>
    </div>
  )
}

export default PeopleList