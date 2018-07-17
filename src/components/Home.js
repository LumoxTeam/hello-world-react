import React from 'react'
import '../styles/home.css'

const Home = props => {
  const { data } = props
  return (
    <div className="Home">
      <h1>People List</h1>
      <div className="People-list">
        {
          data.map(people => <p className="People">{ people.name }</p>)
        }
      </div>
    </div>
  )
}

export default Home