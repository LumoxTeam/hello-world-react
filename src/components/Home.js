import React from 'react'
import '../styles/home.css'

const Home = props => {
  const { children } = props
  return (
    <div className="Home">      
      { children }
    </div>
  )
}

export default Home