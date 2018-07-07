import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import '../styles/home.css'

const app = document.getElementById('app')

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <p>Hola Mundo desde Reactjs :D</p>
      </div>
    )
  }
}

ReactDOM.render(<Home />, app)