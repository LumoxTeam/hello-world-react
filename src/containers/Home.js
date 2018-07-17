import React, { Component } from 'react'
import HomeLayout from '../components/Home';
import api from '../people'


class Home extends Component {
  render() {
    return (
      <HomeLayout 
        data={api}
      />
    )
  }
}

export default Home