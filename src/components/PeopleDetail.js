import React from 'react'

const PeopleDetail = props => {
  const { name, height, mass, birth_year, gender } = props.people 
  return (
    <div className='People-detail'>
      <h2>{ name }</h2>
      <p className="People-detail-list">
        <ul>
          <li><b>Name: </b>{ name }</li>
          <li><b>Height: </b>{ height } cm.</li>
          <li><b>Mass: </b>{ mass } kg.</li>
          <li><b>Birthday Year: </b><date>{ birth_year }</date></li>
          <li><b>Gender: </b>{ gender.replace(/(^|\s)\S/g, l => l.toUpperCase()) }</li>
        </ul>
      </p>
    </div>
  )
}

export default PeopleDetail