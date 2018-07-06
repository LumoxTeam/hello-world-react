import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const app = document.getElementById('app')

class Home extends Component {
  render() {
    return (
      <div>
        <p>Hola Mundo desde Reactjs :D</p>
      </div>
    )
  }
}

ReactDOM.render(<Home />, app)